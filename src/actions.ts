import { CompanionActionDefinition, CompanionActionDefinitions } from '@companion-module/base'
import { DeviceConfig, InstanceBaseExt, JSONValue } from './config'
import { options } from './utils'
import { ProPresenterLayerName } from 'renewedvision-propresenter'

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
			name: 'Audio: Focus Active Playlist',
			description: 'Focuses the active audio playlist.',
			options: [],
			callback: () => {
				instance.ProPresenter.audioPlaylistActiveFocus()
			},
		},
		[ActionId.audioPlaylistNextFocus]: {
			name: 'Audio: Focus Next Playlist',
			description: 'Focuses the active audio playlist.',
			options: [],
			callback: () => {
				instance.ProPresenter.audioPlaylistNextFocus()
			},
		},
		[ActionId.audioPlaylistPreviousFocus]: {
			name: 'Audio: Focus Previous Playlist',
			options: [],
			callback: () => {
				instance.ProPresenter.audioPlaylistPreviousFocus()
			},
		},
		[ActionId.audioPlaylistByPlaylistIdFocus]: {
			name: 'Audio: Focus Specified Playlist',
			options: [options.playlist_id],
			callback: async (action) => {
				const playlist_id = await instance.parseVariablesInString(action.options.playlist_id as string)
				instance.ProPresenter.audioGetPlaylistByPlaylistId(playlist_id)
			},
		},
		[ActionId.audioPlaylistFocusedTrigger]: {
			name: 'Audio: Triggers Focused Playlist',
			options: [],
			callback: () => {
				instance.ProPresenter.audioPlaylistFocusedTrigger()
			},
		},
		[ActionId.audioPlaylistFocusedNextTrigger]: {
			name: 'Audio: Triggers the next item in the focused audio playlist.',
			options: [],
			callback: () => {
				instance.ProPresenter.audioPlaylistFocusedNextTrigger()
			},
		},
		[ActionId.audioPlaylistFocusedPreviousTrigger]: {
			name: 'Audio: Triggers the previous item in the focused audio playlist',
			options: [],
			callback: () => {
				instance.ProPresenter.audioPlaylistFocusedPreviousTrigger()
			},
		},
		[ActionId.audioPlaylistFocusedIdTrigger]: {
			name: 'Audio: Triggers the specified item in the focused audio playlist',
			options: [options.id],
			callback: async (action) => {
				const id = await instance.parseVariablesInString(action.options.id as string)
				instance.ProPresenter.audioPlaylistFocusedIdTrigger(id)
			},
		},
		[ActionId.audioPlaylistActiveNextTrigger]: {
			name: 'Audio: Triggers the next item in the active audio playlist',
			options: [],
			callback: () => {
				instance.ProPresenter.audioPlaylistActiveNextTrigger()
			},
		},
		[ActionId.audioPlaylistActivePreviousTrigger]: {
			name: 'Audio: Triggers the previous item in the active audio playlist',
			options: [],
			callback: () => {
				instance.ProPresenter.audioPlaylistActivePreviousTrigger()
			},
		},
		[ActionId.audioPlaylistActiveIdTrigger]: {
			name: 'Audio: Triggers the specified item in the active audio playlist',
			options: [options.id],
			callback: async (action) => {
				const id = await instance.parseVariablesInString(action.options.id as string)
				instance.ProPresenter.audioPlaylistActiveIdTrigger(id)
			},
		},
		[ActionId.audioPlaylistByPlaylistIdNextTrigger]: {
			name: 'Audio: Triggers the next item in the active audio playlist',
			options: [options.playlist_id],
			callback: async (action) => {
				const playlist_id = await instance.parseVariablesInString(action.options.playlist_id as string)
				instance.ProPresenter.audioPlaylistByPlaylistIdNextTrigger(playlist_id)
			},
		},
		[ActionId.audioPlaylistByPlaylistIdPreviousTrigger]: {
			name: 'Audio: Triggers the previous item in the active audio playlist',
			options: [options.playlist_id],
			callback: async (action) => {
				const playlist_id = await instance.parseVariablesInString(action.options.playlist_id as string)
				instance.ProPresenter.audioPlaylistByPlaylistIdPreviousTrigger(playlist_id)
			},
		},
		// **** CLEAR *****
		[ActionId.clearLayer]: {
			name: 'Clear: Layer',
			description: 'Clears the specified layer (audio, props, messages, announcements, slide, media, video_input)..',
			options: [options.layer],
			callback: async (action) => {
				//const layer = await instance.parseVariablesInString(action.options.layer as string)
				instance.ProPresenter.clearLayer(action.options.layer as ProPresenterLayerName)
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
	audioPlaylistNextFocus = 'audioPlaylistNextFocus',
	audioPlaylistActiveNextTrigger = 'audioPlaylistActiveNextTrigger',
	audioPlaylistActivePreviousTrigger = 'audioPlaylistActivePreviousTrigger',
	audioPlaylistActiveIdTrigger = 'audioPlaylistActiveIdTrigger',
	audioPlaylistPreviousFocus = 'audioPlaylistPreviousFocus',
	audioPlaylistByPlaylistIdFocus = 'audioPlaylistByPlaylistIdFocus',
	audioPlaylistFocusedTrigger = 'audioPlaylistFocusedTrigger',
	audioPlaylistFocusedNextTrigger = 'audioPlaylistFocusedNextTrigger',
	audioPlaylistFocusedPreviousTrigger = 'audioPlaylistFocusedPreviousTrigger',
	audioPlaylistFocusedIdTrigger = 'audioPlaylistFocusedIdTrigger',
	audioPlaylistByPlaylistIdNextTrigger = 'audioPlaylistByPlaylistIdNextTrigger',
	audioPlaylistByPlaylistIdPreviousTrigger = 'audioPlaylistByPlaylistIdPreviousTrigger',
	// Clear
	clearLayer = 'clearLayer',
	//clearGroup = 'clearGroup',

	// Trigger
	triggerCueNext = 'triggerCueNext',
	triggerCuePrevious = 'triggerCuePrevious',
	triggerMediaNext = 'triggerMediaNext',
	triggerMediaPrevious = 'triggerMediaPrevious',
	triggerAudioNext = 'triggerAudioNext',
	triggerAudioPrevious = 'triggerAudioPrevious',
}
