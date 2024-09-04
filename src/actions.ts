import { CompanionActionDefinition, CompanionActionDefinitions } from '@companion-module/base'
import { DeviceConfig, InstanceBaseExt, JSONValue } from './config'
import { options } from './utils'
import { ProPresenterLayerName, ProPresenterCaptureOperation } from 'renewedvision-propresenter'

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
			callback: async (action) => {
				const index = await instance.parseVariablesInString(action.options.index as string)
				instance.ProPresenter.announcementActiveIndexTrigger(index)
			},
		},
		[ActionId.announcementActiveTimelineOperation]: {
			name: 'Announcement: Active: Timeline Operation',
			description: 'Performs the requested timeline operation for the active announcment presentation.',
			options: [options.timeline_operation],
			callback: async (action) => {
				const operation = await instance.parseVariablesInString(action.options.operation as string)
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
			options: [options.id],
			callback: async (action) => {
				const id = await instance.parseVariablesInString(action.options.id as string)
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
			options: [options.id],
			callback: async (action) => {
				const id = await instance.parseVariablesInString(action.options.id as string)
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
			callback: async (action) => {
				const playlist_id = await instance.parseVariablesInString(action.options.playlist_id as string)
				instance.ProPresenter.audioFocusPlaylistByPlaylistId(playlist_id)
			},
		},
		[ActionId.audioPlaylistByPlaylistIdNextTrigger]: {
			name: 'Audio: Playlist: PlaylistID: Next: Trigger',
			options: [options.playlist_id],
			callback: async (action) => {
				const playlist_id = await instance.parseVariablesInString(action.options.playlist_id as string)
				instance.ProPresenter.audioPlaylistByPlaylistIdNextTrigger(playlist_id)
			},
		},
		[ActionId.audioPlaylistByPlaylistIdPreviousTrigger]: {
			name: 'Audio: Playlist: PlaylistID: Previous: Trigger',
			options: [options.playlist_id],
			callback: async (action) => {
				const playlist_id = await instance.parseVariablesInString(action.options.playlist_id as string)
				instance.ProPresenter.audioPlaylistByPlaylistIdPreviousTrigger(playlist_id)
			},
		},
		[ActionId.audioPlaylistByPlaylistIdTrigger]: {
			name: 'Audio: Playlist: PlaylistID: Trigger',
			description: 'Triggers the specified audio playlist.',
			options: [options.playlist_id],
			callback: async (action) => {
				const playlist_id = await instance.parseVariablesInString(action.options.playlist_id as string)
				instance.ProPresenter.audioPlaylistByPlaylistIdTrigger(playlist_id)
			},
		},
		// **** CAPTURE *****
		[ActionId.captureOperation]: {
			name: 'Capture: Operation',
			description: 'Performs the requested capture operation (start, stop).',
			options: [options.capture_operation],
			callback: async (action) => {
				//const layer = await instance.parseVariablesInString(action.options.layer as string)
				instance.ProPresenter.captureOperation(action.options.operation as ProPresenterCaptureOperation)
			},
		},
		// **** CLEAR *****
		[ActionId.clearLayer]: {
			name: 'Clear: Layer',
			description: 'Clears the specified layer (audio, props, messages, announcements, slide, media, video_input).',
			options: [options.layer],
			callback: async (action) => {
				//const layer = await instance.parseVariablesInString(action.options.layer as string)
				instance.ProPresenter.clearLayer(action.options.layer as ProPresenterLayerName)
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
		// **** VERSION ****
		// Keep this one as LAST action...
		[ActionId.version]: {
			name: 'Version',
			description: 'Refresh ProPresenter, API and host version variables.',
			options: [],
			callback: () => {
				instance.ProPresenter.version().then((result: JSONValue) => {
					instance.processIncommingData(result)
				})
			},
		},
	}
	return actions
}

export enum ActionId {
	version = 'version',
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

	// Misc
	miscFindMyMouse = 'miscFindMyMouse',

	// Trigger
	triggerCueNext = 'triggerCueNext',
	triggerCuePrevious = 'triggerCuePrevious',
	triggerMediaNext = 'triggerMediaNext',
	triggerMediaPrevious = 'triggerMediaPrevious',
	triggerAudioNext = 'triggerAudioNext',
	triggerAudioPrevious = 'triggerAudioPrevious',
}
