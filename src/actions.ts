import { CompanionActionDefinition, CompanionActionDefinitions } from '@companion-module/base'
import { DeviceConfig, InstanceBaseExt, JSONValue } from './config'
import { options } from './utils'

// TODO: figure out best naming (esp grouping etc)
export function GetActions(instance: InstanceBaseExt<DeviceConfig>): CompanionActionDefinitions {
	const actions: { [id in ActionId]: CompanionActionDefinition | undefined } = {
		[ActionId.version]: {
			name: 'Version',
			options: [],
			callback: () => {
				instance.ProPresenter.version().then((result: JSONValue) => {
					instance.processIncommingData(result)
				})
			},
		},
		[ActionId.announcementActiveFocus]: {
			name: 'Announcement: Focus Active Announcement',
			options: [],
			callback: () => {
				instance.ProPresenter.announcementActiveFocus()
			},
		},
		[ActionId.announcementTrigger]: {
			name: 'Announcement: Re-Trigger Active Announcement',
			options: [],
			callback: () => {
				instance.ProPresenter.announcementTrigger()
			},
		},
		[ActionId.announcementNextTrigger]: {
			name: 'Announcement: Trigger Next Cue In Active Announcement',
			options: [],
			callback: () => {
				instance.ProPresenter.announcementNextTrigger()
			},
		},
		[ActionId.announcementPreviousTrigger]: {
			name: 'Announcement: Trigger Previous Cue In Active Announcement',
			options: [],
			callback: () => {
				instance.ProPresenter.announcementPreviousTrigger()
			},
		},
		[ActionId.announcementActiveIndexTrigger]: {
			name: 'Announcement: Trigger Indexed Cue In Active Announcement',
			options: [options.index],
			callback: async (action) => {
				const index = await instance.parseVariablesInString(action.options.index as string)
				instance.ProPresenter.announcementActiveIndexTrigger(index)
			},
		},
		[ActionId.announcementActiveTimelineOperation]: {
			name: 'Announcement: Perform Timeline Operation For Active Announcement',
			options: [options.timeline_operation],
			callback: async (action) => {
				const operation = await instance.parseVariablesInString(action.options.operation as string)
				instance.ProPresenter.announcementActiveTimelineOperation(operation)
			},
		},
		[ActionId.audioPlaylistsNextFocus]: {
			name: 'Audio: Focus Next Playlist',
			options: [],
			callback: () => {
				instance.ProPresenter.audioPlaylistsNextFocus()
			},
		},
		[ActionId.audioPlaylistsPreviousFocus]: {
			name: 'Audio: Focus Previous Playlist',
			options: [],
			callback: () => {
				instance.ProPresenter.audioPlaylistsPreviousFocus()
			},
		},
		[ActionId.audioPlaylistsActiveFocus]: {
			name: 'Audio: Focus Active Playlist',
			options: [],
			callback: () => {
				instance.ProPresenter.audioPlaylistsActiveFocus()
			},
		},
		[ActionId.audioPlaylistsByPlaylistIdFocus]: {
			name: 'Audio: Focus Specified Playlist',
			options: [options.playlist_id],
			callback: async (action) => {
				const playlist_id = await instance.parseVariablesInString(action.options.playlist_id as string)
				instance.ProPresenter.audioPlaylistsByPlaylistIdFocus(playlist_id)
			},
		},
		[ActionId.audioPlaylistsFocusedTrigger]: {
			name: 'Audio: Triggers Focused Playlist',
			options: [],
			callback: () => {
				instance.ProPresenter.audioPlaylistsFocusedTrigger()
			},
		},
		[ActionId.audioPlaylistsFocusedNextTrigger]: {
			name: 'Audio: Triggers the next item in the focused audio playlist.',
			options: [],
			callback: () => {
				instance.ProPresenter.audioPlaylistsFocusedNextTrigger()
			},
		},
		[ActionId.audioPlaylistsFocusedPreviousTrigger]: {
			name: 'Audio: Triggers the previous item in the focused audio playlist',
			options: [],
			callback: () => {
				instance.ProPresenter.audioPlaylistsFocusedPreviousTrigger()
			},
		},
		[ActionId.audioPlaylistsFocusedIdTrigger]: {
			name: 'Triggers the specified item in the focused audio playlist',
			options: [options.id],
			callback: async (action) => {
				const id = await instance.parseVariablesInString(action.options.id as string)
				instance.ProPresenter.audioPlaylistsFocusedIdTrigger(id)
			},
		},
		[ActionId.audioPlaylistsActiveNextTrigger]: {
			name: 'Audio: Triggers the next item in the active audio playlist',
			options: [],
			callback: () => {
				instance.ProPresenter.audioPlaylistsActiveNextTrigger()
			},
		},
		[ActionId.audioPlaylistsActivePreviousTrigger]: {
			name: 'Audio: Triggers the previous item in the active audio playlist',
			options: [],
			callback: () => {
				instance.ProPresenter.audioPlaylistsActivePreviousTrigger()
			},
		},
		[ActionId.audioPlaylistsActiveIdTrigger]: {
			name: 'Audio: Triggers the specified item in the active audio playlist',
			options: [options.id],
			callback: async (action) => {
				const id = await instance.parseVariablesInString(action.options.id as string)
				instance.ProPresenter.audioPlaylistsActiveIdTrigger(id)
			},
		},
		[ActionId.audioPlaylistsByPlaylistIdNextTrigger]: {
			name: 'Audio: Triggers the next item in the active audio playlist',
			options: [options.playlist_id],
			callback: async (action) => {
				const playlist_id = await instance.parseVariablesInString(action.options.playlist_id as string)
				instance.ProPresenter.audioPlaylistsByPlaylistIdNextTrigger(playlist_id)
			},
		},
		[ActionId.audioPlaylistsByPlaylistIdPreviousTrigger]: {
			name: 'Audio: Triggers the previous item in the active audio playlist',
			options: [options.playlist_id],
			callback: async (action) => {
				const playlist_id = await instance.parseVariablesInString(action.options.playlist_id as string)
				instance.ProPresenter.audioPlaylistsByPlaylistIdPreviousTrigger(playlist_id)
			},
		},
		[ActionId.triggerMediaNext]: {
			name: 'Trigger Next Media',
			options: [],
			callback: async () => {
				instance.ProPresenter.triggerMediaNext()
			},
		},
		[ActionId.triggerMediaPrevious]: {
			name: 'Trigger Previous Media',
			options: [],
			callback: async () => {
				instance.ProPresenter.triggerMediaPrevious()
			},
		},
		[ActionId.triggerAudioNext]: {
			name: 'Trigger Next Audio',
			options: [],
			callback: async () => {
				instance.ProPresenter.triggerAudioNext()
			},
		},
		[ActionId.triggerAudioPrevious]: {
			name: 'Trigger Previous Audio',
			options: [],
			callback: async () => {
				instance.ProPresenter.triggerAudioPrevious()
			},
		},
		[ActionId.triggerNext]: {
			name: 'Trigger Next Slide/Cue',
			options: [],
			callback: async () => {
				instance.ProPresenter.triggerNext()
			},
		},
		[ActionId.triggerPrevious]: {
			name: 'Trigger Previous Slide/Cue',
			options: [],
			callback: async () => {
				instance.ProPresenter.triggerPrevious()
			},
		},
	}
	return actions
}

