// Warning: Use SetVariableValues() to set all variable values instead of this.setVariableValues() - this is so the module can track the value of all variables and restore those values when redefining variables defs at runtime!

import { InstanceBase, runEntrypoint, InstanceStatus, CompanionInputFieldTextInput } from '@companion-module/base'
import { GetActions } from './actions'
import { DeviceConfig, GetConfigFields } from './config'
import { GetPresets } from './presets'
import { ProPresenter, StatusUpdateJSON, RequestAndResponseJSONValue } from 'renewedvision-propresenter'
import { GetVariableDefinitions, ResetVariablesFromLocalCache, SetVariableValues } from './variables' // This modules uses SetVariableValues(this, CompanionVariableValues) function as an override for ModuleInstance.setVariableValues() that must be used in order to capture and cache all variable values (which are later used to reset variable values when we add new vars by re-defining all vars)
import { ProPresenterStateStore, ProMessage, timestampToSeconds, secondsToTimestamp } from './utils'
import { GetFeedbacks } from './feedbacks'
import { Input } from '@julusian/midi'

// propresenterStateStore (defined in utils.ts) is used to locally cache various state data of ProPresenter that are used to build dynamic Actions and Variables which "know" about the current state of ProPresenter.
const emptyPropresenterStateStore: ProPresenterStateStore = {
	proTransportLayersStatus: {
		presentation: false,
		announcement: false,
		audio: false,
	},
	proLayersStatus: {
		video_input: false,
		media: false,
		slide: false,
		announcements: false,
		props: false,
		messages: false,
		audio: false,
	},
	proScreensStatus: {
		audience: false,
		stage: false,
	},
	proGroups: [],
	proTimers: [],
	proProps: [],
	proMacros: [],
	stageScreensWithLayout: [],
	messageTokenInputs: [],
	looksChoices: [],
	macroChoices: [],
	propChoices: [],
	videoInputChoices: [],
	timerChoices: [],
	stageScreenChoices: [],
	stageScreenLayoutChoices: [],
	messageChoices: [],
	clearGroupChoices: [],
	activeLookID: {
		uuid: '',
		name: '',
		index: -1,
	},
	stageMessage: '',
	activePresentationData: null,
}

class ModuleInstance extends InstanceBase<DeviceConfig> {
	public midi_input?: Input // Set up a new Midi input. This will be used to listen for MIDI messages (Note-On messages) that will be used to trigger Companion buttons.
	public midi_available: boolean = true // This will be set to false if the Midi input fails to initialise (e.g. on some computers that don't have MIDI drivers installed)

	constructor(internal: unknown) {
		super(internal)
		try {
			this.midi_input = new Input()
		} catch (error) {
			this.midi_available = false
			console.log('Error creating Midi input: ' + error)
		}
	}

	public config: DeviceConfig = {
		ProPresenter: null,
		host: '',
		port: 1025,
		timeout: 1000,
		custom_timer_format_string: 'mm:ss',
		exta_debug_logs: false,
		enable_midi_button_pusher: false,
		virtual_midi_port_name: '',
		midi_port_dropdown: 'virtual',
		companion_port: 8000,
		suppress_active_presentation_change_warning: false,
	}

	// ProPresenter API module - handles API communication with ProPresenter through convenience methods
	public ProPresenter: any

	// Start with empty state
	public propresenterStateStore: ProPresenterStateStore = emptyPropresenterStateStore

	// Private variables
	private lastSetActionDefinitionsTime: number = 0 // A timestamp (in ms since epoch) of the last time that setActionDefinitions() was called (0 means not yet called)
	private setActionDefinitionsTimeoutId: ReturnType<typeof setTimeout> | null = null
	private lastSetVariableDefinitionsTime: number = 0 // A timestamp (in ms since epoch) of the last time that setVariableDefinitions() was called (0 means not yet called)
	private setVariableDefinitionsTimeoutId: ReturnType<typeof setTimeout> | null = null
	private timeOfLastStatusUpdate: number = 0 // A timestamp (in ms since epoch) of the last time that ProPresenter sent a timer/system_time status update.
	public lastVideoInputJSON: string = '' // Used for checking if video inputs has changed each time it's polled (TODO: consider removing one day when api supports chunked /v1/video_inputs and "everyone" is running versions that support it)
	public lastGlobalGroupsJSON: string = '' // Used for checking if global groups have changed each time it's polled (TODO: consider removing one day when api supports chunked /v1/groups and "everyone" is running versions that support it)

	public async init(config: DeviceConfig): Promise<void> {
		this.log('debug', 'Midi input: ' + JSON.stringify(this.midi_input)) // This will show the Midi input object in the debug log (Logged in case some computers fail to create one)
		this.updateStatus(InstanceStatus.Connecting) // The ProPresenter object will be used to establish a persistant status feedback connection later and update the InstanceStatus within configUpdated() below
		await this.configUpdated(config)
	}
	// When module gets deleted
	public async destroy() {
		this.log('debug', 'Module destroy()')
	}

