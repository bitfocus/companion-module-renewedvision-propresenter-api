import { InstanceBase, runEntrypoint, InstanceStatus } from '@companion-module/base'
import { GetActions } from './actions'
import { DeviceConfig, GetConfigFields } from './config'
import { GetPresets } from './presets'
import { ProPresenter, StatusUpdateJSON, RequestAndResponseJSONValue } from 'renewedvision-propresenter'
import { GetVariableDefinitions, ResetVariablesFromLocalCache, SetVariableValues} from './variables' // TODO comment explaining use of this SetVariableValues(this, CompanionVariableValues) function
import { LocalStateCache, Timer } from './utils'

class ModuleInstance extends InstanceBase<DeviceConfig> {
	constructor(internal: unknown) {
		super(internal)
	}

	public config: DeviceConfig = {
		ProPresenter: null,
		host: '',
		port: 1025,
		timeout: 1000,
	}

	// Module properties
	public ProPresenter: any
	public looksChoices: [{id: string, label: string}] | undefined
	public macroChoices: [{id: string, label: string}] | undefined
	public propChoices: [{id: string, label: string}] | undefined
	public videoInputChoices: [{id: string, label: string}] | undefined
	public localStateCache: LocalStateCache = {timers: <Timer[]>[]}
	
	// Private variables
	private lastSetActionDefinitionsTime: number = 0 // A timestamp (in ms) of the last time that setActionDefinitions() was called (0 means not yet called)
	private setActionDefinitionsTimeoutId: ReturnType<typeof setTimeout> | null = null
	private lastSetVariableDefinitionsTime: number = 0 // A timestamp (in ms) of the last time that setVariableDefinitions() was called (0 means not yet called)
	private setVariableDefinitionsTimeoutId: ReturnType<typeof setTimeout> | null = null
	public lastVideoInputJSON: string = ''  // Used for checking if video inputs has changed each time it's polled (TODO: consider removing one day when api supports chunked /v1/video_inputs and "everyone" is running versions that support it)

	public async init(config: DeviceConfig): Promise<void> {
		this.updateStatus(InstanceStatus.Connecting) // Status connection will be estblished within configUpdated() below
		await this.configUpdated(config) 
	}
	// When module gets deleted
	public async destroy() {
		this.log('debug', 'destroy')
		
	}