export enum ActionId {
	version = 'version',
	// Announcement
	announcementActiveFocus = 'announcementActiveFocus',
	announcementTrigger = 'announcementTrigger',
	announcementNextTrigger = 'announcementNextTrigger',
	announcementPreviousTrigger = 'announcementPreviousTrigger',
	announcementActiveIndexTrigger = 'announcementActiveIndexTrigger',
	announcementActiveTimelineOperation = 'announcementActiveTimelineOperation',
	// Audio
	audioPlaylistsNextFocus = 'audioPlaylistsNextFocus',
	audioPlaylistsPreviousFocus = 'audioPlaylistsPreviousFocus',
	audioPlaylistsActiveFocus = 'audioPlaylistsActiveFocus',
	audioPlaylistsByPlaylistIdFocus = 'audioPlaylistsByPlaylistIdFocus',
	audioPlaylistsFocusedTrigger = 'audioPlaylistsFocusedTrigger',
	audioPlaylistsFocusedNextTrigger = 'audioPlaylistsFocusedNextTrigger',
	audioPlaylistsFocusedPreviousTrigger = 'audioPlaylistsFocusedPreviousTrigger',
	audioPlaylistsFocusedIdTrigger = 'audioPlaylistsFocusedIdTrigger',
	audioPlaylistsActiveNextTrigger = 'audioPlaylistsActiveNextTrigger',
	audioPlaylistsActivePreviousTrigger = 'audioPlaylistsActivePreviousTrigger',
	audioPlaylistsActiveIdTrigger = 'audioPlaylistsActiveIdTrigger',
	audioPlaylistsByPlaylistIdNextTrigger = 'audioPlaylistsByPlaylistIdNextTrigger',
	audioPlaylistsByPlaylistIdPreviousTrigger = 'audioPlaylistsByPlaylistIdPreviousTrigger',
	// Trigger
	triggerMediaNext = 'triggerMediaNext',
	triggerMediaPrevious = 'triggerMediaPrevious',
	triggerAudioNext = 'triggeAudiorNext',
	triggerAudioPrevious = 'triggerAudioPrevious',
	triggerNext = 'triggerNext',
	triggerPrevious = 'triggerPrevious',

}