	public async configUpdated(config: DeviceConfig) {
		this.log('info', 'Module Config: ' + JSON.stringify(config))
		this.config = config

		// Configure a callback for MIDI input messages
		if (this.midi_available && this.midi_input) {
			this.midi_input.on('message', async (deltaTime, message) => {
				const midiMessageChannel: number = message[0] & 0x0f
				const midiMessageIsNoteon: boolean = (message[0] & 0x90) == 0x90
				const midiMessageNote: number = message[1]
				const midiMessageVelocity: number = message[2]

				this.log(
					'debug',
					`MIDI Message: Midi Channel: ${midiMessageChannel}, Is Note On?: ${midiMessageIsNoteon}, Note: ${midiMessageNote}, Velocity: ${midiMessageVelocity}, Delta Time: ${deltaTime}`
				)

				// api/location/<page>/<row>/<column>/press
				// page = channel
				// row = note
				// column = velocity
				const buttonPressURL = `http://127.0.0.1:${this.config.companion_port}/api/location/${
					midiMessageChannel + 1
				}/${midiMessageNote}/${midiMessageVelocity}/press`
				this.log('debug', 'Sending button press HTTP request to: ' + buttonPressURL)

				fetch(buttonPressURL, {
					signal: AbortSignal.timeout(2000),
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
				})
					.then((response) => {
						this.log('debug', 'Button press response: ' + response.status + ': ' + response.statusText)
					})
					.catch((error) => {
						this.log('debug', 'Error fetching ' + buttonPressURL + '. ' + error)
					})
			})
		}

		// Close midi port (if open)
		if (this.midi_available && this.midi_input?.isPortOpen()) {
			this.log('debug', 'Closing Midi port')
			this.midi_input.closePort()
		}

		// Get MIDI port configs
		const virtual_midi_port_name: string = this.config.virtual_midi_port_name
		const midi_port_name: string = this.config.midi_port_dropdown

		// Connect to configured MIDI (virtual) port (if enabled in config)
		if (this.midi_available && this.config.enable_midi_button_pusher) {
			try {
				if (midi_port_name == 'virtual') {
					this.log('debug', 'Connecting virtual_midi_port_name: ' + virtual_midi_port_name)
					this.midi_input?.openVirtualPort(virtual_midi_port_name)
				} else {
					this.log('debug', 'Connecting midi_port_name: ' + midi_port_name)
					this.midi_input?.openPortByName(midi_port_name)
				}
			} catch (error) {
				let message = 'Unknown Error'
				if (error instanceof Error) message = error.message
				this.log('debug', 'Error connecting midi port: ' + message)
			}
		} else {
			this.log('debug', 'MIDI button pusher disabled')
		}

		if (this.config.host === '' || this.config.host === undefined) {
			this.log('info', 'Please fill in IP address and hit save')
		} else {
			this.ProPresenter = new ProPresenter(this.config.host, this.config.port, this.config.timeout) // This object is our "API manager" that handles all the network calls for us

			// Register callbacks for live updates to various status'
			this.ProPresenter.registerCallbacksForStatusUpdates(
				{
					'status/slide': this.statusSlideUpdated,
					timers: this.timersUpdate,
					'timers/current': this.timersCurrentUpdated,
					'presentation/slide_index': this.presentationSlideIndexUpdate,
					'announcement/slide_index': this.announcementSlideIndexUpdated,
					'playlist/active': this.activePlaylistUpdated,
					'playlist/focused': this.focusedPlaylistUpdated,
					'presentation/focused': this.focusedPresentationUpdated,
					'presentation/active': this.activePresentationUpdated, // The doco for /v1/status/updates mentions presentation/current as a permitted streaming endpoint - but it's a hyperlink that actually links to presentation/active (I tested and either works - but I'm using the one that is linked to).
					'look/current': this.activeLookUpdated,
					looks: this.looksUpdated,
					macros: this.macrosUpdated,
					props: this.propsUpdated,
					'stage/layout_map': this.stageScreensUpdated,
					'stage/layouts': this.stageScreenLayoutsUpdated,
					'stage/message': this.stageMessageUpdated,
					messages: this.messagesUpdated,
					'status/audience_screens': this.screenStatusUpdated,
					'status/stage_screens': this.screenStatusUpdated,
					'status/layers': this.layersStatusUpdated,
					'timer/video_countdown': this.videoCountdownTimerUpdated,
					'transport/presentation/current': this.transportLayerUpdated,
					'transport/announcement/current': this.transportLayerUpdated,
					'transport/audio/current': this.transportLayerUpdated,
					'transport/audio/time': this.transportAudioTime,
					'timer/system_time': this.systemTimeUpdated,
					'capture/status': this.captureStatusUpdated,
				},
				2000
			)

			this.initVariables() // Define the static "base" variables and dynamic variables based on ProPresenter state. (This function will be called many more times as the module gathers status data from ProPresenter and also get status updates)

			this.ProPresenter.on('requestNotOK', (requestAndResponseJSON: RequestAndResponseJSONValue, options: any) => {
				this.log(
					'debug',
					'Request Error: ' +
						requestAndResponseJSON.status +
						'. ' +
						requestAndResponseJSON.data +
						'. Called: ' +
						requestAndResponseJSON.path +
						' with options: ' +
						JSON.stringify(options)
				)

				if (this.config.suppress_active_presentation_change_warning) {
					//Don't show a warning when next/previous slide in a presentation is triggered but there is none
					if (requestAndResponseJSON.path == '/v1/presentation/active/next/trigger') return
					if (requestAndResponseJSON.path == '/v1/presentation/active/previous/trigger') return
				}
				this.updateStatus(InstanceStatus.UnknownWarning)
			})

			this.ProPresenter.on('statusConnectionDisconnected', () => {
				// Update status of module, based on the ProPresenter object's persistent status connection (The ProPresenter object will emit Connected/Disconnected/Error messages about the status connection)
				this.updateStatus(InstanceStatus.Disconnected)
			})
			this.ProPresenter.on('statusConnectionError', () => {
				// Update status of module, based on the ProPresenter object's persistent status connection (The ProPresenter object will emit Connected/Disconnected/Error messages about the status connection)
				this.updateStatus(InstanceStatus.UnknownError)
			})

			this.ProPresenter.on('statusConnectionConnected', async () => {
				// Update status of module, based on the ProPresenter object's persistent status connection (The ProPresenter object will emit Connected/Disconnected/Error messages about the status connection)
				this.updateStatus(InstanceStatus.Ok)

				// Before calling initVariables(), calls setVariableDefinitions(), first make some requests to ProPresenter to get initial state that will be used for dynamic actions and variables
				this.log('debug', 'Query ProPresenter Initial State')

				// Get the timer definitions
				const timersResult: RequestAndResponseJSONValue = await this.ProPresenter.timersGet()
				// If we got an ok response, construct a statusJSONObject and call the callback for timersUpdate()
				if (timersResult.ok) {
					const timersJSONObject: StatusUpdateJSON = {
						url: 'looks',
						data: timersResult.data,
					}
					this.timersUpdate(timersJSONObject) // This will update the local cache state for the timer definitions & call initVariables() and initActions() - which are both rate limited and coalesced.
				}

				// Get version info (and update version based variables)
				const versionResult: RequestAndResponseJSONValue = await this.ProPresenter.version()
				if (versionResult.ok) {
					this.processIncommingData(versionResult) // This will update version based variables
				}

				// Get Clear Groups info
				const clearGroupsResult: RequestAndResponseJSONValue = await this.ProPresenter.clearGroupsGet()
				// If we got an ok response, Construct a statusJSONObject and call the callback for clearGroupsUpdated()
				if (clearGroupsResult.ok) {
					const clearGroupsJSONObject: StatusUpdateJSON = {
						url: 'clear/groups',
						data: clearGroupsResult.data,
					}
					this.clearGroupsUpdated(clearGroupsJSONObject) // This will update the local cache of available ClearGroups choices and then call initActions() - which is rate limited and coalesced.
				}

				// Get Looks info
				const looksResult: RequestAndResponseJSONValue = await this.ProPresenter.looksGet()
				// If we got an ok response, Construct a statusJSONObject and call the callback for looksUpdated()
				if (looksResult.ok) {
					const looksStatusJSONObject: StatusUpdateJSON = {
						url: 'looks',
						data: looksResult.data,
					}
					this.looksUpdated(looksStatusJSONObject) // This will update the local cache of available Look choices and then call initActions() - which is rate limited and coalesced.
				}

				// Get Macros info
				const macrosResult: RequestAndResponseJSONValue = await this.ProPresenter.marcosGet()
				// If we got an ok response, Construct a statusJSONObject and call the callback for macrosUpdated()
				if (macrosResult.ok) {
					const macrosStatusJSONObject: StatusUpdateJSON = {
						url: 'macros',
						data: macrosResult.data,
					}
					this.macrosUpdated(macrosStatusJSONObject) // This will update the local cache of available Macro choices and then call initActions() - which is rate limited and coalesced.
				}

				// Get Props info
				const propsResult: RequestAndResponseJSONValue = await this.ProPresenter.propsGet()
				// If we got an ok response, Construct a statusJSONObject and call the callback for propsUpdated()
				if (propsResult.ok) {
					const propsStatusJSONObject: StatusUpdateJSON = {
						url: 'props',
						data: propsResult.data,
					}
					this.propsUpdated(propsStatusJSONObject) // This will update the local cache of available Prop choices and then call initActions() - which is rate limited and coalesced.
				}

				// Get Global Groups
				const globalGroupsResult: RequestAndResponseJSONValue = await this.ProPresenter.groupsGet()
				// If we got an ok response, Construct a statusJSONObject and call the callback for globalGroupsUpdated()
				if (globalGroupsResult.ok) {
					const globalGroupsStatusJSONObject: StatusUpdateJSON = {
						url: 'groups',
						data: globalGroupsResult.data,
					}
					this.globalGroupsUpdated(globalGroupsStatusJSONObject) // This will update the local cache of available Group choices and then call initActions() - which is rate limited and coalesced.
				}

				// Get Video Inputs info
				const videoInputsResult: RequestAndResponseJSONValue = await this.ProPresenter.videoInputsGet()
				/// If we got an ok response, Construct a statusJSONObject and call the callback for videoInputsUpdated()
				if (videoInputsResult.ok) {
					const videoInputsStatusJSONObject: StatusUpdateJSON = {
						url: '/v1/video_inputs',
						data: videoInputsResult.data,
					}
					this.videoInputsUpdated(videoInputsStatusJSONObject) // This will update the local cache of available Video Input choices and then call initActions() - which is rate limited and coalesced.
				}

				// Get Messages info
				const messagesResult: RequestAndResponseJSONValue = await this.ProPresenter.messagesGet()
				// If we got an ok response, Construct a statusJSONObject and call the callback for messagesUpdated()
				if (messagesResult.ok) {
					const messagesStatusJSONObject: StatusUpdateJSON = {
						url: '/v1/messages',
						data: messagesResult.data,
					}
					this.messagesUpdated(messagesStatusJSONObject) // This will update the local cache of available Messages Tokens for messages
				}

				// Get audience screens status
				const audienceScreensStatusResult: RequestAndResponseJSONValue =
					await this.ProPresenter.statusAudienceScreensGet()
				// If we got an ok response, Construct a statusJSONObject and call the callback for screenStatusUpdated()
				if (audienceScreensStatusResult.ok) {
					const audienceScreensStatusJSONObject: StatusUpdateJSON = {
						url: '/v1/status/audience_screens',
						data: audienceScreensStatusResult.data,
					}
					this.screenStatusUpdated(audienceScreensStatusJSONObject)
				}

				// Get stage screens status
				const stageScreensResult: RequestAndResponseJSONValue = await this.ProPresenter.statusStageScreensGet()
				// If we got an ok response, Construct a statusJSONObject and call the callback for screenStatusUpdated()
				if (stageScreensResult.ok) {
					const stageScreensJSONObject: StatusUpdateJSON = {
						url: '/v1/status/stage_screens',
						data: stageScreensResult.data,
					}
					this.screenStatusUpdated(stageScreensJSONObject)
				}

				// Get Presentation layer transport status
				const transportPresentationLayerStatus: RequestAndResponseJSONValue =
					await this.ProPresenter.transportLayerCurrent('presentation')
				// If we got an ok response, Construct a statusJSONObject and call the callback for transportLayerUpdated()
				if (transportPresentationLayerStatus.ok) {
					const transportPresentationLayerStatusJSONObject: StatusUpdateJSON = {
						url: '/v1/transport/presentation/current',
						data: stageScreensResult.data,
					}
					this.transportLayerUpdated(transportPresentationLayerStatusJSONObject)
				}

				// Get Announcement layer transport status
				const transportAnnouncementLayerStatus: RequestAndResponseJSONValue =
					await this.ProPresenter.transportLayerCurrent('presentation')
				// If we got an ok response, Construct a statusJSONObject and call the callback for transportLayerUpdated()
				if (transportAnnouncementLayerStatus.ok) {
					const transportAnnouncementLayerStatusJSONObject: StatusUpdateJSON = {
						url: '/v1/transport/announcement/current',
						data: stageScreensResult.data,
					}
					this.transportLayerUpdated(transportAnnouncementLayerStatusJSONObject)
				}

				// Get Audio layer transport status
				const transportAudioLayerStatus: RequestAndResponseJSONValue = await this.ProPresenter.transportLayerCurrent(
					'presentation'
				)
				// If we got an ok response, Construct a statusJSONObject and call the callback for transportLayerUpdated()
				if (transportAudioLayerStatus.ok) {
					const transportAudioLayerStatusJSONObject: StatusUpdateJSON = {
						url: '/v1/transport/audio/current',
						data: stageScreensResult.data,
					}
					this.transportLayerUpdated(transportAudioLayerStatusJSONObject)
				}

				// We have gathered initial state required to set these up:
				this.initPresets()
				this.initFeedbacks()
				this.checkFeedbacks()

				// Fetch initial presentation data if a presentation is active
				try {
					const activePresentationResult = await this.ProPresenter.presentationActiveGet()
					if (activePresentationResult.ok && activePresentationResult.data && activePresentationResult.data.presentation) {
						const presentationUUID = activePresentationResult.data.presentation.id.uuid
						await this.updatePresentationData(presentationUUID)
					}
				} catch (error) {
					this.log('debug', 'Error fetching initial presentation data: ' + error)
				}

				// Watchdog function - checks each second to record total time since last status update in a variable. (Users can monitor this variable to know if the module is still connected to ProPresenter - it should be updated every second)
				setInterval(() => {
					SetVariableValues(this, { time_since_last_status_update: (Date.now() - this.timeOfLastStatusUpdate) / 1000 })
				}, 1000)

				// TODO: consider removing one day when api supports chunked video_inputs and groups requests, and "everyone" is running versions that support it
				// Until then, poll video inputs and groups every 3 seconds and check if changed.  Only when they have changed, call the callback for videoInputsUpdated()
				setInterval(() => {
					this.ProPresenter.videoInputsGet().then((videoInputsResult: RequestAndResponseJSONValue) => {
						if (videoInputsResult.ok) {
							const currentVideoInputJSON: string = JSON.stringify(videoInputsResult.data)
							if (currentVideoInputJSON != this.lastVideoInputJSON) {
								// If the video_inputs have changed
								if (this.config.exta_debug_logs) {
									this.log('debug', 'Video Inputs Changed: ' + currentVideoInputJSON)
								}
								this.lastVideoInputJSON = currentVideoInputJSON // Update for comparing next time
								// Construct a statusJSONObject and call the callback for videoInputsUpdated()
								const videoInputsStatusJSONObject: StatusUpdateJSON = {
									url: '/v1/video_inputs',
									data: videoInputsResult.data,
								}
								this.videoInputsUpdated(videoInputsStatusJSONObject)
							}
						}
					})
					this.ProPresenter.groupsGet().then((globalGroupsResult: RequestAndResponseJSONValue) => {
						if (globalGroupsResult.ok) {
							const currentGlobalGroupsJSON: string = JSON.stringify(globalGroupsResult.data)
							if (currentGlobalGroupsJSON != this.lastGlobalGroupsJSON) {
								// If the Global Groups have changed
								if (this.config.exta_debug_logs) {
									this.log('debug', 'Global Groups Changed: ' + currentGlobalGroupsJSON)
								}
								this.lastGlobalGroupsJSON = currentGlobalGroupsJSON // Update for comparing next time
								// Construct a statusJSONObject and call the callback for globalGroupsUpdated()
								const globaGroupsStatusJSONObject: StatusUpdateJSON = {
									url: '/v1/groups',
									data: globalGroupsResult.data,
								}
								this.globalGroupsUpdated(globaGroupsStatusJSONObject)
							}
						}
					})
				}, 3000)
			})
		}
	}

