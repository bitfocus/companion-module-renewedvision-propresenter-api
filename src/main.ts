import { InstanceBase, runEntrypoint, InstanceStatus } from '@companion-module/base'
import { GetActions } from './actions'
import { DeviceConfig, GetConfigFields } from './config'
import { GetPresets } from './presets'
import { ProPresenter } from 'renewedvision-propresenter'
import { GetVariableDefinitions } from './variables'

class ModuleInstance extends InstanceBase<DeviceConfig> {
	public config: DeviceConfig = {
		ProPresenter: null,
		host: '',
		port: 1025,
	}
	ProPresenter: any

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
		this.initActions()
		this.initPresets()
		this.initVariables()
	}

	// Return config fields for web config
	getConfigFields() {
		return GetConfigFields()
	}

	initActions() {
		this.setActionDefinitions(GetActions(this))
	}

	initPresets() {
		this.setPresetDefinitions(GetPresets())
	}

	initVariables() {
		this.setVariableDefinitions(GetVariableDefinitions())
		this.setVariableValues({
			name: undefined,
			platform: undefined,
			os_version: undefined,
			version: undefined,
		})
	}

	processIncommingData(msg: any) {
		this.log('debug', `${JSON.stringify(msg)}`)
		if (msg && msg.command && msg.data) {
			const jsonData = msg.data
			this.updateStatus(InstanceStatus.Ok)
			switch (msg.command) {
				case '/version':
					this.setVariableValues({
						name: jsonData.name,
						platform: jsonData.platform,
						os_version: jsonData.os_version,
						version: jsonData.host_description,
					})
					break

				default:
					this.log('debug', 'missed an response handler for: ' + msg.command)
					break
			}
		} else {
			this.log('error', `Getting this: ${JSON.stringify(msg)}`)
		}
	}
}

runEntrypoint(ModuleInstance, [])
