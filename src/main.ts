import { InstanceBase, runEntrypoint, InstanceStatus } from '@companion-module/base'
import { GetActions } from './actions'
import { DeviceConfig, GetConfigFields } from './config'
import { GetPresets } from './presets'
const UpgradeScripts = require('./upgrades')
const InitVariables = require('./variables')
const ProPresenter = require('renewedvision-propresenter')

// type JSONValue =
//     | string
//     | number
//     | boolean
//     | { [x: string]: JSONValue }
//     | Array<JSONValue>;

class ModuleInstance extends InstanceBase<DeviceConfig> {
	public config: DeviceConfig = {
		ProPresenter: null,
		host: '',
		port: 1025,
	}
	private ProPresenter: any

	constructor(internal: unknown) {
		super(internal)
	}

	public async init(config: DeviceConfig): Promise<void> {
		this.config = config
		this.ProPresenter = new ProPresenter(this.config.host, this.config.port)
		await this.configUpdated(config)
		this.ProPresenter.version().then((result: any) => {
			this.processIncommingData(result)
		})
	}
	// When module gets deleted
	async destroy() {
		this.log('debug', 'destroy')
	}

	async configUpdated(config: DeviceConfig) {
		this.log('debug', JSON.stringify(config))
		this.config = config
		this.updateStatus(InstanceStatus.Connecting)
		this.updateActions()
		this.updatePresets()
		InitVariables(this)
	}

	// Return config fields for web config
	getConfigFields() {
		return GetConfigFields()
	}

	updateActions() {
		this.setActionDefinitions(GetActions(this))
	}

	updatePresets() {
		this.setPresetDefinitions(GetPresets())
	}

	processIncommingData(jsonData: any) {
		this.log('debug', `${JSON.stringify(jsonData)}`)
		if (jsonData && jsonData.success) {
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
			this.log('error', `Getting this: ${JSON.stringify(jsonData)}`)
		}
	}
}

runEntrypoint(ModuleInstance, UpgradeScripts)