	// ******************************************************************************************************************************
	// Status callbacks: Use arrow notation to create property functions that capture *this* instance of ModuleInstance class
	// ******************************************************************************************************************************

	// This one is important - we get the system time sent every second.  When it arrives, we assume the module status is ok.
	systemTimeUpdated = (statusJSONObject: StatusUpdateJSON) => {
		this.updateStatus(InstanceStatus.Ok)
		this.timeOfLastStatusUpdate = Date.now()
		if (this.config.exta_debug_logs) {
			this.log('debug', 'System time: ' + statusJSONObject.data)
		}
	}

	statusSlideUpdated = (statusJSONObject: StatusUpdateJSON) => {
		if (this.config.exta_debug_logs) {
			this.log('debug', 'statusSlideUpdated: ' + JSON.stringify(statusJSONObject))
		}

		// Handle case where current or next slide data is null
		const currentSlide = statusJSONObject.data.current
		const nextSlide = statusJSONObject.data.next

		SetVariableValues(this, {
			active_presentation_current_slide_text: currentSlide ? currentSlide.text : '',
			active_presentation_next_slide_text: nextSlide ? nextSlide.text : '',
			active_presentation_current_slide_notes: currentSlide ? currentSlide.notes : '',
			active_presentation_next_slide_notes: nextSlide ? nextSlide.notes : '',
			active_presentation_current_slide_imageuuid: currentSlide ? currentSlide.uuid : '',
			active_presentation_next_slide_imageuuid: nextSlide ? nextSlide.uuid : '',
		})
	}

