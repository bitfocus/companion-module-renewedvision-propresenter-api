import { InstanceBase, SomeCompanionConfigField } from '@companion-module/base'
import { ProPresenter } from 'renewedvision-propresenter'

export interface DeviceConfig {
	ProPresenter: ProPresenter | null
	host: string
	port: number
}

export type JSONValue = string | number | boolean | { [x: string]: JSONValue } | Array<JSONValue>

export interface InstanceBaseExt<TConfig> extends InstanceBase<TConfig> {
	[x: string]: any
	config: TConfig
}

export function GetConfigFields(): SomeCompanionConfigField[] {
	return [
		{
			type: 'textinput',
			id: 'host',
			label: 'Target ProPresenter Instance',
			width: 8,
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
	]
}
