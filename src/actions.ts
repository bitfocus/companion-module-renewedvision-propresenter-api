import { CompanionActionDefinition, CompanionActionDefinitions, CompanionInputFieldDropdown, DropdownChoice } from '@companion-module/base'
import { DeviceConfig, InstanceBaseExt } from './config'
import { options, timestampToSeconds} from './utils'
import { ProPresenterLayerName, ProPresenterCaptureOperation, RequestAndResponseJSONValue, ProPresenterTimerOperation} from 'renewedvision-propresenter'
import { ProPresenterTimelineOperation, ProPresenterTimePeriod } from 'renewedvision-propresenter/dist/propresenter'

export function GetActions(instance: InstanceBaseExt<DeviceConfig>): CompanionActionDefinitions {
	const actions: { [id in ActionId]: CompanionActionDefinition | undefined } = {
		// **** ANNOUNCEMENT *****
		[ActionId.announcementActiveFocus]: {
			name: 'Announcement: Active: Focus',
			description: 'Focuses the currently active announcement presentation.',
			options: [],
			callback: () => {
				instance.ProPresenter.announcementActiveFocus()
			},
		},
		[ActionId.announcementActiveTrigger]: {
			name: 'Announcement: Active: Trigger (Restarts)',
			description: 'Retriggers the currently active announcement presentation (Starts from the beginning).',
			options: [],
			callback: () => {
				instance.ProPresenter.announcementTrigger()
			},
		},
		[ActionId.announcementActiveNextTrigger]: {
			name: 'Announcement: Active: Next: Trigger',
			description: 'Triggers the next cue in the active announcement presentation (if there is one)',
			options: [],
			callback: () => {
				instance.ProPresenter.announcementNextTrigger()
			},
		},
		[ActionId.announcementActivePreviousTrigger]: {
			name: 'Announcement: Active: Previous: Trigger',
			description: 'Triggers the previous cue in the active announcement presentation (if there is one)',
			options: [],
			callback: () => {
				instance.ProPresenter.announcementPreviousTrigger()
			},
		},
		[ActionId.announcementActiveIndexTrigger]: {
			name: 'Announcement: Active: Index: Trigger',
			description: 'Triggers the specified cue (by index) in the currently active announcement presentation.',
			options: [options.index],
			callback: async (actionEvent) => {
				const index = await instance.parseVariablesInString(actionEvent.options.index as string)
				instance.ProPresenter.announcementActiveIndexTrigger(index)
			},
		},
		[ActionId.announcementActiveTimelineOperation]: {
			name: 'Announcement: Active: Timeline Operation',
			description: 'Performs the requested timeline operation for the active announcment presentation.',
			options: [options.timeline_operation],
			callback: async (actionEvent) => {
				const operation = await instance.parseVariablesInString(actionEvent.options.timeline_operation as string)
				instance.ProPresenter.announcementActiveTimelineOperation(operation as ProPresenterTimelineOperation)
			},
		},
		// **** AUDIO *****
		[ActionId.audioPlaylistActiveFocus]: {
			name: 'Audio: Playlist: Active: Focus',
			description: 'Focuses the active audio playlist.',
			options: [],
			callback: () => {
				instance.ProPresenter.audioPlaylistActiveFocus()
			},
		},
		[ActionId.audioPlaylistActiveNextTrigger]: {
			name: 'Audio: Playlist: Active: Next: Trigger',
			description: 'Triggers the next item in the active audio playlist.',
			options: [],
			callback: () => {
				instance.ProPresenter.audioPlaylistActiveNextTrigger()
			},
		},
		[ActionId.audioPlaylistActivePreviousTrigger]: {
			name: 'Audio: Playlist: Active: Previous: Trigger',
			description: 'Triggers the previous item in the active audio playlist.',
			options: [],
			callback: () => {
				instance.ProPresenter.audioPlaylistActivePreviousTrigger()
			},
		},
		[ActionId.audioPlaylistActiveTrigger]: {
			name: 'Audio: Playlist: Active: Trigger',
			description: 'Triggers the active audio playlist (restarts from the beginning).',
			options: [],
			callback: async () => {
				instance.ProPresenter.audioPlaylistActiveTrigger()
			},
		},
		[ActionId.audioPlaylistActiveIdTrigger]: {
			name: 'Audio: Playlist: Active: ID: Trigger',
			description: 'Triggers the specified item in the active audio playlist.',
			options: [options.audio_item_id],
			callback: async (actionEvent) => {
				const id = await instance.parseVariablesInString(actionEvent.options.id as string)
				instance.ProPresenter.audioPlaylistActiveIdTrigger(id)
			},
		},
		[ActionId.audioPlaylistFocusedNextTrigger]: {
			name: 'Audio: Playlist: Focused: Next: Trigger',
			description: 'Triggers the next item in the focused audio playlist.',
			options: [],
			callback: () => {
				instance.ProPresenter.audioPlaylistFocusedNextTrigger()
			},
		},
		[ActionId.audioPlaylistFocusedPreviousTrigger]: {
			name: 'Audio: Playlist: Focused: Previous: Trigger',
			description: 'Triggers the previous item in the focused audio playlist.',
			options: [],
			callback: () => {
				instance.ProPresenter.audioPlaylistFocusedPreviousTrigger()
			},
		},
		[ActionId.audioPlaylistFocusedTrigger]: {
			name: 'Audio: Playlist: Focused: Trigger',
			description: 'Triggers the focused audio playlist.',
			options: [],
			callback: () => {
				instance.ProPresenter.audioPlaylistFocusedTrigger()
			},
		},
		[ActionId.audioPlaylistFocusedIdTrigger]: {
			name: 'Audio: Playlist: Focused: Id: Trigger',
			description: 'Triggers the specified item in the focused audio playlist.',
			options: [options.audio_item_id],
			callback: async (actionEvent) => {
				const id = await instance.parseVariablesInString(actionEvent.options.id as string)
				instance.ProPresenter.audioPlaylistFocusedIdTrigger(id)
			},
		},
		[ActionId.audioPlaylistNextFocus]: {
			name: 'Audio: Playlist: Next: Focus',
			description: 'Focuses the next audio playlist.',
			options: [],
			callback: () => {
				instance.ProPresenter.audioPlaylistNextFocus()
			},
		},
		[ActionId.audioPlaylistPreviousFocus]: {
			name: 'Audio: Playlist: Previous: Focus',
			description: 'Focuses the previous audio playlist.',
			options: [],
			callback: () => {
				instance.ProPresenter.audioPlaylistPreviousFocus()
			},
		},
		[ActionId.audioPlaylistByPlaylistIdFocus]: {
			name: 'Audio: Playlist: PlaylistID: Focus',
			options: [options.playlist_id],
			callback: async (actionEvent) => {
				const playlist_id = await instance.parseVariablesInString(actionEvent.options.playlist_id as string)
				instance.ProPresenter.audioFocusPlaylistByPlaylistId(playlist_id)
			},
		},
		[ActionId.audioPlaylistByPlaylistIdNextTrigger]: {
			name: 'Audio: Playlist: PlaylistID: Next: Trigger',
			options: [options.playlist_id],
			callback: async (actionEvent) => {
				const playlist_id = await instance.parseVariablesInString(actionEvent.options.playlist_id as string)
				instance.ProPresenter.audioPlaylistByPlaylistIdNextTrigger(playlist_id)
			},
		},
		[ActionId.audioPlaylistByPlaylistIdPreviousTrigger]: {
			name: 'Audio: Playlist: PlaylistID: Previous: Trigger',
			options: [options.playlist_id],
			callback: async (actionEvent) => {
				const playlist_id = await instance.parseVariablesInString(actionEvent.options.playlist_id as string)
				instance.ProPresenter.audioPlaylistByPlaylistIdPreviousTrigger(playlist_id)
			},
		},
		[ActionId.audioPlaylistByPlaylistIdTrigger]: {
			name: 'Audio: Playlist: PlaylistID: Trigger',
			description: 'Triggers the specified audio playlist.',
			options: [options.playlist_id],
			callback: async (actionEvent) => {
				const playlist_id = await instance.parseVariablesInString(actionEvent.options.playlist_id as string)
				instance.ProPresenter.audioPlaylistByPlaylistIdTrigger(playlist_id)
			},
		},
		// **** CAPTURE *****
		[ActionId.captureOperation]: {
			name: 'Capture: Operation',
			description: 'Performs the requested capture operation (start, stop).',
			options: [options.capture_operation],
			callback: async (actionEvent) => {
				//const layer = await instance.parseVariablesInString(actionEvent.options.layer as string)
				instance.ProPresenter.captureOperation(actionEvent.options.capture_operation as ProPresenterCaptureOperation)
			},
		},
		// **** CLEAR *****
		[ActionId.clearLayer]: {
			name: 'Clear: Layer',
			description: 'Clears the specified layer (audio, props, messages, announcements, slide, media, video_input).',
			options: [options.layer],
			callback: async (actionEvent) => {
				//const layer = await instance.parseVariablesInString(actionEvent.options.layer as string)
				instance.ProPresenter.clearLayer(actionEvent.options.layer as ProPresenterLayerName)
			},
		},
		// **** LIBRARY ****
		[ActionId.libraryByIdPresentationIdCueTrigger]: {
			name: 'Library: LibraryID: PresentationID: CueIndex: Trigger',
			description: 'Triggers the specified cue of the specified presentation in the specified library.',
			options: [options.library_id, options.presentation_id, options.index],
			callback: async (actionEvent) => {
				const library_id = await instance.parseVariablesInString(actionEvent.options.library_id as string)
				const presentation_id = await instance.parseVariablesInString(actionEvent.options.presentation_id as string)
				const cue_index = await instance.parseVariablesInString(actionEvent.options.index as string)
				instance.ProPresenter.libraryByIdPresentationIdCueTrigger(library_id, presentation_id, cue_index)
			}
		},
		// **** LOOKS ****
		[ActionId.lookIdTrigger]: {
			name: 'Look: ID: Trigger',
			description: 'Triggers the specified audience look to make it the live/current look.',
			options: [options.look_id_dropdown, options.look_id_text],
			callback: async (actionEvent) => {
				// user can either choose a look from the dropdown, or choose to manaully enter a look ID as text (in a separate input that supports variables)
				let look_id: string = ''
				if (actionEvent.options.look_id_dropdown == 'manually_specify_lookid')
					look_id = await instance.parseVariablesInString(actionEvent.options.look_id_text as string)
				else
					look_id = actionEvent.options.look_id_dropdown as string

				instance.ProPresenter.lookIdTrigger(look_id)
			},
			learn: (actionEvent) => {
				// Warning: The current look is not contained in the looks returned by GET /v1/looks as the current look gets special treatment in ProPresenter and cannot be deleted. It is separate and has it's own UUID.
				// So for looks, the learn function will take the name of the current (not it's ID) and match that in the list of defined looks to find it's ID.
				const active_look_name:any = instance.getVariableValue('active_look_name') // TODO: is there a better option than using "any" since it involve conversion from (CompanionVariableValue | undefined) to (CompanionOptionValues | undefined)
				instance.log('debug', 'Variables(active_look_name): ' + active_look_name + ' CompanionActionEvent: ' + JSON.stringify(actionEvent))
				
				const lookChoicesDropDown = actions[ActionId.lookIdTrigger]?.options[0] as CompanionInputFieldDropdown
				const lookChoices = lookChoicesDropDown.choices as DropdownChoice[]
				const active_look_UUID = lookChoices?.find(choice => choice.label === active_look_name)?.id
				if (active_look_UUID === undefined)
					return undefined

				return {...actionEvent.options, look_id_dropdown: active_look_UUID}

			}
		},
		// **** MACROS ****
		[ActionId.marcoIdTrigger]: {
			name: 'Macro: ID: Trigger',
			description: 'Triggers the specified macro.',
			options: [options.macro_id_dropdown, options.macro_id_text],
			callback: async (actionEvent) => {
				// user can either choose a macro from the dropdown, or choose to manaully enter a macro ID as text (in a separate input that supports variables)
				let macro_id: string = ''
				if (actionEvent.options.macro_id_dropdown == 'manually_specify_macroid')
					macro_id = await instance.parseVariablesInString(actionEvent.options.macro_id_text as string)
				else
					macro_id = actionEvent.options.macro_id_dropdown as string

				instance.ProPresenter.marcoIdTrigger(macro_id)
			},
		},
		// **** MESSAGES ****
		[ActionId.messageIdTrigger]: {
			name: 'Messages: ID: Trigger',
			description: 'Triggers/Shows the specified message',
			options: [options.message_id_dropdown, options.message_id_text],
			callback: async (actionEvent) => {
				// user can either choose a message from the dropdown, or choose to manaully enter a message ID as text (in a separate input that supports variables)
				let message_id: string = ''
				if (actionEvent.options.message_id_dropdown == 'manually_specify_messageid')
					message_id = await instance.parseVariablesInString(actionEvent.options.message_id_text as string)
				else
					message_id = actionEvent.options.message_id_dropdown as string
				
				instance.ProPresenter.messageIdTrigger(message_id,'todo')
			}
		},
		[ActionId.messageIdClear]: {
			name: 'Messages: ID: Clear',
			description: 'Clears/Hides the specified message',
			options: [options.message_id_dropdown, options.message_id_text],
			callback: async (actionEvent) => {
				// user can either choose a message from the dropdown, or choose to manaully enter a message ID as text (in a separate input that supports variables)
				let message_id: string = ''
				if (actionEvent.options.message_id_dropdown == 'manually_specify_messageid')
					message_id = await instance.parseVariablesInString(actionEvent.options.message_id_text as string)
				else
					message_id = actionEvent.options.message_id_dropdown as string

				instance.ProPresenter.messageIdClear(message_id)
			}
		},
		// **** MISC ****
		[ActionId.miscFindMyMouse]: {
			name: 'Misc: Find My Mouse',
			description: 'Moves mouse cursor to center of ProPresenter UI',
			options: [],
			callback: async () => {
				instance.ProPresenter.findMyMouse()
			},
		},
		// **** PRESENTATION ****
		[ActionId.presentationActiveGroupGroup_IdTrigger]: {
			name: 'Presentation: Active: Group: ID: Trigger',
			description: 'Triggers the specified group of the active presentation',
			options: [options.group_id_dropdown, options.group_id_text],
			callback: async (actionEvent) => {
				// user can either choose a Group from the dropdown, or choose to manually enter a Group ID as text (in a separate input that supports variables)
				let group_id: string = ''
				if (actionEvent.options.group_id_dropdown == 'manually_specify_groupid')
					group_id = await instance.parseVariablesInString(actionEvent.options.group_id_text as string)
				else
					group_id = actionEvent.options.group_id_dropdown as string

				instance.ProPresenter.presentationActiveGroupGroup_IdTrigger(group_id)
			}
		},
		[ActionId.presenationActiveTimelineOperation]: {
			name: 'Presentation: Active: Timeline Operation',
			description: 'Performs the requested timeline operation for the active presentation.',
			options: [options.timeline_operation],
			callback: async (actionEvent) => {
				const operation = await instance.parseVariablesInString(actionEvent.options.timeline_operation as string)
				instance.ProPresenter.presentationActiveTimelineOperation(operation as ProPresenterTimelineOperation)
			},
		},
		// **** PROPS ****
		[ActionId.propIdTrigger]: {
			name: 'Prop: ID: Trigger',
			description: 'Triggers the specified prop.',
			options: [options.prop_id_dropdown, options.prop_id_text],
			callback: async (actionEvent) => {
				// user can either choose a prop from the dropdown, or choose to manually enter a prop ID as text (in a separate input that supports variables)
				let prop_id: string = ''
				if (actionEvent.options.prop_id_dropdown == 'manually_specify_propid')
					prop_id = await instance.parseVariablesInString(actionEvent.options.prop_id_text as string)
				else
					prop_id = actionEvent.options.prop_id_dropdown as string

				instance.ProPresenter.propIdTrigger(prop_id)
			},
		},
		[ActionId.propIdClear]: {
			name: 'Prop: ID: Clear',
			description: 'Clears the specified prop.',
			options: [options.prop_id_dropdown, options.prop_id_text],
			callback: async (actionEvent) => {
				// user can either choose a prop from the dropdown, or choose to manually enter a prop ID as text (in a separate input that supports variables)
				let prop_id: string = ''
				if (actionEvent.options.prop_id_dropdown == 'manually_specify_propid')
					prop_id = await instance.parseVariablesInString(actionEvent.options.prop_id_text as string)
				else
					prop_id = actionEvent.options.prop_id_dropdown as string

				instance.ProPresenter.propIdClear(prop_id)
			},
		},
		// **** STAGE ****
		[ActionId.stageMessage]: {
			name: 'Stage: Message: Show',
			description: 'Show stage message',
			options: [options.stage_message_text],
			callback: async (actionEvent) => {
				const stage_message_text = await instance.parseVariablesInString(actionEvent.options.stage_message_text as string)
				instance.ProPresenter.stageMessage(stage_message_text).then((requestAndResponseJSON: RequestAndResponseJSONValue) => {
						if (!requestAndResponseJSON.ok){
							instance.log('debug', 'Request Error: ' + requestAndResponseJSON.status + '. ' + requestAndResponseJSON.data + '. Called: ' + requestAndResponseJSON.path + ' with body: ' + stage_message_text)
						}
				})
			},
		},
		[ActionId.stageMessageHide]: {
			name: 'Stage: Message: Hide',
			description: 'Hide stage message',
			options: [],
			callback: async () => {
				instance.ProPresenter.stageMessageHide()
			},
		},
		// **** STATUS ****
		[ActionId.statusAudienceScreensSet]: {
			name: 'Status: AudienceScreens: Show/Hide',
			description: 'Show or hide Audience screens',
			options: [options.status_audience_screens_dropdown],
			callback: async (actionEvent) => {
				instance.ProPresenter.statusAudienceScreensSet(actionEvent.options.status_audience_screens_dropdown == 'show')
			},
		},
		[ActionId.statusStageScreensSet]: {
			name: 'Status: StageScreens: Show/Hide',
			description: 'Show or hide Stage screens',
			options: [options.status_stage_screens_dropdown],
			callback: async (actionEvent) => {
				instance.ProPresenter.statusStageScreensSet(actionEvent.options.status_stage_screens_dropdown == 'show')
			},
		},
		[ActionId.stageScreenIdSetLayoutId]: {
			name: 'stageScreenIdSetLayoutId',
			description: '',
			options: [options.stagescreen_id_dropdown, options.stagescreen_id_text, options.stagescreenlayout_id_dropdown, options.stagescreenlayout_id_text],
			callback: async (actionEvent) => {
				let stagescreen_id: string = ''
				if (actionEvent.options.stagescreen_id_dropdown == 'manually_specify_stagescreenid')
					stagescreen_id = await instance.parseVariablesInString(actionEvent.options.stagescreen_id_text as string)
				else
					stagescreen_id = actionEvent.options.stagescreen_id_dropdown as string

				let stagescreenlayout_id: string = ''
				if (actionEvent.options.stagescreenlayout_id_dropdown == 'manually_specify_stagescreenlayoutid')
					stagescreenlayout_id = await instance.parseVariablesInString(actionEvent.options.stagescreenlayout_id_text as string)
				else
					stagescreenlayout_id = actionEvent.options.stagescreenlayout_id_dropdown as string

				instance.ProPresenter.stageScreenIdSetLayoutId(stagescreen_id, stagescreenlayout_id)
			}
		},

		// **** TIMERS ****
		[ActionId.timerIdOperation]: {
			name: 'Timer: Id: Operation',
			description: 'Performs the requested operation on the specified timer (start, stop, reset).',
			options: [options.timer_id_dropdown, options.timer_id_text, options.timer_operation],
			callback: async (actionEvent) => {
				let timerID: string = ''
				if (actionEvent.options.video_input_id_dropdown == 'manually_specify_videoinputsid')
					timerID = await instance.parseVariablesInString(actionEvent.options.timer_id_text as string)
				else
					timerID = actionEvent.options.timer_id_dropdown as string

				instance.ProPresenter.timerIdOperation(timerID, actionEvent.options.timer_operation as ProPresenterTimerOperation)
			},
		},
		[ActionId.timerIdIncrement]: {
			name: 'Timer: Id: Increment',
			description: 'Modifies the time on the specified running timer.',
			options: [options.timer_id_dropdown, options.timer_id_text, options.timer_increment_value],
			callback: async (actionEvent) => {
				let timerID: string = ''
				if (actionEvent.options.video_input_id_dropdown == 'manually_specify_videoinputsid')
					timerID = await instance.parseVariablesInString(actionEvent.options.timer_id_text as string)
				else
					timerID = actionEvent.options.timer_id_dropdown as string

				const timer_increment_value = await instance.parseVariablesInString(actionEvent.options.timer_increment_value as string)
				instance.ProPresenter.timerIdIncrement(timerID, parseInt(timer_increment_value))
			},
		},
		[ActionId.timerIdSet]:{
			name: 'Timer: Id: Set',
			description: 'Set the details of the specified timer',
			options: [options.timer_id_dropdown, options.timer_id_text, options.timer_type, options.timer_duration, options.timer_time_of_day, options.timer_timeperiod, options.timer_start_time, options.timer_end_time, options.timer_allows_overrun, options.timer_optional_operation, options.timer_new_name],
			callback: async (actionEvent) => {
				let timerID: string = ''
				if (actionEvent.options.video_input_id_dropdown == 'manually_specify_videoinputsid')
					timerID = await instance.parseVariablesInString(actionEvent.options.timer_id_text as string)
				else
					timerID = actionEvent.options.timer_id_dropdown as string

				const newTimerName: string = await instance.parseVariablesInString(actionEvent.options.timer_new_name as string)
				const timerDurationString: string = await instance.parseVariablesInString(actionEvent.options.timer_duration as string)
				const timerDurationNumber: number = (timerDurationString.includes(":")) ? timestampToSeconds(timerDurationString) : Number(timerDurationString)
				const timeOfDayString: string = await instance.parseVariablesInString(actionEvent.options.timer_time_of_day as string)
				const timeOfDayNumber: number = (timeOfDayString.includes(":")) ? timestampToSeconds(timeOfDayString) : Number(timeOfDayString)
				const timerType: string = actionEvent.options.timer_type as string
				const startTimeString: string = await instance.parseVariablesInString(actionEvent.options.timer_start_time as string)
				const startTimeNumber: number = (startTimeString.includes(":")) ? timestampToSeconds(startTimeString) : Number(startTimeString)
				const endTimeString: string = await instance.parseVariablesInString(actionEvent.options.timer_end_time as string)
				const endTimeNumber: number = (endTimeString.includes(":")) ? timestampToSeconds(endTimeString) : Number(endTimeString)
				const optionalOperation: ProPresenterTimerOperation | undefined = (actionEvent.options.timer_optional_operation  == 'none') ? undefined : actionEvent.options.timer_optional_operation as ProPresenterTimerOperation
				
				switch (timerType) {
					case 'countdown':
						instance.ProPresenter.timerIdSetToCountdown(timerID, timerDurationNumber, actionEvent.options.timer_allows_overrun as boolean, optionalOperation, (newTimerName != '') ? newTimerName : undefined) // Only rename if new name is not blank
						break
					case 'countdownto':
						instance.ProPresenter.timerIdSetToCountdownToTime(timerID, timeOfDayNumber, actionEvent.options.timer_timeperiod as ProPresenterTimePeriod, actionEvent.options.timer_allows_overrun as boolean, optionalOperation, (newTimerName != '') ? newTimerName : undefined) // Only rename if new name is not blank
						break
					case 'elapsed':
						instance.ProPresenter.timerIdSetToElapsed(timerID, startTimeNumber, actionEvent.options.timer_allows_overrun as boolean, (endTimeNumber > 0) ? endTimeNumber : undefined, optionalOperation, (newTimerName != '') ? newTimerName : undefined) // Only pass endTime if it was > 0 and only rename if new name is not blank
						break
					default:
						instance.log('debug', 'Invalid timer type: ' + timerType)
				}
				
			}
		},
		// **** TRIGGER *****
		[ActionId.triggerCueNext]: {
			name: 'Trigger: Cue: Next',
			description: 'Triggers the next cue or item in the currently active playlist or library (Like arrow keys).',
			options: [],
			callback: async () => {
				instance.ProPresenter.triggerNext()
			},
		},
		[ActionId.triggerCuePrevious]: {
			name: 'Trigger: Cue: Previous',
			description: 'Triggers the previous cue or item in the currently active playlist or library (Like arrow keys).',
			options: [],
			callback: async () => {
				instance.ProPresenter.triggerPrevious()
			},
		},
		[ActionId.triggerMediaNext]: {
			name: 'Trigger: Media: Next',
			description: 'Triggers the next item in the currently active media playlist.',
			options: [],
			callback: async () => {
				instance.ProPresenter.triggerMediaNext()
			},
		},
		[ActionId.triggerMediaPrevious]: {
			name: 'Trigger: Media: Previous',
			description: 'Triggers the previous item in the currently active media playlist.',
			options: [],
			callback: async () => {
				instance.ProPresenter.triggerMediaPrevious()
			},
		},
		[ActionId.triggerAudioNext]: {
			name: 'Trigger: Audio: Next',
			description: 'Triggers the next item in the currently active audio playlist.',
			options: [],
			callback: async () => {
				instance.ProPresenter.triggerAudioNext()
			},
		},
		[ActionId.triggerAudioPrevious]: {
			name: 'Trigger: Audio: Previous',
			description: 'Triggers the previous item in the currently active audio playlist.',
			options: [],
			callback: async () => {
				instance.ProPresenter.triggerAudioPrevious()
			},
		},
		// ****VIDEO INPUTS ****
		[ActionId.videoInputsIdTrigger]: {
			name: 'VideoInputs: ID: Trigger',
			description: 'Triggers a video input from the video inputs playlist.',
			options: [options.video_input_id_dropdown, options.video_input_id_text],
			callback: async (actionEvent) => {
				// user can either choose a video input from the dropdown, or choose to manaully enter a video input ID as text (in a separate input that supports variables)
				let video_input_id: string = ''
				if (actionEvent.options.video_input_id_dropdown == 'manually_specify_videoinputsid')
					video_input_id = await instance.parseVariablesInString(actionEvent.options.video_input_id_text as string)
				else
					video_input_id = actionEvent.options.video_input_id_dropdown as string

				instance.ProPresenter.videoInputsIdTrigger(video_input_id)
			},
		},
		// **** VERSION ****
		// Keep this one as LAST action...
		[ActionId.version]: {
			name: 'Version',
			description: 'Refresh ProPresenter, API and host version variables.',
			options: [],
			callback: () => {
				instance.ProPresenter.version().then((result: RequestAndResponseJSONValue) => {
					instance.processIncommingData(result)
			9	})
			},
		},
	}

	// Update look choices with list of looks from ProPresenter
	// TODO: handle error cases (when things are missing???)
	if (instance.looksChoices) {
		const lookChoicesDropDown = actions[ActionId.lookIdTrigger]?.options[0] as CompanionInputFieldDropdown
		const manual_look_choice = lookChoicesDropDown.choices.pop() // The last item in the looks choices list (after all the current looks list from ProPresenter) is a placeholder, that when selected, allows for manually specifing the Look (in another text input)
		lookChoicesDropDown.choices = instance.looksChoices.concat(manual_look_choice) 
		lookChoicesDropDown.default = lookChoicesDropDown.choices[0].id
	}
	if (instance.macroChoices) {
		const macroChoicesDropDown = actions[ActionId.marcoIdTrigger]?.options[0] as CompanionInputFieldDropdown
		const manual_look_choice = macroChoicesDropDown.choices.pop() // The last item in the macro choices list (after all the current macros list from ProPresenter) is a placeholder, that when selected, allows for manually specifing the Macro (in another text input)
		macroChoicesDropDown.choices = instance.macroChoices.concat(manual_look_choice) 
		macroChoicesDropDown.default = macroChoicesDropDown.choices[0].id
	}
	if (instance.propChoices) {
		const propChoicesDropDown = actions[ActionId.propIdTrigger]?.options[0] as CompanionInputFieldDropdown
		const manual_prop_choice = propChoicesDropDown.choices.pop() // The last item in the prop choices list (after all the current props list from ProPresenter) is a placeholder, that when selected, allows for manually specifing the Prop (in another text input)
		propChoicesDropDown.choices = instance.propChoices.concat(manual_prop_choice) 
		propChoicesDropDown.default = propChoicesDropDown.choices[0].id
	}
	if (instance.videoInputChoices) {
		const videoInputChoicesDropDown = actions[ActionId.videoInputsIdTrigger]?.options[0] as CompanionInputFieldDropdown
		const manual_video_input_choice = videoInputChoicesDropDown.choices.pop() // The last item in the video inputs choices list (after all the current video inputs list from ProPresenter) is a placeholder, that when selected, allows for manually specifing the Video Input (in another text input)
		videoInputChoicesDropDown.choices = instance.videoInputChoices.concat(manual_video_input_choice) 
		videoInputChoicesDropDown.default = videoInputChoicesDropDown.choices[0].id
	}
	if (instance.timerChoices) {
		const timerChoicesDropDown = actions[ActionId.timerIdSet]?.options[0] as CompanionInputFieldDropdown
		const manual_timer_choice = timerChoicesDropDown.choices.pop() // The last item in the timer choices list (after all the current timers list from ProPresenter) is a placeholder, that when selected, allows for manually specifing the Timer (in another text input)
		timerChoicesDropDown.choices = instance.timerChoices.concat(manual_timer_choice) 
		timerChoicesDropDown.default = timerChoicesDropDown.choices[0].id
	}
	if (instance.stageScreenChoices) {
		const stageScreenChoicesDropDown = actions[ActionId.stageScreenIdSetLayoutId]?.options[0] as CompanionInputFieldDropdown
		const manual_stagescreen_choice = stageScreenChoicesDropDown.choices.pop() // The last item in the stage screen choices list (after all the current stage screens list from ProPresenter) is a placeholder, that when selected, allows for manually specifing the stage screen (in another text input)
		stageScreenChoicesDropDown.choices = instance.stageScreenChoices.concat(manual_stagescreen_choice) 
		stageScreenChoicesDropDown.default = stageScreenChoicesDropDown.choices[0].id
	}
	if (instance.stageScreenLayoutChoices) {
		const stageScreenLayoutChoicesDropDown = actions[ActionId.stageScreenIdSetLayoutId]?.options[2] as CompanionInputFieldDropdown
		const manual_stagescreenlayout_choice = stageScreenLayoutChoicesDropDown.choices.pop() // The last item in the stage screen layout choices list (after all the current stage screen layouts list from ProPresenter) is a placeholder, that when selected, allows for manually specifing the stage screen layout (in another text input)
		stageScreenLayoutChoicesDropDown.choices = instance.stageScreenLayoutChoices.concat(manual_stagescreenlayout_choice) 
		stageScreenLayoutChoicesDropDown.default = stageScreenLayoutChoicesDropDown.choices[0].id
	}
	if(instance.messageChoices) {
		const messageChoicesDropDown = actions[ActionId.messageIdTrigger]?.options[0] as CompanionInputFieldDropdown
		const manual_message_choice = messageChoicesDropDown.choices.pop() // The last item in the message choices list (after all the current messages list from ProPresenter) is a placeholder, that when selected, allows for manually specifing the message (in another text input)
		messageChoicesDropDown.choices = instance.messageChoices.concat(manual_message_choice) 
		messageChoicesDropDown.default = messageChoicesDropDown.choices[0].id
	}
	if(instance.groupChoices) {
		const groupChoicesDropDown = actions[ActionId.presentationActiveGroupGroup_IdTrigger]?.options[0] as CompanionInputFieldDropdown
		const manual_group_choice = groupChoicesDropDown.choices.pop() // The last item in the group choices list (after all the current group list from ProPresenter) is a placeholder, that when selected, allows for manually specifing the group (in another text input)
		groupChoicesDropDown.choices = instance.groupChoices.concat(manual_group_choice) 
		groupChoicesDropDown.default = groupChoicesDropDown.choices[0].id
	}

	return actions
}