	timersUpdate = (statusJSONObject: StatusUpdateJSON) => {
		// The definition of one or more timers has been updated/added - refresh variable definitions to ensure we have variable for each timer (rate limit refreshing variables since updates are sent with each keystroke during rename!)
		this.log('debug', 'Timer definitions updated: ' + JSON.stringify(statusJSONObject))

		// Update localState with new timer definitions
		this.propresenterStateStore.proTimers = statusJSONObject.data.map(
			(timer: { id: { uuid: string; name: string; index: number } }) => ({
				id: { uuid: timer.id.uuid, name: timer.id.name, index: timer.id.index },
				time: '',
				varid: 'timer_' + timer.id.uuid.replace(/-/g, ''),
				state: 'stopped',
			})
		)

		// Update list of Timers in the dropdown choices format { id: string, label: string}
		this.propresenterStateStore.timerChoices = statusJSONObject.data.map(
			(timer: { id: { uuid: string; name: string } }) => ({ id: timer.id.uuid, label: timer.id.name })
		)
		// Update Actions (this is rate limited)
		this.initActions()

		// Reset variable definitions (rate-limited)
		this.initVariables()

		if (this.config.exta_debug_logs) {
			this.log('debug', 'localstate.timers: ' + JSON.stringify(this.propresenterStateStore.proTimers))
		}
	}

	timersCurrentUpdated = (statusJSONObject: StatusUpdateJSON) => {
		// We have new values for one or more of the timers.
		if (this.config.exta_debug_logs) {
			this.log('debug', 'timersCurrentUpdated: ' + JSON.stringify(statusJSONObject))
		}

		// Update all the dynamic timer var values (& timers_current_json)
		let newTimerValues = {}
		for (const timercurrent of statusJSONObject.data) {
			newTimerValues = {
				...newTimerValues,
				...{
					['timer_' + timercurrent.id.uuid.replace(/-/g, '')]: timercurrent.time,
					['timer_' + timercurrent.id.uuid.replace(/-/g, '') + '_seconds']: timestampToSeconds(timercurrent.time),
					['timer_' + timercurrent.id.uuid.replace(/-/g, '') + '_custom']: secondsToTimestamp(
						timestampToSeconds(timercurrent.time),
						this.config.custom_timer_format_string
					),
				},
			}
		}
		SetVariableValues(this, {
			// timers_current_json is the complete JSON response (so advanced users can use jsonpath() to extract/process what they want)
			timers_current_json: JSON.stringify(statusJSONObject.data),
			...newTimerValues,
		})

		// Update the .state and .time for each of the defined timers. // TODO: let's build a feedback based on time values - have to perform comparisons etc with hh:mm:ss format - for now, you can manually create this feedback with internal variable checks against timer (seconds) vars
		this.propresenterStateStore.proTimers = this.propresenterStateStore.proTimers.map((proTimer) => {
			const newTimer = statusJSONObject.data.find(
				(newTimer: { id: { uuid: string } }) => newTimer.id.uuid == proTimer.id.uuid
			)
			if (this.config.exta_debug_logs) {
				this.log('debug', 'newTimer: ' + JSON.stringify(newTimer))
			}
			return newTimer
				? { ...proTimer, state: newTimer.state, time: newTimer.time } // Update the 'state' and 'time' properties
				: proTimer // No match - Keep original (This probably should not happen - let the list be updated in timersUpdate())
		})

		this.checkFeedbacks()

		if (this.config.exta_debug_logs) {
			this.log('debug', 'propresenterStateStore.proTimers: ' + JSON.stringify(this.propresenterStateStore.proTimers))
		}
	}

	screenStatusUpdated = (statusJSONObject: StatusUpdateJSON) => {
		if (statusJSONObject.url.includes('audience')) {
			SetVariableValues(this, { audience_screen_active: statusJSONObject.data })
			this.propresenterStateStore.proScreensStatus.audience = statusJSONObject.data
		}
		if (statusJSONObject.url.includes('stage')) {
			SetVariableValues(this, { stage_screen_active: statusJSONObject.data })
			this.propresenterStateStore.proScreensStatus.stage = statusJSONObject.data
		}
		this.checkFeedbacks()
	}

	layersStatusUpdated = (statusJSONObject: StatusUpdateJSON) => {
		this.propresenterStateStore.proLayersStatus = statusJSONObject.data
		this.checkFeedbacks()
	}

	videoCountdownTimerUpdated = (videoCountdownTimerJSONObject: StatusUpdateJSON) => {
		SetVariableValues(this, { video_countdown_timer: videoCountdownTimerJSONObject.data })
	}

