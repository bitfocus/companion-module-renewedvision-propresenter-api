import { InstanceBase, runEntrypoint, InstanceStatus } from '@companion-module/base'
import { GetActions } from './actions'
import { DeviceConfig, GetConfigFields } from './config'
import { GetPresets } from './presets'
import { ProPresenter, StatusJSON } from 'renewedvision-propresenter'
import { GetVariableDefinitions } from './variables'


class ModuleInstance extends InstanceBase<DeviceConfig> {
	constructor(internal: unknown) {
		super(internal)
	}

	public config: DeviceConfig = {
		ProPresenter: null,
		host: '',
		port: 1025,
		//password: '',
	}
	public ProPresenter: any
	//private socket: WebSocket | undefined

	public async init(config: DeviceConfig): Promise<void> {
		await this.configUpdated(config)
		this.updateStatus(InstanceStatus.Connecting)
	}
	// When module gets deleted
	public async destroy() {
		this.log('debug', 'destroy')
	}

	public async configUpdated(config: DeviceConfig) {
		this.log('info', 'Module Config: ' + JSON.stringify(config))
		this.config = config
		if (this.config.host === '' || this.config.host === undefined) {
			this.log('info', 'Please fill in ip address or hit save')
		} else {
			this.ProPresenter = new ProPresenter(this.config.host, this.config.port)
			this.ProPresenter.registerCallbacksForStatusUpdates({"status/slide":this.statusSlideUpdate,"timers/current":this.timersCurrentUpdate,"presentation/slide_index":this.presentationSlideIndexUpdate},2000)
			this.ProPresenter.version().then((result: any) => {
				this.processIncommingData(result)
			})
			
			this.initActions()
			this.initPresets()
			this.initVariables()
		}
	}

	// Status callbacks: Use arrow notation to create property functions that capture *this* instance of ModuleInstance class
	statusSlideUpdate = (statusJSONObject: StatusJSON) => {
		this.log('debug',JSON.stringify(statusJSONObject))
	}

	timersCurrentUpdate = (statusJSONObject: StatusJSON) => {
		this.log('debug',JSON.stringify(statusJSONObject))
	}

	presentationSlideIndexUpdate = (statusJSONObject: StatusJSON) => {
		this.log('debug',JSON.stringify(statusJSONObject))
		if (statusJSONObject.data.presentation_index) { // ProPresenter can return a null presentation_index when no presentation is active - nothing to update if this happens
			this.setVariableValues({
				presentation_slide_index: statusJSONObject.data.presentation_index.index,
				active_presentation_name: statusJSONObject.data.presentation_index.presentation_id.name,
				active_presentation_UUID: statusJSONObject.data.presentation_index.presentation_id.uuid
			})
		}
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
			presentation_slide_index: undefined,
			active_presentation_name: undefined,
		})
	}

	// processWSIncommingData(msg: any) {
	// 	this.log('debug', `WebSocket: ${msg}`)
	// }

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

	// /**
	//  * Attempts to open a websocket connection with ProPresenter.
	//  */
	// connectToProPresenterWebsocket() {
	// 	// Check for undefined host or port. Also make sure port is [1-65535] and host is least 1 char long.
	// 	if (
	// 		!this.config.host ||
	// 		this.config.host.length < 1 ||
	// 		!this.config.port ||
	// 		this.config.port < 1 ||
	// 		this.config.port > 65535 ||
	// 		!this.config.password ||
	// 		this.config.password === ''
	// 	) {
	// 		// Do not try to connect with invalid host or port
	// 		return
	// 	}

	// 	// Disconnect if already connected
	// 	this.disconnectFromProPresenter()

	// 	// Connect to remote control websocket of ProPresenter
	// 	this.socket = new WebSocket('ws://' + this.config.host + ':' + this.config.port + '/remote')

	// 	this.socket.on('open', () => {
	// 		this.log('info', 'Opened websocket to ProPresenter remote control: ' + this.config.host + ':' + this.config.port)
	// 		if (this.socket) {
	// 			this.socket.send(
	// 				JSON.stringify({
	// 					password: this.config.password,
	// 					protocol: '701', // This will connect to Pro6 and Pro7 (the version check is happy with higher versions - but versions too low will be refused)
	// 					action: 'authenticate',
	// 				})
	// 			)
	// 		}
	// 	})

	// 	this.socket.on('error', (err) => {
	// 		this.log('debug', 'Socket error: ' + err.message)
	// 		this.updateStatus(InstanceStatus.UnknownError, err.message)
	// 	})

	// 	this.socket.on('connect', () => {
	// 		this.log('debug', 'Connected to ProPresenter remote control')
	// 	})

	// 	this.socket.on('close', () => {
	// 		// Event is also triggered when a reconnect attempt fails.
	// 		// Reset the current state then abort; don't flood logs with disconnected notices.
	// 		this.log('debug', 'socket closed')
	// 		this.updateStatus(InstanceStatus.Disconnected, 'Not connected to ProPresenter')
	// 	})

	// 	this.socket.on('message', (message) => {
	// 		// Handle the message received from ProPresenter
	// 		this.processWSIncommingData(message)
	// 	})
	// }

	// /**
	//  * Disconnect the websocket from ProPresenter, if connected.
	//  */
	// disconnectFromProPresenter() {
	// 	if (this.socket !== undefined) {
	// 		// Disconnect if already connected
	// 		if (this.socket.readyState !== 3 /*CLOSED*/) {
	// 			this.socket.terminate()
	// 		}
	// 		delete this.socket
	// 	}
	// }
}

runEntrypoint(ModuleInstance, [])
