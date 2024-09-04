import { InstanceBase, SomeCompanionConfigField } from '@companion-module/base'
import { ProPresenter } from 'renewedvision-propresenter'

export interface DeviceConfig {
	ProPresenter: ProPresenter | null
	host: string
	port: number
	//password: string
}

export type JSONValue = string | number | boolean | { [x: string]: JSONValue } | Array<JSONValue>

export interface InstanceBaseExt<TConfig> extends InstanceBase<TConfig> {
	[x: string]: any
	config: TConfig
	ProPresenter: ProPresenter
}

export function GetConfigFields(): SomeCompanionConfigField[] {
	return [
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
			width: 4,
			default: 1025,
			min: 1,
			max: 99999,
		},
		{
			type: 'static-text',
			label: 'Tip',
			id: 'intro text',
			width: 12,
			value: '👉 You can read this module\'s help file by clicking the (? in a black circle) symbol next to the module name...'
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