	// Helper function to get current slide label from cached presentation data with arrangement support
	private async getCurrentSlideLabelWithArrangement(slideIndex: number): Promise<string> {
		if (!this.propresenterStateStore.activePresentationData) {
			return ''
		}

		try {
			// First check if presentation is from a playlist
			const activePlaylistResult = await this.ProPresenter.playlistActiveGet()
			let currentArrangement = ''

			if (activePlaylistResult.ok && activePlaylistResult.data && activePlaylistResult.data.presentation && activePlaylistResult.data.presentation.playlist) {
				// Presentation is from a playlist
				const playlistUUID = activePlaylistResult.data.presentation.playlist.uuid
				const playlistItemIndex = activePlaylistResult.data.presentation.playlist.index
				
				// Get playlist data to find arrangement for this item
				const playlistData = await this.ProPresenter.playlistPlaylistIdGet(playlistUUID)
				if (playlistData.ok && playlistData.data && playlistData.data.items) {
					const playlistItem = playlistData.data.items[playlistItemIndex]
					if (playlistItem && playlistItem.arrangement) {
						currentArrangement = playlistItem.arrangement
					}
				}
			} else {
				// Presentation is from library, get arrangement from active presentation
				const activePresentationResult = await this.ProPresenter.presentationActiveGet()
				if (activePresentationResult.ok && activePresentationResult.data && activePresentationResult.data.presentation) {
					currentArrangement = activePresentationResult.data.presentation.current_arrangement || ''
				}
			}

			// Now get the slide label based on arrangement
			const presentationData = this.propresenterStateStore.activePresentationData
			if (!presentationData.presentation || !presentationData.presentation.groups) {
				return ''
			}

			// If we have a valid arrangement and arrangements exist, use arrangement-specific slide order
			if (currentArrangement && presentationData.presentation.arrangements && presentationData.presentation.arrangements.length > 0) {
				// Try to find arrangement by name first, then by UUID
				let arrangement = presentationData.presentation.arrangements.find((arr: any) => arr.id?.name === currentArrangement)
				if (!arrangement) {
					// If not found by name, try by UUID
					arrangement = presentationData.presentation.arrangements.find((arr: any) => arr.id?.uuid === currentArrangement)
				}
				
				if (arrangement) {
					// Use arrangement-specific slide order based on arrangement groups
					let slideCount = 0
					for (const arrangementGroupUUID of arrangement.groups) {
						// Find the group in the presentation data
						const group = presentationData.presentation.groups.find((g: any) => g.id?.uuid === arrangementGroupUUID)
						if (group && group.slides) {
							for (const slide of group.slides) {
								if (slideCount === slideIndex) {
									return slide.label || ''
								}
								slideCount++
							}
						}
					}
					
					return ''
				}
			}

			// Fallback to default slide order (no arrangement or arrangement not found)
			let slideCount = 0
			for (const group of presentationData.presentation.groups) {
				if (group.slides) {
					for (const slide of group.slides) {
						if (slideCount === slideIndex) {
							return slide.label || ''
						}
						slideCount++
					}
				}
			}

			return ''
		} catch (error) {
			// Fallback to simple method on any error
			return this.getCurrentSlideLabelSimple(slideIndex)
		}
	}

	// Simple fallback function for getting slide label without arrangement logic
	private getCurrentSlideLabelSimple(slideIndex: number): string {
		if (!this.propresenterStateStore.activePresentationData) {
			return ''
		}

		const presentationData = this.propresenterStateStore.activePresentationData
		if (!presentationData.presentation || !presentationData.presentation.groups) {
			return ''
		}

		// Count through all slides to find the one at the current index
		let slideCount = 0
		for (const group of presentationData.presentation.groups) {
			if (group.slides) {
				for (const slide of group.slides) {
					if (slideCount === slideIndex) {
						return slide.label || ''
					}
					slideCount++
				}
			}
		}

		return ''
	}


	// Function to update presentation data when presentation changes
	private async updatePresentationData(presentationUUID: string) {
		try {
			// Get presentation data from library
			const presentationData = await this.ProPresenter.presentationUUIDGet(presentationUUID)
			if (presentationData.ok && presentationData.data) {
				this.propresenterStateStore.activePresentationData = presentationData.data
			}
		} catch (error) {
			this.log('debug', 'Error updating presentation data: ' + error)
		}
	}

	presentationSlideIndexUpdate = async (statusJSONObject: StatusUpdateJSON) => {
		this.log('debug', 'presentationSlideIndexUpdate: ' + JSON.stringify(statusJSONObject))
		if (statusJSONObject.data.presentation_index) {
			// ProPresenter can return a null presentation_index when no presentation is active
			const slideIndex = statusJSONObject.data.presentation_index.index
			const presentationUUID = statusJSONObject.data.presentation_index.presentation_id.uuid
			
			// Get slide label with arrangement support
			const slideLabel = await this.getCurrentSlideLabelWithArrangement(slideIndex)
			
			SetVariableValues(this, {
				active_presentation_slide_index: slideIndex,
				// This status update includes the name and uuid of the presentation - so we can update these variables too
				active_presentation_name: statusJSONObject.data.presentation_index.presentation_id.name,
				active_presentation_uuid: presentationUUID,
				active_presentation_index: statusJSONObject.data.presentation_index.presentation_id.index, // Note that this seems to return invalid indexes. Keeping it here for the future, in case it becomes useful in a future version of ProPresenter
				active_presentation_current_slide_label: slideLabel,
			})
		} else {
			SetVariableValues(this, {
				// For the times when no presentation is active:
				active_presentation_slide_index: '',
				active_presentation_name: '',
				active_presentation_uuid: '',
				active_presentation_current_slide_label: '',
			})
		}
	}

	focusedPresentationUpdated = (statusJSONObject: StatusUpdateJSON) => {
		this.log('debug', 'focusedPresentationUpdated: ' + JSON.stringify(statusJSONObject))
		SetVariableValues(this, {
			focused_presentation_index: statusJSONObject.data.index,
			focused_presentation_name: statusJSONObject.data.name,
			focused_presentation_uuid: statusJSONObject.data.uuid,
		})
	}

	activePresentationUpdated = async (statusJSONObject: StatusUpdateJSON) => {
		this.log('debug', 'activePresentationUpdated: ' + JSON.stringify(statusJSONObject))
		if (statusJSONObject.data.presentation) {
			// ProPresenter can return a null presentation when no presentation is active
			const presentationUUID = statusJSONObject.data.presentation.id.uuid
			
			// Update presentation data when presentation changes
			await this.updatePresentationData(presentationUUID)
			
			SetVariableValues(this, {
				active_presentation_index: statusJSONObject.data.presentation.id.index, // Note that this seems to return invalid indexes. Keeping it here for the future, in case it becomes useful in a future version of ProPresenter
				active_presentation_name: statusJSONObject.data.presentation.id.name,
				active_presentation_uuid: presentationUUID,
			})
		} else {
			// Clear presentation data when no presentation is active
			this.propresenterStateStore.activePresentationData = null
			
			SetVariableValues(this, {
				active_presentation_index: '', // Note that this seems to return invalid indexes. Keeping it here for the future, in case it becomes useful in a future version of ProPresenter
				active_presentation_name: '',
				active_presentation_uuid: '',
				active_presentation_current_slide_label: '',
			})
		}
	}

