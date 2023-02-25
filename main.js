const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))
const { InstanceBase, Regex, runEntrypoint, InstanceStatus } = require('@companion-module/base')
const UpgradeScripts = require('./upgrades')
const UpdateActions = require('./actions')
const InitVariables = require('./variables')
const ProPresenter = require('renewedvision-propresenter')

class ModuleInstance extends InstanceBase {
	constructor(internal) {
		super(internal)
	}

	async init(config) {
		this.config = config
		this.ProPresenter = new ProPresenter(this.config.host, this.config.port)
		await this.configUpdated(config)
		this.ProPresenter.version().then((result) => {
			this.processIncommingData(result)
		})
	}
	// When module gets deleted
	async destroy() {
		this.log('debug', 'destroy')
	}

	async configUpdated(config) {
		this.log('debug', JSON.stringify(config))
		this.config = config
		this.updateStatus(InstanceStatus.Connecting)
		this.updateActions() // export actions
		InitVariables(this)
	}

	// Return config fields for web config
	getConfigFields() {
		return [
			{
				type: 'textinput',
				id: 'host',
				label: 'Target ProPresenter Instance',
				width: 8,
			},
			{
				type: 'textinput',
				id: 'port',
				label: 'Target Port',
				width: 4,
				default: 1025,
				regex: Regex.PORT,
			},
		]
	}

	updateActions() {
		UpdateActions(this)
	}

	processIncommingData(jsonData) {
		this.log('debug', `${JSON.stringify(jsonData)}`)
		if(jsonData && jsonData.success) {
			this.updateStatus(InstanceStatus.Ok)
			switch (jsonData.success) {
				case '/version':
					this.setVariableValues({
						name: jsonData.name,
						platform: jsonData.platform,
						os_version: jsonData.os_version,
						version: jsonData.host_description,
					})
					break

				default:
					this.log('debug', 'missed an response handler for: ' + jsonData.success)
					break
			}
		} else {
			this.log('error',`Getting this: ${JSON.stringify(jsonData)}`)
		}
	}
}

runEntrypoint(ModuleInstance, UpgradeScripts)
