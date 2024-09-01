import { DeviceConfig, InstanceBaseExt } from "./config"

export function GetVariableDefinitions() {
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

	return variables
}

export function SetVariableValues(instance: InstanceBaseExt<DeviceConfig>) {
	instance.setVariableValues({
		name: undefined,
		platform: undefined,
		os_version: undefined,
		version: undefined,
		presentation_slide_index: undefined,
		active_presentation_name: undefined,
		active_presentation_UUID: undefined,
	})
}