	activePlaylistUpdated = async (statusJSONObject: StatusUpdateJSON) => {
		this.log('debug', 'activePlaylistUpdated: ' + JSON.stringify(statusJSONObject))
		if (statusJSONObject.data.presentation.playlist) {
			SetVariableValues(this, {
				active_presentation_playlist_name: statusJSONObject.data.presentation.playlist.name,
				active_presentation_playlist_index: statusJSONObject.data.presentation.playlist.index,
				active_presentation_playlist_uuid: statusJSONObject.data.presentation.playlist.uuid,
			})

			const activePlaylistItemsResponse: RequestAndResponseJSONValue = await this.ProPresenter.playlistPlaylistIdGet(
				statusJSONObject.data.presentation.playlist.uuid
			)
			if (activePlaylistItemsResponse.ok) {
				SetVariableValues(this, {
					active_presentation_playlist_json: JSON.stringify(activePlaylistItemsResponse.data.items),
					active_presentation_playlist_item_names: activePlaylistItemsResponse.data.items.map(
						(a: { id: { name: string } }) => a.id.name
					),
				})
			}
		} else {
			SetVariableValues(this, {
				active_presentation_playlist_name: '',
				active_presentation_playlist_index: '',
				active_presentation_playlist_uuid: '',
			})
		}

		if (statusJSONObject.data.presentation.item) {
			SetVariableValues(this, {
				active_presentation_playlist_item_name: statusJSONObject.data.presentation.item.name,
				active_presentation_playlist_item_index: statusJSONObject.data.presentation.item.index,
				active_presentation_playlist_item_uuid: statusJSONObject.data.presentation.item.uuid,
			})
		} else {
			SetVariableValues(this, {
				active_presentation_playlist_item_name: '',
				active_presentation_playlist_item_index: '',
				active_presentation_playlist_item_uuid: '',
			})
		}

		if (statusJSONObject.data.announcements.playlist) {
			SetVariableValues(this, {
				active_announcement_playlist_name: statusJSONObject.data.announcements.playlist.name,
				active_announcement_playlist_index: statusJSONObject.data.announcements.playlist.index,
				active_announcement_playlist_uuid: statusJSONObject.data.announcements.playlist.uuid,
			})
		} else {
			SetVariableValues(this, {
				active_announcement_playlist_name: '',
				active_announcement_playlist_index: '',
				active_announcement_playlist_uuid: '',
			})
		}

		if (statusJSONObject.data.announcements.item) {
			SetVariableValues(this, {
				active_announcement_playlist_item_name: statusJSONObject.data.announcements.item.name,
				active_announcement_playlist_item_index: statusJSONObject.data.announcements.item.index,
				active_announcement_playlist_item_uuid: statusJSONObject.data.announcements.item.uuid,
			})
		} else {
			SetVariableValues(this, {
				active_announcement_playlist_item_name: '',
				active_announcement_playlist_item_index: '',
				active_announcement_playlist_item_uuid: '',
			})
		}
	}

	focusedPlaylistUpdated = async (statusJSONObject: StatusUpdateJSON) => {
		this.log('debug', 'focusedPlaylistUpdated: ' + JSON.stringify(statusJSONObject))

		if (statusJSONObject.data.playlist) {
			SetVariableValues(this, {
				focused_playlist_name: statusJSONObject.data.playlist.name,
			})
			const focusedPlaylistItemsResponse: RequestAndResponseJSONValue = await this.ProPresenter.playlistPlaylistIdGet(
				statusJSONObject.data.playlist.uuid
			)
			this.log('debug', 'focusedPlaylistItems: ' + JSON.stringify(focusedPlaylistItemsResponse))
			if (focusedPlaylistItemsResponse.ok) {
				SetVariableValues(this, {
					focused_playlist_items_json: JSON.stringify(focusedPlaylistItemsResponse.data.items),
				})
				SetVariableValues(this, {
					focused_playlist_item_names: focusedPlaylistItemsResponse.data.items.map(
						(a: { id: { name: string } }) => a.id.name
					),
				})
			} else {
				this.log('debug', 'Error getting focused playlist items: ' + focusedPlaylistItemsResponse.status + ': ' + focusedPlaylistItemsResponse.data)
			}
		} else {
			SetVariableValues(this, {
				focused_playlist_name: '',
			})
		}
	}

	announcementSlideIndexUpdated = (statusJSONObject: StatusUpdateJSON) => {
		if (this.config.exta_debug_logs) {
			this.log('debug', 'announcementSlideIndexUpdated: ' + JSON.stringify(statusJSONObject))
		}
		if (statusJSONObject.data.announcement_index) {
			// ProPresenter can return a null presentation_index when no announcement is active
			SetVariableValues(this, {
				active_announcement_slide_index: statusJSONObject.data.announcement_index.index,
				active_announcement_name: statusJSONObject.data.announcement_index.presentation_id.name,
				active_announcement_uuid: statusJSONObject.data.announcement_index.presentation_id.uuid,
			})
		} else {
			SetVariableValues(this, {
				active_announcement_slide_index: '',
				active_announcement_name: '',
				active_announcement_uuid: '',
			})
		}
	}

	activeLookUpdated = (statusJSONObject: StatusUpdateJSON) => {
		this.log(
			'debug',
			'activeLookUpdated: ' + JSON.stringify(statusJSONObject) + ' lookname: ' + statusJSONObject.data.id.name
		)
		SetVariableValues(this, {
			active_look_name: statusJSONObject.data.id.name,
			active_look_uuid: statusJSONObject.data.id.uuid,
		})

		// Update active look in state store
		this.propresenterStateStore.activeLookID.uuid = statusJSONObject.data.id.uuid
		this.propresenterStateStore.activeLookID.name = statusJSONObject.data.id.name
		this.propresenterStateStore.activeLookID.index = statusJSONObject.data.id.index

		this.checkFeedbacks()
	}

	clearGroupsUpdated = (statusJSONObject: StatusUpdateJSON) => {
		this.log('debug', 'clearGroupsUpdated: ' + JSON.stringify(statusJSONObject))
		// Update list of cleargroups in the dropdown choices format  { id: string, label: string}
		this.propresenterStateStore.clearGroupChoices = statusJSONObject.data.map(
			(clearGroup: { id: { uuid: string; name: string } }) => ({ id: clearGroup.id.uuid, label: clearGroup.id.name })
		)
		this.initActions()
	}

	looksUpdated = (statusJSONObject: StatusUpdateJSON) => {
		this.log('debug', 'looksUpdated: ' + JSON.stringify(statusJSONObject.data))
		// Update list of looks in the dropdown choices format  { id: string, label: string}
		this.propresenterStateStore.looksChoices = statusJSONObject.data.map(
			(look: { id: { uuid: string; name: string } }) => ({ id: look.id.name, label: look.id.name })
		) // Note that we use the look name and not the UUID - as the active look will always have a different UUID, than any of the UUID in the list of configured looks - no idea why or how this is useful.
		// Update Actions (this is rate limited)
		this.initActions()
	}

	macrosUpdated = (statusJSONObject: StatusUpdateJSON) => {
		this.log('debug', 'macrosUpdated: ' + JSON.stringify(statusJSONObject.data))
		// Update list of macros in the dropdown choices format  { id: string, label: string}
		this.propresenterStateStore.macroChoices = statusJSONObject.data.map(
			(macro: { id: { uuid: string; name: string } }) => ({ id: macro.id.uuid, label: macro.id.name })
		)
		// Update propresenterStateStore.proMacros
		this.propresenterStateStore.proMacros = statusJSONObject.data // TODO: Consider how this might break/fail if the strutucture of the JSON (list of macros) changes (also for other status updates where we store the whole JSON without mapping into an aray of presummed types)
		// Update Actions (this is rate limited)
		this.initActions()
	}

	propsUpdated = (statusJSONObject: StatusUpdateJSON) => {
		this.log('debug', 'propsUpdated: ' + JSON.stringify(statusJSONObject.data))
		// Create a list of props in the dropdown choices format  { id: string, label: string}
		this.propresenterStateStore.propChoices = statusJSONObject.data.map(
			(prop: { id: { uuid: string; name: string } }) => ({ id: prop.id.uuid, label: prop.id.name })
		)
		// Update propresenterStateStore.proProps
		this.propresenterStateStore.proProps = statusJSONObject.data.map(
			(prop: { id: { uuid: string; name: string; index: number }; is_active: boolean }) => ({
				id: { uuid: prop.id.uuid, name: prop.id.name, index: prop.id.index },
				is_active: prop.is_active,
			})
		)
		this.checkFeedbacks()
		// Update Actions (this is rate limited)
		this.initActions()
	}