export enum ActionId {
	// Announcement
	announcementActiveFocus = 'announcementActiveFocus',
	announcementActiveTrigger = 'announcementActiveTrigger',
	announcementActiveNextTrigger = 'announcementActiveNextTrigger',
	announcementActivePreviousTrigger = 'announcementActivePreviousTrigger',
	announcementActiveIndexTrigger = 'announcementActiveIndexTrigger',
	announcementActiveTimelineOperation = 'announcementActiveTimelineOperation',
	// Audio
	audioPlaylistActiveFocus = 'audioPlaylistActiveFocus',
	audioPlaylistActiveNextTrigger = 'audioPlaylistActiveNextTrigger',
	audioPlaylistActivePreviousTrigger = 'audioPlaylistActivePreviousTrigger',
	audioPlaylistActiveTrigger = 'audioPlaylistActiveTrigger',
	audioPlaylistActiveIdTrigger = 'audioPlaylistActiveIdTrigger',
	audioPlaylistFocusedNextTrigger = 'audioPlaylistFocusedNextTrigger',
	audioPlaylistFocusedPreviousTrigger = 'audioPlaylistFocusedPreviousTrigger',
	audioPlaylistFocusedTrigger = 'audioPlaylistFocusedTrigger',
	audioPlaylistFocusedIdTrigger = 'audioPlaylistFocusedIdTrigger',
	audioPlaylistNextFocus = 'audioPlaylistNextFocus',
	audioPlaylistPreviousFocus = 'audioPlaylistPreviousFocus',
	audioPlaylistByPlaylistIdFocus = 'audioPlaylistByPlaylistIdFocus',
	audioPlaylistByPlaylistIdNextTrigger = 'audioPlaylistByPlaylistIdNextTrigger',
	audioPlaylistByPlaylistIdPreviousTrigger = 'audioPlaylistByPlaylistIdPreviousTrigger',
	audioPlaylistByPlaylistIdTrigger = 'audioPlaylistByPlaylistIdTrigger',
	
