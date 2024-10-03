import { CompanionInputFieldCheckbox, CompanionInputFieldDropdown, CompanionInputFieldTextInput, DropdownChoice } from "@companion-module/base"

// Force options to have a default to prevent sending undefined values
type EnforceDefault<T, U> = Omit<T, 'default'> & { default: U }

export interface Options {
    library_id: EnforceDefault<CompanionInputFieldTextInput, string>
    presentation_id: EnforceDefault<CompanionInputFieldTextInput, string>
    playlist_id: EnforceDefault<CompanionInputFieldTextInput, string>
    audio_playlist_id: EnforceDefault<CompanionInputFieldTextInput, string>
    audio_item_id: EnforceDefault<CompanionInputFieldTextInput, string>
    group_id_text: EnforceDefault<CompanionInputFieldTextInput, string>
    group_id_dropdown: EnforceDefault<CompanionInputFieldDropdown, string>
    look_id_text: EnforceDefault<CompanionInputFieldTextInput, string>
    look_id_dropdown: EnforceDefault<CompanionInputFieldDropdown, string>
    macro_id_text: EnforceDefault<CompanionInputFieldTextInput, string>
    macro_id_dropdown: EnforceDefault<CompanionInputFieldDropdown, string>
    media_playlist_id: EnforceDefault<CompanionInputFieldTextInput, string>
    media_id: EnforceDefault<CompanionInputFieldTextInput, string>
    message_id_text: EnforceDefault<CompanionInputFieldTextInput, string>
    message_id_dropdown: EnforceDefault<CompanionInputFieldDropdown, string>
    prop_id_text: EnforceDefault<CompanionInputFieldTextInput, string>
    prop_id_dropdown: EnforceDefault<CompanionInputFieldDropdown, string>
    stage_message_text: EnforceDefault<CompanionInputFieldTextInput, string>
    stagescreen_id_text: EnforceDefault<CompanionInputFieldTextInput, string>
    stagescreen_id_dropdown: EnforceDefault<CompanionInputFieldDropdown, string>
    stagescreenlayout_id_text: EnforceDefault<CompanionInputFieldTextInput, string>
    stagescreenlayout_id_dropdown: EnforceDefault<CompanionInputFieldDropdown, string>
    status_audience_screens_dropdown: EnforceDefault<CompanionInputFieldDropdown, string>
    status_stage_screens_dropdown: EnforceDefault<CompanionInputFieldDropdown, string>
    video_input_id_text: EnforceDefault<CompanionInputFieldTextInput, string>
    video_input_id_dropdown: EnforceDefault<CompanionInputFieldDropdown, string>
    index: EnforceDefault<CompanionInputFieldTextInput, string>
    presentation_uuid: EnforceDefault<CompanionInputFieldTextInput, string>
    layer: EnforceDefault<CompanionInputFieldDropdown, string>
    timeline_operation: EnforceDefault<CompanionInputFieldDropdown, string>
    timer_optional_operation: EnforceDefault<CompanionInputFieldDropdown, string>
    timer_id_dropdown: EnforceDefault<CompanionInputFieldDropdown, string>
    timer_id_text: EnforceDefault<CompanionInputFieldTextInput, string>
    timer_operation: EnforceDefault<CompanionInputFieldDropdown, string>
    timer_type: EnforceDefault<CompanionInputFieldDropdown, string>
    timer_duration: EnforceDefault<CompanionInputFieldTextInput, string>
    timer_time_of_day: EnforceDefault<CompanionInputFieldTextInput, string>
    timer_timeperiod: EnforceDefault<CompanionInputFieldDropdown, string>
    timer_start_time: EnforceDefault<CompanionInputFieldTextInput, string>
    timer_end_time: EnforceDefault<CompanionInputFieldTextInput, string>
    timer_new_name: EnforceDefault<CompanionInputFieldTextInput, string>
    timer_allows_overrun: EnforceDefault<CompanionInputFieldCheckbox, boolean>
    timer_increment_value : EnforceDefault<CompanionInputFieldTextInput, string>
    transport_layer: EnforceDefault<CompanionInputFieldDropdown, string>
    transport_skip_time: EnforceDefault<CompanionInputFieldTextInput, string>
    transport_goto_time: EnforceDefault<CompanionInputFieldTextInput, string>
    transport_operation: EnforceDefault<CompanionInputFieldDropdown, string>
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
        tooltip: 'Enter Presentation Name or Index or UUID.  Also can use a path.',
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
    audio_playlist_id: {
        type: 'textinput',
        label: 'Audio Playlist Id',
        tooltip: 'Enter Audio Playlist Name or Index or UUID',
        id: 'audio_playlist_id',
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
    group_id_text: {
        type: 'textinput',
        label: 'Group ID',
        tooltip: 'Enter Group Name or Index or UUID',
        id: 'group_id_text',
        isVisible: ((options) => options.group_id_dropdown == 'manually_specify_groupid'),
        default: '',
        useVariables: true,
    },
    group_id_dropdown: {
        type: 'dropdown',
        label: 'Group',
        tooltip: 'Choose an existing Group\nOr manually specify via text/variable)',
        id: 'group_id_dropdown',
        choices: [
            { id: 'manually_specify_groupid', label: 'Manually Specify Group ID Below'},
        ],
        default: ''
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
        tooltip: 'Choose an existing Look\nOr manually specify via text/variable)',
        id: 'look_id_dropdown',
        choices: [
            { id: 'manually_specify_lookid', label: 'Manually Specify Look ID Below'},
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
        tooltip: 'Choose an existing Macro\nOr manually specify via text/variable',
        id: 'macro_id_dropdown',
        choices: [
            { id: 'manually_specify_macroid', label: 'Manually Specify Macro ID Below'},
        ],
        default: '',
    },
    media_playlist_id: {
        type: 'textinput',
        label: 'Media Playlist Id',
        tooltip: 'Enter Media Playlist Name or Index or UUID',
        id: 'media_playlist_id',
        default: '',
        useVariables: true,
    },
    media_id: {
        type: 'textinput',
        label: 'Media Id',
        tooltip: 'Enter Media Name or Index or UUID',
        id: 'media_id',
        default: '',
        useVariables: true,
    },
    message_id_text: {
        type: 'textinput',
        label: 'Message ID',
        tooltip: 'Enter Message Name or Index or UUID',
        id: 'message_id_text',
        isVisible: ((options) => options.message_id_dropdown == 'manually_specify_messageid'),
        default: 'TODO: not yet implemented',
        useVariables: true,
    },
    message_id_dropdown: {
        type: 'dropdown',
        label: 'Message',
        tooltip: 'Choose an existing Message\nOr manually specify via text/variable',
        id: 'message_id_dropdown',
        choices: [
            { id: 'manually_specify_messageid', label: 'Manually Specify Message ID Below'},
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
        tooltip: 'Choose an existing Prop\nOr manually specify text/variable',
        id: 'prop_id_dropdown',
        choices: [
            { id: 'manually_specify_propid', label: 'Manually Specify Prop ID Below'},
        ],
        default: '',
    },
    stage_message_text: {
        type: 'textinput',
        label: 'Stage Message Text',
        tooltip: 'Enter text to display on stage message.\nEscape \" and \\ with a leading \\',
        id: 'stage_message_text',
        default: '',
        useVariables: true,
    },
    stagescreen_id_text: {
        type: 'textinput',
        label: 'Stage Screen Id',
        tooltip: 'Enter Stage Screen Name or Index or UUID',
        id: 'stagescreen_id_text',
        isVisible: ((options) => options.stagescreen_id_dropdown == 'manually_specify_stagescreenid'),
        default: '',
        useVariables: true,
    },
    stagescreen_id_dropdown: {
        type: 'dropdown',
        label: 'Stage Screen',
        tooltip: 'Choose an existing Stage Screen\nOr manually specify via text/variable',
        id: 'stagescreen_id_dropdown',
        choices: [
            { id: 'manually_specify_stagescreenid', label: 'Manually Specify Stage Screen ID Below'}
        ],
        default: '',
    },
    stagescreenlayout_id_text: {
        type: 'textinput',
        label: 'Stage Screen Id',
        tooltip: 'Enter Stage Screen Layout Name or Index or UUID',
        id: 'stagescreenlayout_id_text',
        isVisible: ((options) => options.stagescreenlayout_id_dropdown == 'manually_specify_stagescreenlayoutid'),
        default: '',
        useVariables: true,
    },
    stagescreenlayout_id_dropdown: {
        type: 'dropdown',
        label: 'Stage Screen',
        tooltip: 'Choose an existing Stage Screen Layout\nOr manually specify via text/variable',
        id: 'stagescreenlayout_id_dropdown',
        choices: [
            { id: 'manually_specify_stagescreenlayoutid', label: 'Manually Specify Stage Screen Layout ID Below'}
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
            { id: 'toggle', label: 'Toggle'},
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
            { id: 'toggle', label: 'Toggle'},
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
        tooltip: 'Choose an existing Video Input\nOr manually specify via text/variable',
        id: 'video_input_id_dropdown',
        choices: [
            { id: 'manually_specify_videoinputsid', label: 'Manually Specify Video Input ID Below'}
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
    timer_id_dropdown: {
        type: 'dropdown',
        label: 'Timer',
        tooltip: 'Choose an existing Timer\nOr manually specify via text/variable',
        id: 'timer_id_dropdown',
        choices: [
            { id: 'manually_specify_timerid', label: 'Manually Specify Timer ID Below'}
        ],
        default: 'manually_specify_timerid',
    },
    timer_id_text: {
        type: 'textinput',
        label: 'Timer ID',
        id: 'timer_id_text',
        tooltip: 'Enter Timer Name or Index or UUID',
        isVisible: ((options) => options.timer_id_dropdown == 'manually_specify_timerid'),
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
    timer_optional_operation: {
        type: 'dropdown',
        label: 'Operation (Optional, can be None)',
        tooltip: 'Choose an optional operation to perform in addition to setting details of timer - Select "None" to perform no operation and just set the timer',
        id: 'timer_optional_operation',
        choices: [
            { label: 'Start', id: 'start' },
            { label: 'Stop', id: 'stop' },
            { label: 'Reset', id: 'reset' },
            { label: 'None', id: 'none' },
        ],
        default: 'start',
    },
    timer_type: {
        type: 'dropdown',
        label: 'Type',
        id: 'timer_type',
        choices: [
            { label: 'Countdown Timer', id: 'countdown' },
            { label: 'Countdown To Time', id: 'countdownto' },
            { label: 'Elapsed Time', id: 'elapsed' },
        ],
        default: 'countdown',
    },
    timer_duration: {
        type: 'textinput',
        label: 'Duration',
        tooltip: 'Duration (In the form of HH:MM:SS or MM:SS or seconds).',
        id: 'timer_duration',
        default: '00:05:00',
        isVisible: ((options) => options.timer_type == 'countdown'),
        useVariables: true,
    },
    timer_time_of_day: {
        type: 'textinput',
        label: 'Time Of Day',
        tooltip: 'Time of day to countdown to (In the form of HH:MM:SS).',
        id: 'timer_time_of_day',
        default: '09:00:00',
        isVisible: ((options) => options.timer_type == 'countdownto'),
        useVariables: true,
    },
    timer_timeperiod: {
        type: 'dropdown',
        label: 'Time Period',
        id: 'timer_timeperiod',
        isVisible: ((options) => options.timer_type == 'countdownto'),
        choices: [
            { label: 'AM', id: 'am' },
            { label: 'PM', id: 'pm' },
        ],
        default: 'am',
    },
    timer_allows_overrun: {
        type: 'checkbox',
        label: 'Allows Overrun',
        id: 'timer_allows_overrun',
        default: false,
    },
    timer_start_time: {
        type: 'textinput',
        label: 'Start Time',
        tooltip: 'Start Time (In the form of HH:MM:SS).',
        id: 'timer_start_time',
        isVisible: ((options) => options.timer_type == 'elapsed'),
        default: '00:00:00',
        useVariables: true,
    },
    timer_end_time: {
        type: 'textinput',
        label: 'End Time (Optional)',
        tooltip: 'Optional End Time (In the form of HH:MM:SS). Leave blank for no limit.',
        id: 'timer_end_time',
        isVisible: ((options) => options.timer_type == 'elapsed'),
        default: '',
        useVariables: true,
    },
    timer_new_name: {
        type: 'textinput',
        label: 'New Name (Optional)',
        tooltip: 'OPTIONAL new name for timer. (Leave blank to keep timer name unchanged)',
        id: 'timer_new_name',
        default: '',
        useVariables: true,
    },
    timer_increment_value: {
        type: 'textinput',
        label: 'Time (+-seconds)',
        tooltip: 'The number of seconds to add to this currently running timer. A negative number will subtract time from this timer.',
        id: 'timer_increment_value',
        default: '30',
        useVariables: true,
    },
    transport_layer: {
        type: 'dropdown',
        label: 'Layer',
        id: 'transport_layer',
        choices: [
            { label: 'Presentation', id: 'presentation' },
            { label: 'Announcement', id: 'announcement' },
            { label: 'Audio', id: 'audio' },
        ],
        default: 'presentation',
    },
    transport_operation: {
        type: 'dropdown',
        label: 'Operation',
        id: 'transport_operation',
        choices: [
            { label: 'Play', id: 'play' },
            { label: 'Pause', id: 'pause' },
            { label: 'Skip Forward', id: 'skip_forward' },
            { label: 'Skip Backward', id: 'skip_backward' },
            { label: 'Go To Time', id: 'go_to_time' },
            { label: 'Go To End', id: 'go_to_end' },
        ],
        default: 'play',
    },
    transport_skip_time: {
        type: 'textinput',
        label: 'Number Of Seconds To Skip',
        tooltip: 'Positive Integer',
        id: 'transport_skip_time',
        isVisible: ((options) => options.transport_operation == 'skip_forward' || options.transport_operation == 'skip_backward'),
        default: '15',
        useVariables: true,
    },
    transport_goto_time: {
        type: 'textinput',
        label: 'Number Of Seconds To Skip',
        tooltip: 'Positive Integer',
        id: 'transport_goto_time',
        isVisible: ((options) => options.transport_operation == 'go_to_time'),
        default: '15',
        useVariables: true,
    },
    index: {
        type: 'textinput', // I know, you would think this input field would be a number, but this is a textinput instead - so that it can support "useVariables"
        label: 'Index',
        id: 'index',
        default: '0',
        useVariables: true,
    },
    presentation_uuid: {
        type: 'textinput',
        label: 'Presentation UUID',
        id: 'presentation_uuid',
        default: '',
        useVariables: true,
    }
}

// Used for module local cache of state
// varid is a clean form of the variable ID with - removed from UUID
export type ProTimer = {uuid: string, time: string, name: string, varid: string, state: string, index: number}
export type StageScreenWithLayout = {uuid: string, name: string, varid: string, index: number, layout_uuid: string, layout_name: string, layout_index: number}
export type ProMessageToken = {name:string,text?:{text:string},timer?:{allows_overrun:boolean, id:{uuid: string, name: string, index: number}}} //TODO: complete this type for all timer properties (if/when messages action is updated to support timers)
export type ProMessage = {id:{uuid: string, name: string, index: number},tokens:ProMessageToken[]} 

export type ProPresenterStateStore = {
	proTimers: ProTimer[],
    stageScreensWithLayout: StageScreenWithLayout[],
    messageTokenInputs: CompanionInputFieldTextInput[], // Dynamically created text inputs for ALL message tokens across ALL messages.  Where the ID of each input is in form of 'TokensParentMessageUUID__[???|txt|tmr]__TokenName' and it's visbility is based on the uuid of the selected message.
    looksChoices: DropdownChoice[],
    macroChoices: DropdownChoice[],
	propChoices: DropdownChoice[],
	videoInputChoices: DropdownChoice[],
	timerChoices: DropdownChoice[],
	stageScreenChoices: DropdownChoice[],
	stageScreenLayoutChoices: DropdownChoice[],
	groupChoices: DropdownChoice[],
	messageChoices: DropdownChoice[],
}

// Custom function to convert HH:mm:ss or mm:ss to seconds (number)
export function timestampToSeconds(timestampString: string):number {
    const components: string[] = timestampString.split(":")
    
    if (components.length == 3) {
        return Number(components[0]) * 3600 + Number(components[1]) * 60 + Number(components[2])
    } else if (components.length == 2) {
        return Number(components[0]) * 60 + Number(components[1])
    } else {
        return 0
    }
}

// Borrowed pad function from Companion/shared-lib/lib/Utils.ts
export function pad(str0: string | number, ch: string, len: number): string {
	let str = str0 + ''

	while (str.length < len) {
		str = ch + str
	}

	return str
}

// Borrowed secondsToTimestamp function from Companion/shared-lib/lib/Expression/ExpressionFunctions.ts
export function secondsToTimestamp(v: number, type:string):string {
    let negative = v < 0
    v = Math.abs(v)

    const seconds = pad(Math.floor(v) % 60, '0', 2)
    const minutes = pad(Math.floor(v / 60) % 60, '0', 2)
    const hours = pad(Math.floor(v / 3600), '0', 2)

    if (!type) return `${negative ? '-' : ''}${hours}:${minutes}:${seconds}`

    const timestamp = []
    if (type.includes('HH') || type.includes('hh')) timestamp.push(hours)
    if (type.includes('mm')) timestamp.push(minutes)
    if (type.includes('ss')) timestamp.push(seconds)

    return (negative ? '-' : '') + timestamp.join(':')
}