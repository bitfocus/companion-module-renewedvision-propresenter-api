const ActionId = require('./actions')
const { combineRgb } = require('@companion-module/base')
module.exports = (instance) => {
	console.log('From presets',ActionId)
	presets = {
		[ActionId.version]: {
			name: 'Version',
			category: 'Status',
			type: 'button',
			style: {
				text: ``,
				size: 'auto',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.version,
							options: {}
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		},
		[ActionId.announcementGetActive]: {
			name: 'Announcement Active',
			category: 'Announcement',
			type: 'button',
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
			name: 'Announcement Slide Index',
			category: 'Announcement',
			type: 'button',
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
			steps: [
				{
					down: [
						{
							actionId: ActionId.announcementPreviousTrigge,
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
			category: 'Announcement',
			type: 'button',
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
			name: 'Announcement Active Timeline Operation',
		},
		[ActionId.announcementGetActiveTimelineOperation]: {
			category: 'Announcement',
			type: 'button',
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
			name: 'Announcement Active Timeline Operation',
		},
		[ActionId.audioGetPlaylists]: {
			name: 'Audio Playlists',
			category: 'Audio',
			type: 'button',
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

	instance.setPresetDefinitions(presets)
}