	// Capture
	captureOperation = 'captureOperation',

	// Clear
	clearLayer = 'clearLayer',
	//clearGroup = 'clearGroup',

	// Library
	libraryByIdPresentationIdCueTrigger = 'libraryByIdPresentationIdCueTrigger',

	// Looks
	lookIdTrigger = 'lookIdTrigger',

	// Macros
	marcoIdTrigger = 'marcoIdTrigger',

	//Messages
	messageIdTrigger = 'messageIdTrigger',
	messageIdClear = 'messageIdClear',

	// Misc
	miscFindMyMouse = 'miscFindMyMouse',

	// Presentation
	presentationActiveGroupGroup_IdTrigger = 'presentationActiveGroupGroup_IdTrigger',
	presenationActiveTimelineOperation = 'presenationActiveTimelineOperation',

	// Props
	propIdTrigger = 'propIdTrigger',
	propIdClear =  'propIdClear',

	// Stage
	stageMessage = 'stageMessage',
	stageMessageHide = 'stageMessageHide',
	stageScreenIdSetLayoutId = 'stageScreenIdSetLayoutId',

	// Status
	statusAudienceScreensSet = 'statusAudienceScreensSet',
	statusStageScreensSet = 'statusStageScreensSet',

	// Timers
	timerIdOperation = 'timerIdOperation',
	timerIdIncrement = 'timerIdIncrement',
	timerIdSet = 'timerIdSet',

	// Trigger
	triggerCueNext = 'triggerCueNext',
	triggerCuePrevious = 'triggerCuePrevious',
	triggerMediaNext = 'triggerMediaNext',
	triggerMediaPrevious = 'triggerMediaPrevious',
	triggerAudioNext = 'triggerAudioNext',
	triggerAudioPrevious = 'triggerAudioPrevious',

	// Version
	version = 'version',

	// Video Input
	videoInputsIdTrigger = 'videoInputsIdTrigger',
}
