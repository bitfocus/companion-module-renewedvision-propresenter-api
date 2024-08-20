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
