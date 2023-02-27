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

	return variables
}

export function SetVariableValues(instance: InstanceBaseExt<DeviceConfig>) {
	instance.setVariableValues({
		name: undefined,
		platform: undefined,
		os_version: undefined,
		version: undefined,
	})
}