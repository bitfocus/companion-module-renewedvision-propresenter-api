module.exports = (instance) => {
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

	instance.setVariableDefinitions(variables)
	instance.setVariableValues({
		name: undefined,
		platform: undefined,
		os_version: undefined,
		version: undefined,
	})
}