	public async configUpdated(config: DeviceConfig) {
		this.log('info', 'Module Config: ' + JSON.stringify(config))
		this.config = config
		if (this.config.host === '' || this.config.host === undefined) {
			this.log('info', 'Please fill in ip address or hit save')
		} else {
			this.ProPresenter = new ProPresenter(this.config.host, this.config.port, this.config.timeout) // This object is our "API manager" that handles all the network calls for us

			this.initPresets()

			// TODO: before calling initVariables() to setVariableDefinitions().. first make some requests to Pro to get state that will be used for variables (things like timers)
			const timersResult: RequestAndResponseJSONValue = await this.ProPresenter.timersGet()
			// Construct a statusJSONObject and call the callback for timersUpdate()
			const timersJSONObject: StatusUpdateJSON = {
				url: 'looks',
				data: timersResult.data
			}
			this.timersUpdate(timersJSONObject) // This will update the local cache state for the timer definitions & call this.initVariables()
			
			// Before calling setActionDefinitions, which is inside of initActions(), first make quite some requests to Pro to get state that will be used for action choices (things like looks, macros, props, and video inputs)
			// Note that while initActions() is called multiple times below in quick succession, it has it's own logic to rate-limit (and coalesce) calls to setActionDefinitions() to ensure it is not called too frequently

			this.ProPresenter.registerCallbacksForStatusUpdates({"status/slide":this.statusSlideUpdate,"timers":this.timersUpdate, "timers/current":this.timersCurrentUpdate,"presentation/slide_index":this.presentationSlideIndexUpdate,"look/current":this.activeLookChanged,"looks":this.looksUpdated,"macros":this.macrosUpdated,"props":this.propsUpdated},2000)
			
			// Get version info (and update version based variables)
			const versionResult: RequestAndResponseJSONValue = await this.ProPresenter.version()
			this.processIncommingData(versionResult) // This will update version based variables

			// Get Looks info
			const looksResult: RequestAndResponseJSONValue = await this.ProPresenter.looksGet()
			// Construct a statusJSONObject and call the callback for looksUpdated()
			const looksStatusJSONObject: StatusUpdateJSON = {
				url: 'looks',
				data: looksResult.data
			}
			this.looksUpdated(looksStatusJSONObject) // This will update the local cache of available Look choices and then call initActions() - which is rate limited and coalesced.

			// Get Macros info
			const macrosResult: RequestAndResponseJSONValue = await this.ProPresenter.marcosGet()
			// Construct a statusJSONObject and call the callback for macrosUpdated()
			const macrosStatusJSONObject: StatusUpdateJSON = {
				url: 'macros',
				data: macrosResult.data
			}
			this.macrosUpdated(macrosStatusJSONObject) // This will update the local cache of available Macro choices and then call initActions() - which is rate limited and coalesced.

			// Get Props info
			const propsResult: RequestAndResponseJSONValue = await this.ProPresenter.propsGet()
			// Construct a statusJSONObject and call the callback for propsUpdated()
			const propsStatusJSONObject: StatusUpdateJSON = {
				url: 'props',
				data: propsResult.data
			}
			this.propsUpdated(propsStatusJSONObject) // This will update the local cache of available Prop choices and then call initActions() - which is rate limited and coalesced.

			// Get Video Inputs info
			const videoInputsResult: RequestAndResponseJSONValue = await this.ProPresenter.videoInputsGet()
			// Construct a statusJSONObject and call the callback for propsUpdated()
			const videoInputsStatusJSONObject: StatusUpdateJSON = {
				url: '/v1/video_inputs',
				data: videoInputsResult.data
			}
			this.videoInputsUpdated(videoInputsStatusJSONObject) // This will update the local cache of available Video Input choices and then call initActions() - which is rate limited and coalesced.

			// TODO: consider removing one day when api supports chunked /v1/video_inputs and "everyone" is running versions that support it
			// Until then, poll video inputs every 3 seconds and check if changed.  Only when they have changed, call the callback for videoInputsUpdated()
			setInterval(() => {
				this.ProPresenter.videoInputsGet().then((result: RequestAndResponseJSONValue) => {
					const currentVideoInputJSON: string = JSON.stringify(result.data)
					if (currentVideoInputJSON != this.lastVideoInputJSON) { // If the video_inputs have changed
						this.log('debug', 'Video Inputs Changed: ' + currentVideoInputJSON)
						this.lastVideoInputJSON = currentVideoInputJSON // Update for comparing next time
						// Construct a statusJSONObject and call the callback for looksUpdated()
						const videoInputsStatusJSONObject: StatusUpdateJSON = {
							url: '/v1/video_inputs',
							data: result.data
						}
						this.videoInputsUpdated(videoInputsStatusJSONObject)
					}
				})
			},3000)
			
		}
	}

	// Status callbacks: Use arrow notation to create property functions that capture *this* instance of ModuleInstance class
	statusSlideUpdate = (statusJSONObject: StatusUpdateJSON) => {
		this.log('debug',JSON.stringify(statusJSONObject))
	}

	timersCurrentUpdate = (statusJSONObject: StatusUpdateJSON) => {
		// We have new values for one or more of the timers.
		this.log('debug', 'timersCurrentUpdate: ' + JSON.stringify(statusJSONObject))

		// Update all the dynamic timer var values (& timers_current_JSON)
		
		let newTimerValues = {}
		for (const timercurrent of statusJSONObject.data) {
			newTimerValues = {...newTimerValues, ...{['timer_'+timercurrent.id.uuid.replace(/-/g,'')]:timercurrent.time}}
		}
		SetVariableValues(this, {
			// timers_current_JSON is the complete JSON response (so advanced users can use jsonpath() to extract/process what they want) 
			timers_current_JSON: JSON.stringify(statusJSONObject.data), ...newTimerValues
		})
	}

