import { CompanionActionDefinition, CompanionActionDefinitions } from '@companion-module/base'
import { DeviceConfig, InstanceBaseExt, JSONValue } from './config'
import { options } from './utils'

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
		[ActionId.announcementGetActive]: {
			name: 'Announcement Active',
			options: [],
			callback: () => {
				instance.ProPresenter.announcementGetActive().then((result: JSONValue) => {
					instance.processIncommingData(result)
				})
			},
		},
		[ActionId.announcementGetSlideIndex]: {
			name: 'Announcement Slide Index',
			options: [],
			callback: () => {
				instance.ProPresenter.announcementGetSlideIndex().then((result: JSONValue) => {
					instance.processIncommingData(result)
				})
			},
		},
		[ActionId.announcementActiveFocus]: {
			name: 'Announcement Active Focus',
			options: [],
			callback: () => {
				instance.ProPresenter.announcementActiveFocus()
			},
		},
		[ActionId.announcementTrigger]: {
			name: 'Announcement Trigger',
			options: [],
			callback: () => {
				instance.ProPresenter.announcementTrigger()
			},
		},
		[ActionId.announcementNextTrigger]: {
			name: 'Announcement Next Trigger',
			options: [],
			callback: () => {
				instance.ProPresenter.announcementNextTrigger()
			},
		},
		[ActionId.announcementPreviousTrigger]: {
			name: 'Announcement Previous Trigger',
			options: [],
			callback: () => {
				instance.ProPresenter.announcementPreviousTrigger()
			},
		},
		[ActionId.announcementActiveIndexTrigger]: {
			name: 'Announcement Active Index Trigger',
			options: [options.index],
			callback: async (action) => {
				const index = await instance.parseVariablesInString(action.options.index as string)
				instance.ProPresenter.announcementActiveIndexTrigger(index)
			},
		},
		[ActionId.announcementActiveTimelineOperation]: {
			name: 'Announcement Active Timeline Operation',
			options: [options.timeline_operation],
			callback: async (action) => {
				const operation = await instance.parseVariablesInString(action.options.operation as string)
				instance.ProPresenter.announcementActiveTimelineOperation(operation)
			},
		},
		[ActionId.announcementGetActiveTimelineOperation]: {
			name: 'Announcement Active Timeline Operation',
			options: [],
			callback: () => {
				instance.ProPresenter.announcementGetActiveTimelineOperation().then((result: JSONValue) => {
					instance.processIncommingData(result)
				})
			},
		},
		[ActionId.audioGetPlaylists]: {
			name: 'Audio Playlists',
			options: [],
			callback: () => {
				instance.ProPresenter.audioGetPlaylists().then((result: JSONValue) => {
					instance.processIncommingData(result)
				})
			},
		},
		[ActionId.audioGetPlaylistsByPlaylistId]: {
			name: 'Audio items in specific Playlists',
			options: [options.playlist_id],
			callback: async (action) => {
				const playlist_id = await instance.parseVariablesInString(action.options.playlist_id as string)
				instance.ProPresenter.audioGetPlaylistsByPlaylistId(playlist_id).then((result: JSONValue) => {
					instance.processIncommingData(result)
				})
			},
		},
		[ActionId.audioGetPlaylistsByPlaylistIdUpdates]: {
			name: 'Request updates for specific Playlists',
			options: [options.playlist_id],
			callback: async (action) => {
				const playlist_id = await instance.parseVariablesInString(action.options.playlist_id as string)
				instance.ProPresenter.audioGetPlaylistsByPlaylistIdUpdates(playlist_id).then((result: JSONValue) => {
					instance.processIncommingData(result)
				})
			},
		},
		[ActionId.audioGetPlaylistsFocused]: {
			name: 'Current focused audio playlist',
			options: [],
			callback: () => {
				instance.ProPresenter.audioGetPlaylistsFocused().then((result: JSONValue) => {
					instance.processIncommingData(result)
				})
			},
		},
		[ActionId.audioGetPlaylistsActive]: {
			name: 'Current active audio playlist',
			options: [],
			callback: () => {
				instance.ProPresenter.audioGetPlaylistsActive().then((result: JSONValue) => {
					instance.processIncommingData(result)
				})
			},
		},
		[ActionId.audioPlaylistsNextFocus]: {
			name: 'Focus next audio playlist',
			options: [],
			callback: () => {
				instance.ProPresenter.audioPlaylistsNextFocus()
			},
		},
		[ActionId.audioPlaylistsPreviousFocus]: {
			name: 'Focus previous audio playlist',
			options: [],
			callback: () => {
				instance.ProPresenter.audioPlaylistsPreviousFocus()
			},
		},
		[ActionId.audioPlaylistsActiveFocus]: {
			name: 'Focuses the active audio playlist',
			options: [],
			callback: () => {
				instance.ProPresenter.audioPlaylistsActiveFocus()
			},
		},
		[ActionId.audioPlaylistsByPlaylistIdFocus]: {
			name: 'Focuses the specified audio playlist',
			options: [options.playlist_id],
			callback: async (action) => {
				const playlist_id = await instance.parseVariablesInString(action.options.playlist_id as string)
				instance.ProPresenter.audioPlaylistsByPlaylistIdFocus(playlist_id)
			},
		},
		[ActionId.audioPlaylistsFocusedTrigger]: {
			name: 'Triggers the focused audio playlist',
			options: [],
			callback: () => {
				instance.ProPresenter.audioPlaylistsFocusedTrigger()
			},
		},
		[ActionId.audioPlaylistsFocusedNextTrigger]: {
			name: 'Triggers the next item in the focused audio playlist.',
			options: [],
			callback: () => {
				instance.ProPresenter.audioPlaylistsFocusedNextTrigger()
			},
		},
		[ActionId.audioPlaylistsFocusedPreviousTrigger]: {
			name: 'Triggers the previous item in the focused audio playlist',
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
			name: 'Triggers the next item in the active audio playlist',
			options: [],
			callback: () => {
				instance.ProPresenter.audioPlaylistsActiveNextTrigger()
			},
		},
		[ActionId.audioPlaylistsActivePreviousTrigger]: {
			name: 'Triggers the previous item in the active audio playlist',
			options: [],
			callback: () => {
				instance.ProPresenter.audioPlaylistsActivedPreviousTrigger()
			},
		},
		[ActionId.audioPlaylistsActiveIdTrigger]: {
			name: 'Triggers the specified item in the active audio playlist',
			options: [options.id],
			callback: async (action) => {
				const id = await instance.parseVariablesInString(action.options.id as string)
				instance.ProPresenter.audioPlaylistsActiveIdTrigger(id)
			},
		},
		[ActionId.audioPlaylistsByPlaylistIdNextTrigger]: {
			name: 'Triggers the specified item in the active audio playlist',
			options: [options.playlist_id],
			callback: async (action) => {
				const playlist_id = await instance.parseVariablesInString(action.options.playlist_id as string)
				instance.ProPresenter.audioPlaylistsByPlaylistIdNextTrigger(playlist_id)
			},
		},
		[ActionId.audioPlaylistsByPlaylistIdPreviousTrigger]: {
			name: 'Triggers the specified item in the active audio playlist',
			options: [options.playlist_id],
			callback: async (action) => {
				const playlist_id = await instance.parseVariablesInString(action.options.playlist_id as string)
				instance.ProPresenter.audioPlaylistsByPlaylistIdPreviousTrigger(playlist_id)
			},
		},
	}
	return actions
}

export enum ActionId {
	version = 'version',
	announcementGetActive = 'announcementActive',
	announcementGetSlideIndex = 'announcementSlideIndex',
	announcementActiveFocus = 'announcementActiveFocus',
	announcementTrigger = 'announcementTrigger',
	announcementNextTrigger = 'announcementNextTrigger',
	announcementPreviousTrigger = 'announcementPreviousTrigger',
	announcementActiveIndexTrigger = 'announcementActiveIndexTrigger',
	announcementActiveTimelineOperation = 'announcementActiveTimelineOperation',
	announcementGetActiveTimelineOperation = 'announcementGetActiveTimelineOperation',
	audioGetPlaylists = 'audioPlaylists',
	audioGetPlaylistsByPlaylistId = 'audioPlaylistsByPlaylistId',
	audioGetPlaylistsByPlaylistIdUpdates = 'audioPlaylistsByPlaylistIdUpdates',
	audioGetPlaylistsFocused = 'audioPlaylistsFocused',
	audioGetPlaylistsActive = 'audioPlaylistsActive',
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
}
