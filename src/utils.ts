import { CompanionInputFieldDropdown, CompanionInputFieldTextInput } from "@companion-module/base"

// Force options to have a default to prevent sending undefined values
type EnforceDefault<T, U> = Omit<T, 'default'> & { default: U }

export interface Options {
    library_id: EnforceDefault<CompanionInputFieldTextInput, string>
    presentation_id: EnforceDefault<CompanionInputFieldTextInput, string>
    playlist_id: EnforceDefault<CompanionInputFieldTextInput, string>
    audio_item_id: EnforceDefault<CompanionInputFieldTextInput, string>
    look_id_text: EnforceDefault<CompanionInputFieldTextInput, string>
    look_id_dropdown: EnforceDefault<CompanionInputFieldDropdown, string>
    macro_id_text: EnforceDefault<CompanionInputFieldTextInput, string>
    macro_id_dropdown: EnforceDefault<CompanionInputFieldDropdown, string>
    prop_id_text: EnforceDefault<CompanionInputFieldTextInput, string>
    prop_id_dropdown: EnforceDefault<CompanionInputFieldDropdown, string>
    status_audience_screens_dropdown: EnforceDefault<CompanionInputFieldDropdown, string>
    status_stage_screens_dropdown: EnforceDefault<CompanionInputFieldDropdown, string>
    video_input_id_text: EnforceDefault<CompanionInputFieldTextInput, string>
    video_input_id_dropdown: EnforceDefault<CompanionInputFieldDropdown, string>
    index: EnforceDefault<CompanionInputFieldTextInput, string>
    layer: EnforceDefault<CompanionInputFieldDropdown, string>
    timeline_operation: EnforceDefault<CompanionInputFieldDropdown, string>
    timer_id: EnforceDefault<CompanionInputFieldTextInput, string>
    timer_operation: EnforceDefault<CompanionInputFieldDropdown, string>
    timer_increment_value : EnforceDefault<CompanionInputFieldTextInput, string>
    capture_operation: EnforceDefault<CompanionInputFieldDropdown, string>
}

