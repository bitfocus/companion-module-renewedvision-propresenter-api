import { CompanionVariableValues } from "@companion-module/base"
import { DeviceConfig, InstanceBaseExt } from "./config"
import { LocalStateCache } from './utils'

let variableValuesCache: CompanionVariableValues

export function GetVariableDefinitions(localStateCache: LocalStateCache) {
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
		name: 'Presentation Slide Index',
		variableId: 'presentation_slide_index',
	})
	variables.push({
		name: 'Active Presentation Name',
		variableId: 'active_presentation_name',
	})
	variables.push({
		name: 'Active Presentation UUID',
		variableId: 'active_presentation_UUID',
	})
	variables.push({
		name: 'Active Look Name',
		variableId: 'active_look_name',
	})
	variables.push({
		name: 'Active Look UUID',
		variableId: 'active_look_UUID',
	})
	variables.push({
		name: 'Timers Current JSON',
		variableId: 'timers_current_JSON',
	})
	// Get Timer variable definitions from module cache of timers state
	for (const timer of localStateCache.timers) {
		variables.push({
			name: timer.name,
			variableId: timer.varid,
		})
	}

	return variables
}

/**
 * This is an replacement function for ModuleInstance.setVariableValues() that must be used in order to capture and cache all variable values (which are later used to reset variable values when we add new vars by re-defining all vars)
 * @param instance 
 * @param values 
 */
export function SetVariableValues(instance: InstanceBaseExt<DeviceConfig>, values: CompanionVariableValues) {
	// Cache values that were set so they can be used to reset after setting defs again later
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