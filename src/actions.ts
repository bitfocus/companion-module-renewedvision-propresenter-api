import { CompanionActionDefinition, CompanionActionDefinitions, CompanionInputFieldDropdown, DropdownChoice } from '@companion-module/base'
import { DeviceConfig, InstanceBaseExt } from './config'
import { options } from './utils'
import { ProPresenterLayerName, ProPresenterCaptureOperation, RequestAndResponseJSONValue, ProPresenterTimerOperation} from 'renewedvision-propresenter'

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
				instance.ProPresenter.announcementActiveTimelineOperation(operation)
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
		// **** MISC ****
		[ActionId.miscFindMyMouse]: {
			name: 'Misc: Find My Mouse',
			description: 'Moves mouse cursor to center of ProPresenter UI',
			options: [],
			callback: async () => {
				instance.ProPresenter.findMyMouse()
			},
		},
		// **** PROPS ****
		[ActionId.propIdTrigger]: {
			name: 'Prop: ID: Trigger',
			description: 'Triggers the specified prop.',
			options: [options.prop_id_dropdown, options.prop_id_text],
			callback: async (actionEvent) => {
				// user can either choose a prop from the dropdown, or choose to manaully enter a prop ID as text (in a separate input that supports variables)
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
				// user can either choose a prop from the dropdown, or choose to manaully enter a prop ID as text (in a separate input that supports variables)
				let prop_id: string = ''
				if (actionEvent.options.prop_id_dropdown == 'manually_specify_propid')
					prop_id = await instance.parseVariablesInString(actionEvent.options.prop_id_text as string)
				else
					prop_id = actionEvent.options.prop_id_dropdown as string

				instance.ProPresenter.propIdClear(prop_id)
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

		// **** TIMERS ****
		[ActionId.timerIdOperation]: {
			name: 'Timer: Id: Operation',
			description: 'Performs the requested operation on the specified timer (start, stop, reset).',
			options: [options.timer_id, options.timer_operation],
			callback: async (actionEvent) => {
				const timer_id = await instance.parseVariablesInString(actionEvent.options.timer_id as string) 
				instance.ProPresenter.timerIdOperation(timer_id, actionEvent.options.timer_operation as ProPresenterTimerOperation)
			},
		},
		[ActionId.timerIdIncrement]: {
			name: 'Timer: Id: Increment',
			description: 'Modifies the time on the specified running timer.',
			options: [options.timer_id, options.timer_increment_value],
			callback: async (actionEvent) => {
				const timer_id = await instance.parseVariablesInString(actionEvent.options.timer_id as string) 
				const timer_increment_value = await instance.parseVariablesInString(actionEvent.options.timer_increment_value as string)
				instance.ProPresenter.timerIdIncrement(timer_id, parseInt(timer_increment_value))
			},
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
		const manual_prop_choice = propChoicesDropDown.choices.pop() // The last item in the macro choices list (after all the current macros list from ProPresenter) is a placeholder, that when selected, allows for manually specifing the Macro (in another text input)
		propChoicesDropDown.choices = instance.propChoices.concat(manual_prop_choice) 
		propChoicesDropDown.default = propChoicesDropDown.choices[0].id
	}
	if (instance.videoInputChoices) {
		const videoInputChoicesDropDown = actions[ActionId.videoInputsIdTrigger]?.options[0] as CompanionInputFieldDropdown
		const manual_video_input_choice = videoInputChoicesDropDown.choices.pop() // The last item in the macro choices list (after all the current macros list from ProPresenter) is a placeholder, that when selected, allows for manually specifing the Macro (in another text input)
		videoInputChoicesDropDown.choices = instance.videoInputChoices.concat(manual_video_input_choice) 
		videoInputChoicesDropDown.default = videoInputChoicesDropDown.choices[0].id
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

	// Misc
	miscFindMyMouse = 'miscFindMyMouse',

	// Props
	propIdTrigger = 'propIdTrigger',
	propIdClear =  'propIdClear',

	// Status
	statusAudienceScreensSet = 'statusAudienceScreensSet',
	statusStageScreensSet = 'statusStageScreensSet',

	// Timers
	timerIdOperation = 'timerIdOperation',
	timerIdIncrement = 'timerIdIncrement',

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
