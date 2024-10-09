import { combineRgb, CompanionPresetDefinitions } from '@companion-module/base'
import { ActionId } from './actions'

export function GetPresets(): CompanionPresetDefinitions {
	const presets: CompanionPresetDefinitions = {
		[ActionId.activeAnnouncementCommand]: {
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
							actionId: ActionId.activeAnnouncementCommand,
							options: {},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		},
		/*
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
		[ActionId.announcementActiveNextTrigger]: {
			name: 'Announcement Next Trigger',
			category: 'Announcement',
			type: 'button',
			style: {
				text: `Announcement Next`,
				size: 'auto',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.announcementActiveNextTrigger,
							options: {},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		},
		[ActionId.announcementActivePreviousTrigger]: {
			name: 'Announcement Previous Trigger',
			category: 'Announcement',
			type: 'button',
			style: {
				text: `Announcement Previous`,
				size: 'auto',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(0, 0, 0),
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.announcementActivePreviousTrigger,
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
				text: `Announcement Active Index`,
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
		*/
	}
	return presets
}
