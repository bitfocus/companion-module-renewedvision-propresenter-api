import { CompanionActionDefinition, CompanionActionDefinitions } from '@companion-module/base'
import { DeviceConfig, InstanceBaseExt, JSONValue } from './config'

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
			options: [
				{
					type: 'textinput',
					label: 'Index',
					id: 'index',
					default: '0',
					useVariables: true,
				},
			],
			callback: async (action) => {
				const index = await instance.parseVariablesInString(action.options.index as string)
				instance.ProPresenter.announcementActiveIndexTrigger(index)
			},
		},
		[ActionId.announcementActiveTimelineOperation]: {
			name: 'Announcement Active Timeline Operation',
			options: [
				{
					type: 'dropdown',
					label: 'operation',
					id: 'operation',
					choices: [
						{ label: 'play', id: 'play' },
						{ label: 'pause', id: 'pause' },
						{ label: 'rewind', id: 'rewind' },
					],
					default: 'play',
				},
			],
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
			options: [
				{
					type: 'textinput',
					label: 'Playlist Id',
					id: 'id',
					default: '',
					useVariables: true,
				},
			],
			callback: async (action) => {
				const id = await instance.parseVariablesInString(action.options.id as string)
				instance.ProPresenter.audioGetPlaylistsByPlaylistId(id).then((result: JSONValue) => {
					instance.processIncommingData(result)
				})
			},
		},
		[ActionId.audioGetPlaylistsByPlaylistIdUpdates]: {
			name: 'Request updates for specific Playlists',
			options: [
				{
					type: 'textinput',
					label: 'Playlist Id',
					id: 'id',
					default: '',
					useVariables: true,
				},
			],
			callback: async (action) => {
				const id = await instance.parseVariablesInString(action.options.id as string)
				instance.ProPresenter.audioGetPlaylistsByPlaylistIdUpdates(id).then((result: JSONValue) => {
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
}
