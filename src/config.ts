import { InstanceBase, SomeCompanionConfigField } from '@companion-module/base'
import { ProPresenter } from 'renewedvision-propresenter'
import { ProPresenterStateStore } from './utils'

export interface DeviceConfig {
	ProPresenter: ProPresenter | null
	host: string
	port: number
	timeout: number
	custom_timer_format_string: string
	exta_debug_logs: boolean
}

//export type JSONValue = string | number | boolean | { [x: string]: JSONValue } | Array<JSONValue>

export interface InstanceBaseExt<TConfig> extends InstanceBase<TConfig> {
	[x: string]: any
	config: TConfig
	ProPresenter: ProPresenter
	propresenterStateStore: ProPresenterStateStore
}

export function GetConfigFields(): SomeCompanionConfigField[] {
	return [
		{
			type: 'static-text',
			label: '',
			id: 'intro text',
			width: 12,
			value: '<b>👉 Tip: You can read this module\'s help, guide and tooltips by clicking the (? in a black circle) symbol.</b>'
		},
		{
			type: 'static-text',
			label: '',
			id: 'connection',
			width: 12,
			value: '<hr><h5>🛜 Connection Settings:</h5>'
		},
		{
			type: 'textinput',
			id: 'host',
			label: 'ProPresenter Computer IP Address (Or Hostname)',
			width: 6,
			default: '',
		},
		{
			type: 'number',
			id: 'port',
			label: 'ProPresenter Network Port',
			tooltip: 'You can find the port that ProPresenter is listening to in ProPresenter Network Settings.',
			width: 4,
			default: 1025,
			min: 1,
			max: 99999,
		},
		{
			type: 'static-text',
			label: '',
			id: 'optional',
			width: 12,
			value: '<br><hr><h5>✅ Optional Settings:</h5>'
		},
		{
			type: 'textinput',
			id: 'custom_timer_format_string',
			label: 'Custom Timer Format String',
			tooltip: 'h/hh = hours. m/mm = minutes. s/ss=seconds.',
			width: 4,
			default: 'mm:ss',
		},
		{
			type: 'static-text',
			label: '',
			id: 'advanced',
			width: 12,
			value: '<br><br><br><hr><h5>🔥 Advanced Settings:</h5><i>Normally, there is no need to change these.</i>'
		},
		{
			type: 'checkbox',
			id: 'exta_debug_logs',
			label: 'Extra Debug Logs',
			tooltip: 'Turn this on for more detailed debug logs.',
			width: 4,
			default: false,
		},
		{
			type: 'number',
			id: 'timeout',
			label: 'ProPresenter Network Timeout (500-10000) msec',
			tooltip: 'The default timeout of 1000 msec is fine for most setups.',
			width: 4,
			default: 1000,
			min: 500,
			max: 10000,
		},
		// {
		// 	type: 'textinput',
		// 	id: 'password',
		// 	label: 'ProPresenter remote password',
		// 	width: 8,
		// 	default: '',
		// },
	]
}