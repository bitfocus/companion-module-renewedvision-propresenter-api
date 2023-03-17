import { InstanceBase, SomeCompanionConfigField } from '@companion-module/base'
import { ProPresenter } from 'renewedvision-propresenter'

export interface DeviceConfig {
	ProPresenter: ProPresenter | null
	host: string
	port: number
	password: string
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
			type: 'static-text',
			label: 'ProPresenter',
			id: 'intro text',
			width: 12,
			value: 'Make sure you have Network enabled and also the controller remote with a password'
		},
		{
			type: 'textinput',
			id: 'host',
			label: 'Target ProPresenter Instance',
			width: 8,
			default: '',
		},
		{
			type: 'number',
			id: 'port',
			label: 'Target Port',
			width: 4,
			default: 1025,
			min: 1,
			max: 99999,
		},
		{
			type: 'textinput',
			id: 'password',
			label: 'ProPresenter remote password',
			width: 8,
			default: '',
		},
	]
}
