import { InstanceBase, runEntrypoint, InstanceStatus } from '@companion-module/base'
import { GetActions } from './actions'
import { DeviceConfig, GetConfigFields } from './config'
import { GetPresets } from './presets'
import { ProPresenter, StatusUpdateJSON, RequestAndResponseJSONValue } from 'renewedvision-propresenter'
import { GetVariableDefinitions } from './variables'


class ModuleInstance extends InstanceBase<DeviceConfig> {
	constructor(internal: unknown) {
		super(internal)
	}

	public config: DeviceConfig = {
		ProPresenter: null,
		host: '',
		port: 1025,
		timeout: 1000,
	}
	public ProPresenter: any
	public looksChoices: [{id: string, label: string}] | undefined
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
			this.ProPresenter = new ProPresenter(this.config.host, this.config.port, this.config.timeout)
			this.ProPresenter.registerCallbacksForStatusUpdates({"status/slide":this.statusSlideUpdate,"timers/current":this.timersCurrentUpdate,"presentation/slide_index":this.presentationSlideIndexUpdate,"look/current":this.activeLookChanged,"looks":this.looksUpdated},2000)
			this.ProPresenter.version().then((result: RequestAndResponseJSONValue) => {
				this.processIncommingData(result)
				this.ProPresenter.looksGet().then((result: RequestAndResponseJSONValue) => {
					console.log(result)
					// Construct a statusJSONObject and call the callback for looksUpdated()
					const looksStatusJSONObject: StatusUpdateJSON = {
						url: 'looks',
						data: result.data
					}
					this.looksUpdated(looksStatusJSONObject)
					// TODO: Macros, Props, and then video input
					this.initActions()
				})
			})

			this.initPresets()
			this.initVariables()
			
			// TODO: Move up into the promise chain of getting looks, macros, props and video_input first
			/*
			const self=this
			setTimeout(function () {
				self.initActions()
			}, 500)
			*/
		}
	}

	// Status callbacks: Use arrow notation to create property functions that capture *this* instance of ModuleInstance class
	statusSlideUpdate = (statusJSONObject: StatusUpdateJSON) => {
		this.log('debug',JSON.stringify(statusJSONObject))
	}

	timersCurrentUpdate = (statusJSONObject: StatusUpdateJSON) => {
		this.log('debug',JSON.stringify(statusJSONObject))
		/*
		this.setVariableValues({
			timers_current_JSON: JSON.stringify(statusJSONObject.data.map((timer: { id: { name: string }; time: string }) => { return {[timer.id.name]:timer.time} }), null, 2).replace(', ', ', \n\n')
		})
		this.log('debug',this.getVariableValue('timers_current_JSON') as string)
		*/
	}

	presentationSlideIndexUpdate = (statusJSONObject: StatusUpdateJSON) => {
		this.log('debug',JSON.stringify(statusJSONObject))
		if (statusJSONObject.data.presentation_index) { // ProPresenter can return a null presentation_index when no presentation is active - nothing to update if this happens
			this.setVariableValues({
				presentation_slide_index: statusJSONObject.data.presentation_index.index,
				active_presentation_name: statusJSONObject.data.presentation_index.presentation_id.name,
				active_presentation_UUID: statusJSONObject.data.presentation_index.presentation_id.uuid
			})
		}
	}

	activeLookChanged = (statusJSONObject: StatusUpdateJSON) => {
		this.log('debug', 'lookchanged: ' + JSON.stringify(statusJSONObject) + ' lookname: ' + statusJSONObject.data.id.name)
		this.setVariableValues({
			active_look_name: statusJSONObject.data.id.name
		})
	}

	looksUpdated = (statusJSONObject: StatusUpdateJSON) => {
		this.log('debug', JSON.stringify(statusJSONObject.data))
		// Create a list of looks in the dropdown choices format  { id: string, label: string}
		this.looksChoices = statusJSONObject.data.map((look: {id: {uuid: string, name:string}}) => ({id:look.id.uuid, label:look.id.name}))
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

	processIncommingData(requestResponse: RequestAndResponseJSONValue) {
		this.log('debug', `processingIncommingData: ${JSON.stringify(requestResponse)}`)
		if (requestResponse && requestResponse.path && requestResponse.data && requestResponse.status && requestResponse.ok) {
			this.updateStatus(InstanceStatus.Ok) // Each time we receive an "ok" response, update module status to Ok
			const jsonData = requestResponse.data
			switch (requestResponse.path) {
				case '/version':
					this.setVariableValues({
						name: jsonData.name,
						platform: jsonData.platform,
						os_version: jsonData.os_version,
						version: jsonData.host_description,
					})
					break

				default:
					this.log('debug', 'missed an response handler for: ' + requestResponse.path)
					break
			}
		} else {
			this.updateStatus(InstanceStatus.UnknownWarning)
			this.log('error', `Getting this: ${JSON.stringify(requestResponse)}`)
		}
	}
}

runEntrypoint(ModuleInstance, [])