export const options: Options = {
    library_id: {
        type: 'textinput',
        label: 'Library Id',
        id: 'library_id',
        tooltip: 'Enter Library Name or Index or UUID',
        default: '',
        useVariables: true,
    },
    presentation_id: {
        type: 'textinput',
        label: 'Presentation ID',
        tooltip: 'Enter Presentation Name or Index or UUID',
        id: 'presentation_id',
        default: '',
        useVariables: true,
    },
    playlist_id: {
        type: 'textinput',
        label: 'Playlist Id',
        tooltip: 'Enter Playlist Name or Index or UUID',
        id: 'playlist_id',
        default: '',
        useVariables: true,
    },
    audio_item_id: {
        type: 'textinput',
        label: 'Audio Item ID',
        tooltip: 'Enter Audio Item Name or Index or UUID',
        id: 'audio_item_id',
        default: '',
        useVariables: true,
    },
    look_id_text: {
        type: 'textinput',
        label: 'Look ID',
        tooltip: 'Enter Look Name or Index or UUID',
        id: 'look_id_text',
        isVisible: ((options) => options.look_id_dropdown == 'manually_specify_lookid'),
        default: '',
        useVariables: true,
    },
    look_id_dropdown: {
        type: 'dropdown',
        label: 'Look',
        tooltip: 'Choose an existing Look (or manually specify text/variable)',
        id: 'look_id_dropdown',
        choices: [
            { id: 'manually_specify_lookid', label: 'Manually Specify Look Below'},
        ],
        default: ''
    },
    macro_id_text: {
        type: 'textinput',
        label: 'Macro ID',
        tooltip: 'Enter Macro Name or Index or UUID',
        id: 'macro_id_text',
        isVisible: ((options) => options.macro_id_dropdown == 'manually_specify_macroid'),
        default: '',
        useVariables: true,
    },
    macro_id_dropdown: {
        type: 'dropdown',
        label: 'Macro',
        tooltip: 'Choose an existing Macro (or manually specify text/variable)',
        id: 'macro_id_dropdown',
        choices: [
            { id: 'manually_specify_macroid', label: 'Manually Specify Macro Below'},
        ],
        default: '',
    },
    prop_id_text: {
        type: 'textinput',
        label: 'Prop ID',
        tooltip: 'Enter Prop Name or Index or UUID',
        id: 'prop_id_text',
        isVisible: ((options) => options.prop_id_dropdown == 'manually_specify_propid'),
        default: '',
        useVariables: true,
    },
    prop_id_dropdown: {
        type: 'dropdown',
        label: 'Prop',
        tooltip: 'Choose an existing Prop (or manually specify text/variable)',
        id: 'prop_id_dropdown',
        choices: [
            { id: 'manually_specify_propid', label: 'Manually Specify Prop Below'},
        ],
        default: '',
    },
    status_audience_screens_dropdown: {
        type: 'dropdown',
        label: 'Audience Screens Status',
        tooltip: 'Show or hide Audience screens.',
        id: 'status_audience_screens_dropdown',
        choices: [
            { id: 'show', label: 'Show'},
            { id: 'hide', label: 'Hide'},
        ],
        default: 'show',
    },
    status_stage_screens_dropdown: {
        type: 'dropdown',
        label: 'Stage Screens Status',
        tooltip: 'Show or hide Audience screens.',
        id: 'status_stage_screens_dropdown',
        choices: [
            { id: 'show', label: 'Show'},
            { id: 'hide', label: 'Hide'},
        ],
        default: 'show',
    },
    video_input_id_text: {
        type: 'textinput',
        label: 'Video Input ID',
        tooltip: 'Enter Video Input Name or Index or UUID',
        id: 'video_input_id_text',
        isVisible: ((options) => options.video_input_id_dropdown == 'manually_specify_videoinputsid'),
        default: '',
        useVariables: true,
    },
    video_input_id_dropdown: {
        type: 'dropdown',
        label: 'Video Input',
        tooltip: 'Choose an existing Video Input (or manually specify text/variable)',
        id: 'video_input_id_dropdown',
        choices: [
            { id: 'manually_specify_videoinputsid', label: 'Manually Specify Video Input Below'}
        ],
        default: '',
    },
    capture_operation: {
        type: 'dropdown',
        label: 'Operation',
        id: 'capture_operation',
        choices: [
            { label: 'Start', id: 'start' },
            { label: 'Stop', id: 'stop' },
        ],
        default: 'start',
    },
    layer: {
        type: 'dropdown',
        label: 'Layer',
        id: 'layer',
        choices: [
            { label: 'Audio', id: 'audio' },
            { label: 'Props', id: 'props' },
            { label: 'Messages', id: 'messages' },
            { label: 'Announcements', id: 'announcements' },
            { label: 'Slide', id: 'slide' },
            { label: 'Media', id: 'media' },
            { label: 'Video_input', id: 'video_input' },
        ],
        default: 'slide',
    },
    timeline_operation: {
        type: 'dropdown',
        label: 'Operation',
        id: 'timeline_operation',
        choices: [
            { label: 'Play', id: 'play' },
            { label: 'Pause', id: 'pause' },
            { label: 'Rewind', id: 'rewind' },
        ],
        default: 'play',
    },
    timer_id: {
        type: 'textinput',
        label: 'Timer ID',
        id: 'timer_id',
        tooltip: 'Enter Timer Name or Index or UUID',
        default: '',
        useVariables: true,
    },
    timer_operation: {
        type: 'dropdown',
        label: 'Operation',
        id: 'timer_operation',
        choices: [
            { label: 'Start', id: 'start' },
            { label: 'Stop', id: 'stop' },
            { label: 'Reset', id: 'reset' },
        ],
        default: 'start',
    },
    timer_increment_value: {
        type: 'textinput',
        label: 'Time (+-seconds)',
        tooltip: 'The number of seconds to add to this currently running timer. A negative number will subtract time from this timer.',
        id: 'timer_increment_value',
        default: '30',
        useVariables: true,
    },
    index: {
        type: 'textinput',
        label: 'Index',
        id: 'index',
        default: '0',
        useVariables: true,
    }
}

// Used for module local cahce of sate
export type Timer = {uuid: string, time: string, name: string, varid: string, state: string, index: number}
export type LocalStateCache = {
	timers: Timer[]
}