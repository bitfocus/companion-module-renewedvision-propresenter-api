import { InstanceBase, SomeCompanionConfigField, CompanionInputFieldDropdown } from '@companion-module/base'
import { ProPresenter } from 'renewedvision-propresenter'
import { ProPresenterStateStore } from './utils'

export interface DeviceConfig {
	ProPresenter: ProPresenter | null
	host: string
	port: number
	timeout: number
	custom_timer_format_string: string
	exta_debug_logs: boolean
	enable_midi_button_pusher: boolean
	virtual_midi_port_name: string
	midi_port_dropdown: string
	companion_port: number
	suppress_active_presentation_change_warning: boolean
}

//export type JSONValue = string | number | boolean | { [x: string]: JSONValue } | Array<JSONValue>

export interface InstanceBaseExt<TConfig> extends InstanceBase<TConfig> {
	[x: string]: any
	config: TConfig
	ProPresenter: ProPresenter
	propresenterStateStore: ProPresenterStateStore
}

export function GetConfigFields(instance: InstanceBaseExt<DeviceConfig>): SomeCompanionConfigField[] {
	const midi_port_dropdown: SomeCompanionConfigField = {
		type: 'dropdown',
		id: 'midi_port_dropdown',
		tooltip:
			'The MIDI port that this module will listen to and push Companion buttons when a MIDI Note-On msg is recieved. Channel/Note/Intensity => page/row/column)',
		label: 'Midi-Port Name',
		width: 9,
		isVisible: (options) => options.enable_midi_button_pusher == true,
		choices: [],
		default: 'virtual',
	}

	// Add all the MIDI ports to the dropdown
	if (instance.midi_available) {
		try {
			const port_count = instance.midi_input.getPortCount()
			for (let portIndex = 0; portIndex < port_count; portIndex++) {
				const port_name = instance.midi_input.getPortName(portIndex)
				midi_port_dropdown.choices.push({ id: port_name, label: port_name })
			}
		} catch (error) {
			instance.log('debug', 'Error getting MIDI ports: ' + error)
		}
	}

	// Add the virtual port option to the dropdown
	midi_port_dropdown.choices.push({ id: 'virtual', label: 'Custom Virtual Port' })

	return [
		{
			type: 'static-text',
			label: '',
			id: 'connection',
			width: 12,
			value: '<h5>✅ Required Connection Settings:</h5>',
		},
		{
			type: 'textinput',
			id: 'host',
			label: 'ProPresenter Computer IP Address (Or Hostname)',
			width: 5,
			default: '',
		},
		{
			type: 'number',
			id: 'port',
			label: 'ProPresenter Network Port',
			tooltip: 'You can find the port that ProPresenter is listening to in ProPresenter Network Settings.',
			width: 3,
			default: 1025,
			min: 1,
			max: 65535,
		},
		{
			type: 'static-text',
			label: '',
			id: 'optional',
			width: 12,
			value: '<hr><h5>❓Optional Settings:</h5>',
		},
		{
			id: 'enable_midi_button_pusher',
			type: 'checkbox',
			label: 'Enable MIDI Button Pushing',
			default: false,
			width: 3,
		},
		midi_port_dropdown as SomeCompanionConfigField,
		{
			type: 'textinput',
			id: 'virtual_midi_port_name',
			label: 'Virtual Midi Port Name',
			width: 9,
			isVisible: (options) => options.midi_port_dropdown == 'virtual' && options.enable_midi_button_pusher == true,
			default: 'CompanionProPresenterMIDI',
		},
		{
			type: 'number',
			id: 'companion_port',
			label: 'Companion Network Port',
			tooltip:
				"This is required for MIDI button pushing to work.  There is no way for this module to KNOW your Companion network port - you will need to copy it here, if it's not the default of 8000!",
			width: 4,
			isVisible: (options) => options.enable_midi_button_pusher == true,
			default: 8000,
			min: 1,
			max: 65535,
		},
		{
			type: 'static-text',
			label: '',
			id: 'connection',
			width: 12,
			value: '<br>',
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
			value: '<hr><h5>🔥 Advanced Settings:</h5>',
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
		{
			type: 'checkbox',
			id: 'suppress_active_presentation_change_warning',
			label: 'Suppress Warnings for ActivePresentation Next/Previous',
			tooltip:
				'Suppresses warnings when on first/last slide and trying to go to previous/next with active presentation operations',
			width: 4,
			default: false,
		},
		{
			type: 'static-text',
			label: '',
			id: 'intro text',
			width: 12,
			value:
				"<hr><b>Tip:</b> You can read this module's help, guide and tooltips by clicking the (? in a black circle) symbol.",
		},
	]
}