	globalGroupsUpdated = (statusJSONObject: StatusUpdateJSON) => {
		this.log('debug', 'propsUpdated: ' + JSON.stringify(statusJSONObject.data))
		// Store global groups in propresenterStateStore
		this.propresenterStateStore.proGroups = statusJSONObject.data
		if (this.config.exta_debug_logs) {
			this.log('debug', 'Got Groups: ' + JSON.stringify(this.propresenterStateStore.proGroups))
		}
		// Update Actions (this is rate limited)
		this.initActions()
	}

	videoInputsUpdated = (statusJSONObject: StatusUpdateJSON) => {
		this.log('debug', 'videoInputsUpdated: ' + JSON.stringify(statusJSONObject.data))
		// Create a list of video inputs in the dropdown choices format  { id: string, label: string}
		this.propresenterStateStore.videoInputChoices = statusJSONObject.data.map(
			(videoInput: { uuid: string; name: string }) => ({ id: videoInput.uuid, label: videoInput.name })
		)
		// Update Actions (this is rate limited)
		this.initActions()
	}

	stageScreensUpdated = (statusJSONObject: StatusUpdateJSON) => {
		this.log('debug', 'stageScreensUpdated: ' + JSON.stringify(statusJSONObject.data))
		// Update localState with new stageScreensWithLayout definitions
		// (varid is a clean form of the variable ID with - remvoed from UUID)
		this.propresenterStateStore.stageScreensWithLayout = statusJSONObject.data.map(
			(stageScreenWithLayout: {
				screen: { uuid: string; name: string; index: number }
				layout: { uuid: string; name: string; index: number }
			}) => ({
				id: {
					uuid: stageScreenWithLayout.screen.uuid,
					name: stageScreenWithLayout.screen.name,
					index: stageScreenWithLayout.screen.index,
				},
				varid: 'stagescreen_' + stageScreenWithLayout.screen.uuid.replace(/-/g, '') + '_layout',
				layout_uuid: stageScreenWithLayout.layout.uuid,
				layout_name: stageScreenWithLayout.layout.name,
				layout_index: stageScreenWithLayout.layout.index,
			})
		)

		// Create a list of stage screens in the dropdown choices format  { id: string, label: string}
		this.propresenterStateStore.stageScreenChoices = statusJSONObject.data.map(
			(stageScreenWithLayout: { screen: { uuid: string; name: string } }) => ({
				id: stageScreenWithLayout.screen.uuid,
				label: stageScreenWithLayout.screen.name,
			})
		)
		// Update Actions (this is rate limited)
		this.initActions()

		// Update all the dynamic stagescreen_layout var values
		let newStageScreensWithLayout = {}
		for (const stageScreenWithLayout of statusJSONObject.data) {
			newStageScreensWithLayout = {
				...newStageScreensWithLayout,
				...{
					['stagescreen_' + stageScreenWithLayout.screen.uuid.replace(/-/g, '') + '_layout']:
						stageScreenWithLayout.layout.name,
				},
			}
		}
		SetVariableValues(this, {
			...newStageScreensWithLayout,
		})

		this.checkFeedbacks()

		// Reset variable definitions (rate-limited)
		this.initVariables()
	}

	stageScreenLayoutsUpdated = (statusJSONObject: StatusUpdateJSON) => {
		this.log('debug', 'stageScreenLayoutsUpdated: ' + JSON.stringify(statusJSONObject.data))
		// Create a list of stage screen layouts in the dropdown choices format  { id: string, label: string}
		this.propresenterStateStore.stageScreenLayoutChoices = statusJSONObject.data.map(
			(stageScreenLayout: { id: { uuid: string; name: string } }) => ({
				id: stageScreenLayout.id.uuid,
				label: stageScreenLayout.id.name,
			})
		)

		this.checkFeedbacks()

		// Update Actions (this is rate limited)
		this.initActions()
	}

	stageMessageUpdated = (statusJSONObject: StatusUpdateJSON) => {
		this.log('debug', 'stageMessageUpdated: ' + JSON.stringify(statusJSONObject.data))
		this.propresenterStateStore.stageMessage = statusJSONObject.data
		SetVariableValues(this, {
			stage_message: statusJSONObject.data,
		})
		this.checkFeedbacks()
	}

	messagesUpdated = (statusJSONObject: StatusUpdateJSON) => {
		this.log('debug', 'messagesUpdated: ' + JSON.stringify(statusJSONObject.data))
		// Create a list of messages in the dropdown choices format  { id: string, label: string}
		this.propresenterStateStore.messageChoices = statusJSONObject.data.map(
			(message: { id: { uuid: string; name: string } }) => ({ id: message.id.uuid, label: message.id.name })
		)

		// Update the list of dynamically created text inputs for all message tokens...
		let newMessageTokenInputs: CompanionInputFieldTextInput[] = []
		for (const message of statusJSONObject.data as ProMessage[]) {
			const messageUUID: string = message.id.uuid
			for (const messageToken of message.tokens) {
				// The ID of a token field will contain 3 chars to designate the token type.
				let messageTokenTypeCode: string = '???' // Default is unknown: '???'.
				// Update to 'txt' for text tokens and 'tmr' for timer tokens.
				if (messageToken.text) messageTokenTypeCode = 'txt'
				else if (messageToken.timer) messageTokenTypeCode = 'tmr'

				newMessageTokenInputs.push({
					type: 'textinput',
					label: messageToken.name,
					id: messageUUID + '__' + messageTokenTypeCode + '__' + messageToken.name, // "Parent" message UUID __ 3 Char type __ TokenName
					isVisibleData: messageUUID,
					isVisible: (options, isVisibleData) => {
						return (
							(options.message_id_dropdown as string) == isVisibleData &&
							(options.message_operation as string) == 'show'
						)
					},
					useVariables: true,
				})
			}
		}
		// Update new tokens stored in local cache (initActions will use these to build Message action that includes these tokens)
		this.propresenterStateStore.messageTokenInputs = newMessageTokenInputs

		// Update Actions (this is rate limited)
		this.initActions()
	}

	transportLayerUpdated = (statusJSONObject: StatusUpdateJSON) => {
		const url = statusJSONObject.url
		switch (url) {
			case 'transport/presentation/current':
				SetVariableValues(this, {
					transport_presentation_layer_isplaying: statusJSONObject.data.is_playing,
					transport_presentation_layer_media_name: statusJSONObject.data.name,
					transport_presentation_layer_media_duration: statusJSONObject.data.duration,
				})
				this.propresenterStateStore.proTransportLayersStatus.presentation = statusJSONObject.data.is_playing
				break
			case 'transport/announcement/current':
				SetVariableValues(this, {
					transport_announcement_layer_isplaying: statusJSONObject.data.is_playing,
					transport_announcement_layer_media_name: statusJSONObject.data.name,
					transport_announcement_layer_media_duration: statusJSONObject.data.duration,
				})
				this.propresenterStateStore.proTransportLayersStatus.announcement = statusJSONObject.data.is_playing
				break
			case 'transport/audio/current':
				SetVariableValues(this, {
					transport_audio_layer_isplaying: statusJSONObject.data.is_playing,
					transport_audio_layer_media_name: statusJSONObject.data.name,
					transport_audio_layer_media_duration: statusJSONObject.data.duration,
				})
				this.propresenterStateStore.proTransportLayersStatus.audio = statusJSONObject.data.is_playing
				break
		}
		this.checkFeedbacks()
	}