	timersUpdate = (statusJSONObject: StatusUpdateJSON) => {
		// The definition of one or more timers has been updated/added - refresh variabl definitions to ensure we have variable for each timer (rate limit refreshing variables since updates are sent with each keystroke during rename!)
		this.log('debug', 'timersUpdate: ' + JSON.stringify(statusJSONObject))

		// Update localState with new timer definitions
		this.localStateCache.timers = statusJSONObject.data.map((timer: { id: { uuid: string, name: any, index: any } }) => ({uuid:timer.id.uuid, time:'', name:timer.id.name, varid:'timer_'+timer.id.uuid.replace(/-/g,''), state:'', index:timer.id.index}))

		// Reset variable definitions (rate-limited)
		this.log('debug', 'timerUpdate calling initVars()')
		this.initVariables()
		ResetVariablesFromLocalCache(this)

		this.log('debug', 'localstate.timers: ' + JSON.stringify(this.localStateCache.timers))
	}

	presentationSlideIndexUpdate = (statusJSONObject: StatusUpdateJSON) => {
		this.log('debug', 'presentationSlideIndexUpdate: ' + JSON.stringify(statusJSONObject))
		if (statusJSONObject.data.presentation_index) { // ProPresenter can return a null presentation_index when no presentation is active - nothing to update if this happens
			SetVariableValues(this, {
				presentation_slide_index: statusJSONObject.data.presentation_index.index,
				active_presentation_name: statusJSONObject.data.presentation_index.presentation_id.name,
				active_presentation_UUID: statusJSONObject.data.presentation_index.presentation_id.uuid
			})
		}
	}

	activeLookChanged = (statusJSONObject: StatusUpdateJSON) => {
		this.log('debug', 'activeLookChanged: ' + JSON.stringify(statusJSONObject) + ' lookname: ' + statusJSONObject.data.id.name)
		SetVariableValues(this, {
			active_look_name: statusJSONObject.data.id.name,
			active_look_UUID: statusJSONObject.data.id.uuid
		})
	}

	looksUpdated = (statusJSONObject: StatusUpdateJSON) => {
		this.log('debug', 'looksUpdated: ' + JSON.stringify(statusJSONObject.data))
		// Create a list of looks in the dropdown choices format  { id: string, label: string}
		this.looksChoices = statusJSONObject.data.map((look: {id: {uuid: string, name:string}}) => ({id:look.id.uuid, label:look.id.name}))
		// Update Actions (this is rate limited)
		this.initActions()
	}

	macrosUpdated = (statusJSONObject: StatusUpdateJSON) => {
		this.log('debug', 'macrosUpdated: ' + JSON.stringify(statusJSONObject.data))
		// Create a list of macros in the dropdown choices format  { id: string, label: string}
		this.macroChoices = statusJSONObject.data.map((macro: {id: {uuid: string, name:string}}) => ({id:macro.id.uuid, label:macro.id.name}))
		// Update Actions (this is rate limited)
		this.initActions()
	}

	propsUpdated = (statusJSONObject: StatusUpdateJSON) => {
		this.log('debug', 'propsUpdated: ' + JSON.stringify(statusJSONObject.data))
		// Create a list of props in the dropdown choices format  { id: string, label: string}
		this.propChoices = statusJSONObject.data.map((prop: {id: {uuid: string, name:string}}) => ({id:prop.id.uuid, label:prop.id.name}))
		// Update Actions (this is rate limited)
		this.initActions()
	}

	videoInputsUpdated = (statusJSONObject: StatusUpdateJSON) => {
		this.log('debug', 'videoInputsUpdated: ' + JSON.stringify(statusJSONObject.data))
		// Create a list of video inputs in the dropdown choices format  { id: string, label: string}
		this.videoInputChoices = statusJSONObject.data.map((videoInput: {uuid: string, name:string}) => ({id:videoInput.uuid, label:videoInput.name}))
		// Update Actions (this is rate limited)
		this.initActions()
	}

