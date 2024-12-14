import { CompanionVariableValues } from "@companion-module/base"
import { DeviceConfig, InstanceBaseExt } from "./config"
import { ProPresenterStateStore } from './utils'

let variableValuesCache: CompanionVariableValues // Local cache of variable values - used in ResetVariablesFromLocalCache() to return values to variables each time they are re-created.

export function GetVariableDefinitions(propresenterStateStore: ProPresenterStateStore) {
	const variables = []

	variables.push({
		name: 'Machine',
		variableId: 'name',
	})
	variables.push({
		name: 'Platform',
		variableId: 'platform',
	})
	variables.push({
		name: 'OS Version',
		variableId: 'os_version',
	})
	variables.push({
		name: 'Version',
		variableId: 'version',
	})
	variables.push({
		name: 'Time Since Last Status Update',
		variableId: 'time_since_last_status_update',
	})
	variables.push({
		name: 'Active Presentation Slide Index',
		variableId: 'active_presentation_slide_index',
	})
	variables.push({
		name: 'Active Presentation Slides Count',
		variableId: 'active_presentation_slides_count',
	})
	variables.push({
		name: 'Active Presentation Name',
		variableId: 'active_presentation_name',
	})
	variables.push({
		name: 'Active Presentation UUID',
		variableId: 'active_presentation_uuid',
	})
	variables.push({
		name: 'Active Announcement Slide Index',
		variableId: 'active_announcement_slide_index',
	})
	variables.push({
		name: 'Active Announcement Name',
		variableId: 'active_announcement_name',
	})
	variables.push({
		name: 'Active Announcement UUID',
		variableId: 'active_announcement_uuid',
	})
	variables.push({
		name: 'Active Presentation Playlist Name',
		variableId: 'active_presentation_playlist_name',
	})
	variables.push({
		name: 'Active Presentation Playlist Index',
		variableId: 'active_presentation_playlist_index',
	})
	variables.push({
		name: 'Active Presentation Playlist UUID',
		variableId: 'active_presentation_playlist_uuid',
	})
	variables.push({
		name: 'Active Presentation PlaylistItem Name',
		variableId: 'active_presentation_playlist_item_name',
	})
	variables.push({
		name: 'Active Presentation PlaylistItem Index',
		variableId: 'active_presentation_playlist_item_index',
	})
	variables.push({
		name: 'Active Presentation PlaylistItem UUID',
		variableId: 'active_presentation_playlist_item_uuid',
	})
	variables.push({
		name: 'Active Announcement Playlist Name',
		variableId: 'active_announcement_playlist_name',
	})
	variables.push({
		name: 'Active Announcement Playlist Index',
		variableId: 'active_announcement_playlist_index',
	})
	variables.push({
		name: 'Active Announcement Playlist UUID',
		variableId: 'active_announcement_playlist_uuid',
	})
	variables.push({
		name: 'Active Announcement PlaylistItem Name',
		variableId: 'active_announcement_playlist_item_name',
	})
	variables.push({
		name: 'Active Announcement PlaylistItem Index',
		variableId: 'active_announcement_playlist_item_index',
	})
	variables.push({
		name: 'Active Announcement PlaylistItem UUID',
		variableId: 'active_announcement_playlist_item_uuid',
	})
	variables.push({
		name: 'Active Look Name',
		variableId: 'active_look_name',
	})
	variables.push({
		name: 'Focused Presentation Index',
		variableId: 'focused_presentation_index',
	})
	variables.push({
		name: 'Focused Presentation Name',
		variableId: 'focused_presentation_name',
	})
	variables.push({
		name: 'Focused Presentation UUID',
		variableId: 'focused_presentation_uuid',
	})
	variables.push({
		name: 'Active Look UUID',
		variableId: 'active_look_uuid',
	})
	variables.push({
		name: 'Audience Screen Active',
		variableId: 'audience_screen_active',
	})
	variables.push({
		name: 'Stage Screen Active',
		variableId: 'stage_screen_active',
	})
	variables.push({
		name: 'Stage Message',
		variableId: 'stage_message',
	})
	variables.push({
		name: 'Video Countdown Timer',
		variableId: 'video_countdown_timer',
	})
	variables.push({
		name: 'Timers Current JSON',
		variableId: 'timers_current_json',
	})
	variables.push({
		name: 'Active Presentation Playlist JSON',
		variableId: 'active_presentation_playlist_json',
	})
	variables.push({
		name: 'Transport Presentation Layer IsPlaying',
		variableId: 'transport_presentation_layer_isplaying',
	})
	variables.push({
		name: 'Transport Presentation Layer Media Name',
		variableId: 'transport_presentation_layer_media_name',
	})
	variables.push({
		name: 'Transport Presentation Layer Media Duration',
		variableId: 'transport_presentation_layer_media_duration',
	})
	variables.push({
		name: 'Transport Audio Layer IsPlaying',
		variableId: 'transport_audio_layer_isplaying',
	})
	variables.push({
		name: 'Transport Audio Layer Media Name',
		variableId: 'transport_audio_layer_media_name',
	})
	variables.push({
		name: 'Transport Audio Time',
		variableId: 'transport_audio_time',
	})
	variables.push({
		name: 'Audio Countdown Timer',
		variableId: 'audio_countdown_timer',
	})
	variables.push({
		name: 'Transport Audio Layer Media Duration',
		variableId: 'transport_audio_layer_media_duration',
	})
	variables.push({
		name: 'Transport Announcement IsPlaying',
		variableId: 'transport_announcement_layer_isplaying',
	})
	variables.push({
		name: 'Transport Announcement Layer Media Name',
		variableId: 'transport_announcement_layer_media_name',
	})
	variables.push({
		name: 'Capture Status',
		variableId: 'capture_status',
	})
	variables.push(
		{
			name: 'Capture Time',
			variableId: 'capture_time',
		},
		{
			name: 'Capture Time (Seconds)',
			variableId: 'capture_time_seconds',
		},
		{
			name: 'Capture Time (Custom Format)',
			variableId: 'capture_time_custom',
		},
	)
	// Get Timer variable definitions from module cache of timers state
	for (const proTimer of propresenterStateStore.proTimers) {
		variables.push(
		{
			name: proTimer.id.name,
			variableId: proTimer.varid,
		},
		{
			name: proTimer.id.name + ' (Seconds)',
			variableId: proTimer.varid + '_seconds',
		},
		{
			name: proTimer.id.name + ' (Custom Format)',
			variableId: proTimer.varid + '_custom',
		},
	)
	}

	//StageScreenWithLayout = {uuid: string, name: string, varid: string, index: number, layout_uuid: string, layout_name: string, layout_index: number}
	for (const stageScreenWithLayout of propresenterStateStore.stageScreensWithLayout) {
		variables.push({
			name: stageScreenWithLayout.id.name,
			variableId: stageScreenWithLayout.varid
		})
	}

	return variables
}

/**
 * This is an override function for ModuleInstance.setVariableValues() that must be used in order to capture and cache all variable values (which are later used to reset variable values when we add new vars by re-defining all vars)
 * @param instance 
 * @param values 
 */
export function SetVariableValues(instance: InstanceBaseExt<DeviceConfig>, values: CompanionVariableValues) {
	// Cache values that were set so they can be used as an easy method to reset values after setting definitions again later
	variableValuesCache = {...variableValuesCache, ...values}

	// Set variable values
	instance.setVariableValues(values)
}

/**
 * Reset old value for all variables using last known values in local cache
 * @param instance 
 */
export function ResetVariablesFromLocalCache(instance: InstanceBaseExt<DeviceConfig>) {
	// Ensure we don't ever pass empty list of variable values - as this function can be called before any values are added to the cache during startup
	if (variableValuesCache) {
		instance.setVariableValues(variableValuesCache)
	}
}