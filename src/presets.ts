import { combineRgb, CompanionPresetDefinitions } from '@companion-module/base'
import { ActionId } from './actions'

export function GetPresets(): CompanionPresetDefinitions {
	const presets: CompanionPresetDefinitions = {
		[ActionId.version]: {
			name: 'Version',
			category: 'Status',
			type: 'button',
			style: {
				text: `Version`,
				size: 'auto',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.version,
							options: {},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		},
		[ActionId.announcementGetActive]: {
			name: 'Get Active Announcement',
			category: 'Announcement',
			type: 'button',
			style: {
				text: `Get Active Announcement`,
				size: 'auto',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.announcementGetActive,
							options: {},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		},
		[ActionId.announcementGetSlideIndex]: {
			name: 'Get Slide Index Announcement',
			category: 'Announcement',
			type: 'button',
			style: {
				text: `Get Slide Index Announcement`,
				size: 'auto',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.announcementGetSlideIndex,
							options: {},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		},
		[ActionId.announcementActiveFocus]: {
			name: 'Announcement Active Focus',
			category: 'Announcement',
			type: 'button',
			style: {
				text: `Announcement Active Focus`,
				size: 'auto',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.announcementActiveFocus,
							options: {},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		},
		[ActionId.announcementTrigger]: {
			name: 'Announcement Trigger',
			category: 'Announcement',
			type: 'button',
			style: {
				text: `Announcement Trigger`,
				size: 'auto',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.announcementTrigger,
							options: {},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		},
		[ActionId.announcementNextTrigger]: {
			name: 'Announcement Next Trigger',
			category: 'Announcement',
			type: 'button',
			style: {
				text: `Announcement Next Trigger`,
				size: 'auto',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.announcementNextTrigger,
							options: {},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		},
		[ActionId.announcementPreviousTrigger]: {
			name: 'Announcement Previous Trigger',
			category: 'Announcement',
			type: 'button',
			style: {
				text: `Announcement Previous Trigger`,
				size: 'auto',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.announcementPreviousTrigger,
							options: {},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		},
		[ActionId.announcementActiveIndexTrigger]: {
			name: 'Announcement Active Index Trigger',
			category: 'Announcement',
			type: 'button',
			style: {
				text: `Announcement Active Index Trigger`,
				size: 'auto',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.announcementActiveIndexTrigger,
							options: {},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		},
		[ActionId.announcementActiveTimelineOperation]: {
			name: 'Announcement Active Timeline Operation',
			category: 'Announcement',
			type: 'button',
			style: {
				text: `Announcement Active Timeline Operation`,
				size: 'auto',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.announcementActiveTimelineOperation,
							options: {},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		},
		[ActionId.announcementGetActiveTimelineOperation]: {
			name: 'Announcement Get Active Timeline Operation',
			category: 'Announcement',
			type: 'button',
			style: {
				text: `Announcement Get Active Timeline Operation`,
				size: 'auto',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.announcementGetActiveTimelineOperation,
							options: {},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		},
		[ActionId.audioGetPlaylists]: {
			name: 'Audio Playlists',
			category: 'Audio',
			type: 'button',
			style: {
				text: `Audio Playlists`,
				size: 'auto',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.audioGetPlaylists,
							options: {},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		},
		[ActionId.audioGetPlaylistsByPlaylistId]: {
			name: 'Audio items in specific Playlists',
			category: 'Audio',
			type: 'button',
			style: {
				text: `Audio items in specific Playlists`,
				size: 'auto',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.audioGetPlaylistsByPlaylistId,
							options: {},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		},
		[ActionId.audioGetPlaylistsByPlaylistIdUpdates]: {
			name: 'Request updates for specific Playlists',
			category: 'Audio',
			type: 'button',
			style: {
				text: `Request updates for specific Playlists`,
				size: 'auto',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.audioGetPlaylistsByPlaylistIdUpdates,
							options: {},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		},
		[ActionId.audioGetPlaylistsFocused]: {
			name: 'Current focused audio playlist',
			category: 'Audio',
			type: 'button',
			style: {
				text: `Current focused audio playlist`,
				size: 'auto',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.audioGetPlaylistsFocused,
							options: {},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		},
		[ActionId.audioGetPlaylistsActive]: {
			name: 'Current active audio playlist',
			category: 'Audio',
			type: 'button',
			style: {
				text: `Current active audio playlist`,
				size: 'auto',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.audioGetPlaylistsActive,
							options: {},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		},
		[ActionId.audioPlaylistsNextFocus]: {
			name: 'Focus next audio playlist',
			category: 'Audio',
			type: 'button',
			style: {
				text: `Focus next audio playlist`,
				size: 'auto',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.audioPlaylistsNextFocus,
							options: {},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		},
		[ActionId.audioPlaylistsPreviousFocus]: {
			name: 'Focus previous audio playlist',
			category: 'Audio',
			type: 'button',
			style: {
				text: `Focus previous audio playlist`,
				size: 'auto',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.audioPlaylistsPreviousFocus,
							options: {},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		},
	}
	return presets
}