	// Return config fields for web config
	getConfigFields() {
		return GetConfigFields()
	}

	initActions() {
		// This function is called whenever things like looks, props, macros and video_inputs are updated in ProPresenter (sometimes at each keystroke during a rename)
		// It will call setActionDefinitions(GetActions(this)) to build/refresh ALL actions from scratch....
		// However, calls to setActionDefinitions(GetActions(this)) are a little "expensive", and should not be called "too often".
		// Therefore, this function includes logic to rate-limit (and coalesce) calls to setActionDefinitions(GetActions(this)) to ensure a gap of at least 2000msec between calls.
				
		const timeSinceLastsetActionDefinitionsCall: number = (Date.now() - this.lastSetActionDefinitionsTime) // Calculate time since last call of setActionDefinitions
		if (this.lastSetActionDefinitionsTime == 0 ||  (Date.now() - timeSinceLastsetActionDefinitionsCall > 2000)) {
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
					if (this.setActionDefinitionsTimeoutId)
						clearTimeout(this.setActionDefinitionsTimeoutId)
					this.setActionDefinitionsTimeoutId = null
				},2000 - (Date.now() - timeSinceLastsetActionDefinitionsCall))
			}
		} 
	}

	initPresets() {
		this.setPresetDefinitions(GetPresets())
	}

	initVariables() {
		// This function is called whenever things like the definiations of timers, screens and stage layouts are updated in ProPresenter (sometimes at each keystroke during a rename)
		// It will call setVariableDefinitions(GetVariableDefinitions(this.localStateCache)) to build/refresh ALL variables from scratch....
		// However, calls to setVariableDefinitions(GetVariableDefinitions(this.localStateCache)) are prob a little "expensive", will cause all vars to reset values and should not be called "too often".
		// Therefore, this function includes logic to rate-limit (and coalesce) calls to setVariableDefinitions(GetVariableDefinitions(this.localStateCache)) to ensure a gap of at least 2000msec between calls.
				
		const timeSinceLastSetVariableDefinitionsTimeCall: number = (Date.now() - this.lastSetVariableDefinitionsTime) // Calculate time since last call of setVariableDefinitions
		if (this.lastSetVariableDefinitionsTime == 0 ||  (Date.now() - timeSinceLastSetVariableDefinitionsTimeCall > 2000)) {
			// If setVariableDefinitions has not yet been called, or the time since the last call is greater than 2000msec, then it's okay to call it now...
			this.log('debug', 'setVariableDefinitions()1')
			this.setVariableDefinitions(GetVariableDefinitions(this.localStateCache))
			ResetVariablesFromLocalCache(this) // Update varariable values from previously cached old values
		} else {
			// Create a pending call to setVariableDefinitions - ensuring at least a 2000 msec time since last time it was called
			if (!this.setVariableDefinitionsTimeoutId) {
				this.setVariableDefinitionsTimeoutId = setTimeout(() => {
					this.lastSetVariableDefinitionsTime = Date.now()
					this.log('debug', 'setVariableDefinitions()2')
					this.setVariableDefinitions(GetVariableDefinitions(this.localStateCache))
					if (this.setVariableDefinitionsTimeoutId)
						clearTimeout(this.setVariableDefinitionsTimeoutId)
					this.setVariableDefinitionsTimeoutId = null
				},2000- (Date.now() - timeSinceLastSetVariableDefinitionsTimeCall))
			}
		}		
	}

	processIncommingData(requestResponse: RequestAndResponseJSONValue) {
		this.log('debug', `processingIncommingData: ${JSON.stringify(requestResponse)}`)
		if (requestResponse && requestResponse.path && requestResponse.data && requestResponse.status && requestResponse.ok) {
			this.log('debug', 'STATUS OK')
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