	transportAudioTime = (statusJSONObject: StatusUpdateJSON) => {
		SetVariableValues(this, {
			transport_audio_layer_time: statusJSONObject.data,
			audio_countdown_timer: secondsToTimestamp(
				Math.floor((this.getVariableValue('transport_audio_layer_media_duration') as number) - statusJSONObject.data),
				'HH:mm:ss'
			),
		})
	}

	captureStatusUpdated = (statusJSONObject: StatusUpdateJSON) => {
		if (this.config.exta_debug_logs) {
			this.log('debug', 'captureStatusUpdated: ' + JSON.stringify(statusJSONObject))
		}
		SetVariableValues(this, {
			capture_status: statusJSONObject.data.status,
			capture_time: statusJSONObject.data.capture_time,
			capture_time_seconds: timestampToSeconds(statusJSONObject.data.capture_time),
			capture_time_custom: secondsToTimestamp(
				timestampToSeconds(statusJSONObject.data.capture_time),
				this.config.custom_timer_format_string
			),
		})

		this.checkFeedbacks()
	}

	// Return config fields for web config
	getConfigFields() {
		return GetConfigFields(this)
	}

	initActions() {
		// This function is called whenever things like looks, props, macros and video_inputs are updated in ProPresenter (sometimes at each keystroke during a rename)
		// It will call setActionDefinitions(GetActions(this)) to build/refresh ALL actions from scratch....
		// However, calls to setActionDefinitions(GetActions(this)) are a little "expensive", and should not be called "too often".
		// Therefore, this function includes logic to rate-limit (and coalesce) calls to setActionDefinitions(GetActions(this)) to ensure a gap of at least 2000msec between calls.

		const timeSinceLastsetActionDefinitionsCall: number = Date.now() - this.lastSetActionDefinitionsTime // Calculate time since last call of setActionDefinitions
		if (this.lastSetActionDefinitionsTime == 0 || Date.now() - timeSinceLastsetActionDefinitionsCall > 2000) {
			// If setActionDefinitions has not yet been called, or the time since the last call is greater than 2000msec, then it's okay to call it now...
			this.setActionDefinitions(GetActions(this))
			this.lastSetActionDefinitionsTime = Date.now() // Record new time of last call - for rate-limiting logic
		} else {
			// If it has been less than 2000msec since the last call...
			// Check if there is (not) already a previously created pending call to setActionDefinitions and set one up if not (do nothing is one is pending)
			if (!this.setActionDefinitionsTimeoutId) {
				// Create a pending call to setActionDefinitions - ensuring at least a 2000 msec time since last time it was called
				this.setActionDefinitionsTimeoutId = setTimeout(() => {
					this.lastSetActionDefinitionsTime = Date.now()
					this.setActionDefinitions(GetActions(this))
					if (this.setActionDefinitionsTimeoutId) clearTimeout(this.setActionDefinitionsTimeoutId)
					this.setActionDefinitionsTimeoutId = null
				}, 2000 - (Date.now() - timeSinceLastsetActionDefinitionsCall))
			}
		}
	}

	initPresets() {
		this.setPresetDefinitions(GetPresets(this))
	}

	initVariables() {
		// This function is called at startup to deinfe the basic set of static variables.
		// But it is ALSO called  whenever things like the definitions of timers, screens and stage layouts are updated in ProPresenter (sometimes at each keystroke during a rename) to set dynamic variable based on state data updates from ProPresenter
		// It will call setVariableDefinitions(GetVariableDefinitions(this.propresenterStateStore)) to build/refresh ALL variables from scratch....(There is no way to keep existing vars and just add/remove as state changes)
		// However, calls to setVariableDefinitions(GetVariableDefinitions(this.propresenterStateStore)) are a little "expensive", so this should not be called "too often".
		// Therefore, this function includes logic to rate-limit (and coalesce) calls to setVariableDefinitions(GetVariableDefinitions(this.propresenterStateStore)) to ensure a gap of at least 2000msec between calls.
		// It also employs ResetVariablesFromLocalCache() to return values to variables from cached data whenever variable are re-created.

		const timeSinceLastSetVariableDefinitionsTimeCall: number = Date.now() - this.lastSetVariableDefinitionsTime // Calculate time since last call of setVariableDefinitions
		if (this.lastSetVariableDefinitionsTime == 0 || Date.now() - timeSinceLastSetVariableDefinitionsTimeCall > 2000) {
			// If setVariableDefinitions has not yet been called, or the time since the last call is greater than 2000msec, then it's okay to call it now...
			if (this.config.exta_debug_logs) {
				this.log('debug', 'Immediate call to setVariableDefinitions()')
			}
			this.setVariableDefinitions(GetVariableDefinitions(this.propresenterStateStore))
			ResetVariablesFromLocalCache(this) // Update variable values from previously cached old values
		} else {
			// Create a pending call to setVariableDefinitions - ensuring at least a 2000 msec time since last time it was called
			if (!this.setVariableDefinitionsTimeoutId) {
				this.setVariableDefinitionsTimeoutId = setTimeout(() => {
					this.lastSetVariableDefinitionsTime = Date.now()
					if (this.config.exta_debug_logs) {
						this.log('debug', 'Delayed call to setVariableDefinitions()')
					}
					this.setVariableDefinitions(GetVariableDefinitions(this.propresenterStateStore))
					ResetVariablesFromLocalCache(this) // Update variable values from previously cached old values
					if (this.setVariableDefinitionsTimeoutId) clearTimeout(this.setVariableDefinitionsTimeoutId)
					this.setVariableDefinitionsTimeoutId = null
				}, 2000 - (Date.now() - timeSinceLastSetVariableDefinitionsTimeCall))
			}
		}
	}

	initFeedbacks() {
		// TODO: Consider adding rate-limit (and coalesce) logic
		this.setFeedbackDefinitions(GetFeedbacks(this))
	}

	processIncommingData(requestResponse: RequestAndResponseJSONValue) {
		if (this.config.exta_debug_logs) {
			this.log('debug', `processingIncommingData: ${JSON.stringify(requestResponse)}`)
		}
		if (
			requestResponse &&
			requestResponse.path &&
			requestResponse.data &&
			requestResponse.status &&
			requestResponse.ok
		) {
			if (this.config.exta_debug_logs) {
				this.log('debug', 'STATUS OK')
			}
			this.updateStatus(InstanceStatus.Ok) // Each time we receive an "ok" response, update module status to Ok
			const jsonData = requestResponse.data
			switch (requestResponse.path) {
				case '/version':
					SetVariableValues(this, {
						name: jsonData.name,
						platform: jsonData.platform,
						os_version: jsonData.os_version,
						version: jsonData.host_description,
					})
					break

				default:
					this.log('debug', 'missed an response handler for: ' + requestResponse.path)
					break
			}
		} else {
			this.updateStatus(InstanceStatus.UnknownWarning)
			this.log('error', `Getting this: ${JSON.stringify(requestResponse)}`)
		}
	}
}

runEntrypoint(ModuleInstance, [])
