import { CompanionInputFieldCheckbox, CompanionInputFieldDropdown, CompanionInputFieldTextInput, DropdownChoice } from "@companion-module/base"

// Force options to have a default to prevent sending undefined values
type EnforceDefault<T, U> = Omit<T, 'default'> & { default: U }

export interface Options {
    library_id: EnforceDefault<CompanionInputFieldTextInput, string>
    presentation_id: EnforceDefault<CompanionInputFieldTextInput, string>
    playlist_id: EnforceDefault<CompanionInputFieldTextInput, string>
    active_announcement_command: EnforceDefault<CompanionInputFieldDropdown, string>
    active_audioplaylist_command: EnforceDefault<CompanionInputFieldDropdown, string>
    focused_audioplaylist_command: EnforceDefault<CompanionInputFieldDropdown, string>
    specific_audioplaylist_command: EnforceDefault<CompanionInputFieldDropdown, string>
    active_presentation_playlist_command: EnforceDefault<CompanionInputFieldDropdown, string>
    active_announcement_playlist_command: EnforceDefault<CompanionInputFieldDropdown, string>
    active_presentation_command: EnforceDefault<CompanionInputFieldDropdown, string>
    focused_presentation_command: EnforceDefault<CompanionInputFieldDropdown, string>
    specific_presentation_command: EnforceDefault<CompanionInputFieldDropdown, string>
    focused_playlist_command: EnforceDefault<CompanionInputFieldDropdown, string>
    specific_playlist_command: EnforceDefault<CompanionInputFieldDropdown, string>
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
    clear_layer_dropdown: EnforceDefault<CompanionInputFieldDropdown, string>
    clear_layer_or_group_dropdown: EnforceDefault<CompanionInputFieldDropdown, string>
    clear_group_id_dropdown: EnforceDefault<CompanionInputFieldDropdown, string>
    clear_group_id_text: EnforceDefault<CompanionInputFieldTextInput, string>
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
    trigger_type:EnforceDefault<CompanionInputFieldDropdown, string>
    trigger_next_previous: EnforceDefault<CompanionInputFieldDropdown, string>
    transport_layer: EnforceDefault<CompanionInputFieldDropdown, string>
    transport_skip_time: EnforceDefault<CompanionInputFieldTextInput, string>
    transport_goto_time: EnforceDefault<CompanionInputFieldTextInput, string>
    transport_operation: EnforceDefault<CompanionInputFieldDropdown, string>
    capture_operation: EnforceDefault<CompanionInputFieldDropdown, string>
}

export const options: Options = {
    active_announcement_command: {
        type: 'dropdown',
        label: 'Active Announcement: Command',
        tooltip: 'Choose a command to perform on the ACTIVE announcement.',
        id: 'active_announcement_command',
        choices: [
            { id: 'focus', label: 'Focus Active Announcement'},
            { id: 'trigger_next', label: 'Trigger Next Slide'},
            { id: 'trigger_previous', label: 'Trigger Previous Slide'},
            { id: 'trigger_first', label: 'Trigger First Slide'},
            { id: 'trigger_index', label: 'Trigger Slide By Index'},
            { id: 'timeline_operation', label: 'Perform Timeline Operation'},
        ],
        default: 'focus',
    },
    active_audioplaylist_command: {
        type: 'dropdown',
        label: 'Active Audio Playlist: Command',
        tooltip: 'Choose a command to perform on the ACTIVE audio playlist.',
        id: 'active_audioplaylist_command',
        choices: [
            { id: 'focus', label: 'Focus Active Audio Playlist'},
            { id: 'trigger_next', label: 'Trigger Next Audio Item'},
            { id: 'trigger_previous', label: 'Trigger Previous Audio Item'},
            { id: 'trigger_first', label: 'Trigger First Audio Item'},
            { id: 'trigger_id', label: 'Trigger Audio Item By It\'s ID'},
        ],
        default: 'focus',
    },
    focused_audioplaylist_command: {
        type: 'dropdown',
        label: 'Focused Audio Playlist: Command',
        tooltip: 'Choose a command to perform on the FOCUSED audio playlist.',
        id: 'focused_audioplaylist_command',
        choices: [
            { id: 'trigger_next', label: 'Trigger Next Audio Item'},
            { id: 'trigger_previous', label: 'Trigger Previous Audio Item'},
            { id: 'trigger_first', label: 'Trigger First Audio Item'},
            { id: 'trigger_id', label: 'Trigger Audio Item By It\'s ID'},
            { id: 'focus_next', label: 'Move Focus To Next Playlist'},
            { id: 'focus_previous', label: 'Move Focus To Previous Playlist'},
        ],
        default: 'trigger_next',
    },
    specific_audioplaylist_command: {
        type: 'dropdown',
        label: 'Specific Audio Playlist: Command',
        tooltip: 'Choose a command to perform on a specifically identified audio playlist',
        id: 'specific_audioplaylist_command',
        choices: [
            { id: 'focus', label: 'Focus Specified Audio Playlist'},
            { id: 'trigger_next', label: 'Trigger Next Audio Item'},
            { id: 'trigger_previous', label: 'Trigger Previous Audio Item'},
            { id: 'trigger_first', label: 'Trigger First Audio Item'},
            { id: 'trigger_id', label: 'Trigger Audio Item By It\'s ID'},
        ],
        default: 'focus',
    },
    active_presentation_playlist_command: {
        type: 'dropdown',
        label: 'Active Presentation Playlist: Command',
        tooltip: 'Choose a command to perform on the PLAYLIST with the currently ACTIVE PRESENTATION.',
        id: 'active_presentation_playlist_command',
        choices: [
            { id: 'focus', label: 'Focus Active Presentation Playlist'},
            { id: 'trigger_first', label: 'Trigger First Playlist Item'},
            { id: 'trigger_id', label: 'Trigger Playlist Item By It\'s Index'},
        ],
        default: 'focus',
    },
    active_announcement_playlist_command: {
        type: 'dropdown',
        label: 'Active Announcement Playlist: Command',
        tooltip: 'Choose a command to perform on the PLAYLIST with the currently ACTIVE ANNOUNCEMENT.',
        id: 'active_announcement_playlist_command',
        choices: [
            { id: 'focus', label: 'Focus Active Announcement Playlist'},
            { id: 'trigger_first', label: 'Trigger First Playlist Item'},
            { id: 'trigger_id', label: 'Trigger Playlist Item By It\'s Index'},
        ],
        default: 'focus',
    },
    focused_playlist_command: {
        type: 'dropdown',
        label: 'Focused Playlist: Command',
        tooltip: 'Choose a command to perform on the FOCUSED Playlist.',
        id: 'focused_playlist_command',
        choices: [
            { id: 'trigger_next', label: 'Trigger Next Playlist Item'},
            { id: 'trigger_previous', label: 'Trigger Previous Playlist Item'},
            { id: 'trigger_first', label: 'Trigger First Playlist Item'},
            { id: 'trigger_id', label: 'Trigger Playlist Item By It\'s ID'},
            { id: 'focus_next', label: 'Move Focus To Next Playlist'},
            { id: 'focus_previous', label: 'Move Focus To Previous Playlist'},
        ],
        default: 'trigger_next',
    },
    specific_playlist_command: {
        type: 'dropdown',
        label: 'Specific Playlist: Command',
        tooltip: 'Choose a command to perform on a specifically identified Playlist',
        id: 'specific_playlist_command',
        choices: [
            { id: 'focus', label: 'Focus Specified Playlist'},
            { id: 'trigger_next', label: 'Trigger Next Playlist Item'},
            { id: 'trigger_previous', label: 'Trigger Previous Playlist Item'},
            { id: 'trigger_first', label: 'Trigger First Playlist Item'},
            { id: 'trigger_index', label: 'Trigger Playlist Item By It\'s Index'},
        ],
        default: 'focus',
    },
    active_presentation_command: {
        type: 'dropdown',
        label: 'Active Presentation: Command',
        tooltip: 'Choose a command to perform on the ACTIVE Presentation.',
        id: 'active_presentation_command',
        choices: [
            { id: 'focus', label: 'Focus Active Presentation'},
            { id: 'trigger_next', label: 'Trigger Next Slide'},
            { id: 'trigger_previous', label: 'Trigger Previous Slide'},
            { id: 'trigger_first', label: 'Trigger First Slide'},
            { id: 'trigger_index', label: 'Trigger Slide By It\'s Index'},
            { id: 'group', label: 'Trigger Specified Group'},
            { id: 'timeline_operation', label: 'Perform Timeline Operation'},
        ],
        default: 'focus',
    },
    focused_presentation_command: {
        type: 'dropdown',
        label: 'Focused Presentation: Command',
        tooltip: 'Choose a command to perform on the FOCUSED Presentation.',
        id: 'focused_presentation_command',
        choices: [
            { id: 'trigger_next', label: 'Trigger Next Slide'},
            { id: 'trigger_previous', label: 'Trigger Previous Slide'},
            { id: 'trigger_first', label: 'Trigger First Slide'},
            { id: 'trigger_index', label: 'Trigger Slide By It\'s Index'},
            { id: 'group', label: 'Trigger Specified Group'},
            { id: 'timeline_operation', label: 'Perform Timeline Operation'},
            { id: 'focus_next', label: 'Move Focus To Next Presentation'},
            { id: 'focus_previous', label: 'Move Focus To Previous Presentation'},
        ],
        default: 'trigger_next',
    },
    specific_presentation_command: {
        type: 'dropdown',
        label: 'Specific Presentation: Command',
        tooltip: 'Choose a command to perform on a specifically identified Presentation. NOTE: This action targets the presentation in the library - not a playlist!',
        id: 'specific_presentation_command',
        choices: [
            { id: 'focus', label: 'Focus Specified Presentation'},
            { id: 'trigger_next', label: 'Trigger Next Slide'},
            { id: 'trigger_previous', label: 'Trigger Previous Slide'},
            { id: 'trigger_first', label: 'Trigger First Slide'},
            { id: 'trigger_index', label: 'Trigger Slide By It\'s Index'},
            { id: 'group', label: 'Trigger Specified Group'},
            { id: 'timeline_operation', label: 'Perform Timeline Operation'},
        ],
        default: 'focus',
    },
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
        isVisible: ((options) => 
            options.active_audioplaylist_command == 'trigger_id' ||
            options.focused_audioplaylist_command == 'trigger_id' ||
            options.specific_audioplaylist_command == 'trigger_id'
        ),
        default: '',
        useVariables: true,
    },
    group_id_text: {
        type: 'textinput',
        label: 'Group ID',
        tooltip: 'Enter Group Name or Index or UUID',
        id: 'group_id_text',
        isVisible: ((options) => 
            options.group_id_dropdown == 'manually_specify_groupid' ||
            options.active_presentation_command == 'group' ||
            options.focused_presentation_command == 'group' ||
            options.specific_presentation_command == 'group'
        ),
        default: '',
        useVariables: true,
    },
    group_id_dropdown: {
        type: 'dropdown',
        label: 'Group',
        tooltip: 'Choose an existing Group\nOr manually specify via text/variable)',
        id: 'group_id_dropdown',
        isVisible: ((options) => 
            options.active_presentation_command == 'group' ||
            options.focused_presentation_command == 'group' ||
            options.specific_presentation_command == 'group'
        ),
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
            { id: 'manually_specify_stagescreenid', label: 'Manually Specify Stage Screen ID Below'},
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
            { id: 'manually_specify_stagescreenlayoutid', label: 'Manually Specify Stage Screen Layout ID Below'},
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
            { id: 'manually_specify_videoinputsid', label: 'Manually Specify Video Input ID Below'},
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
    clear_layer_or_group_dropdown: {
        type: 'dropdown',
        label: 'Clear Layer or Group',
        id: 'clear_layer_or_group_dropdown',
        choices: [
            { label: 'Layer', id: 'layer' },
            { label: 'Group', id: 'group' },
        ],
        default: 'layer',
    },
    clear_group_id_dropdown: {
        type: 'dropdown',
        label: 'Clear Group',
        id: 'clear_group_id_dropdown',
        isVisible: ((options) => options.clear_layer_or_group_dropdown == 'group'),
        choices: [
            { id: 'manually_specify_cleargroupid', label: 'Manually Specify Clear Group ID Below'},
        ],
        default: '',
    },
    clear_group_id_text: {
        type: 'textinput',
        label: 'Clear Group ID',
        tooltip: 'Enter Clear Group Name or Index or UUID',
        id: 'clear_group_id_text',
        isVisible: ((options) => options.clear_group_id_dropdown == 'manually_specify_cleargroupid' && options.clear_layer_or_group_dropdown == 'group'),
        default: '',
        useVariables: true,
    },
    clear_layer_dropdown: {
        type: 'dropdown',
        label: 'Layer',
        id: 'clear_layer_dropdown',
        isVisible: ((options) => options.clear_layer_or_group_dropdown == 'layer'),
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
        isVisible: ((options) => 
            options.active_announcement_command == 'timeline_operation' || 
            options.active_presentation_command == 'timeline_operation' || 
            options.focused_presentation_command == 'timeline_operation' ||
            options.specific_presentation_command == 'timeline_operation'
        ),
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
            { id: 'manually_specify_timerid', label: 'Manually Specify Timer ID Below'},
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
            { label: 'Toggle Play/Pause', id: 'toggle_play_pause'},
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
    trigger_type: {
        type: 'dropdown',
        label: 'Trigger Type',
        id: 'trigger_type',
        choices: [
            { label: 'Presentation', id: 'presentation' },
            { label: 'Media', id: 'media' },
            { label: 'Audio', id: 'audio'},
        ],
        default: 'presentation',
    },
    trigger_next_previous: {
        type: 'dropdown',
        label: 'Next or Previous',
        id: 'trigger_next_previous',
        choices: [
            { label: 'Next', id: 'next' },
            { label: 'Previous', id: 'previous' },
        ],
        default: 'next',
    },
    index: {
        type: 'textinput', // I know, you would think this input field would be a Number -  Nut this is a textinput so that it can support "useVariables"
        label: 'Index',
        id: 'index',
        isVisible: ((options) => 
            options.active_announcement_command == 'trigger_index' || 
            options.active_presentation_command == 'trigger_index' || 
            options.focused_presentation_command == 'trigger_index' ||
            options.specific_presentation_command == ' trigger_index'
        ),
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

// Custom function to convert HH:mm:ss or mm:ss to seconds (number). Handles negative timestamps
export function timestampToSeconds(timestampString: string):number {
    const isNegative = timestampString.startsWith('-') // Check and record if negative
    const absTimestampString = timestampString.replace('-', '') // Remove the negative sign if present

    const components: string[] = absTimestampString.split(":")
    
    if (components.length == 3) {
        return Number(components[0]) * 3600 + Number(components[1]) * 60 + Number(components[2]) * (isNegative ? -1 : 1)
    } else if (components.length == 2) {
        return Number(components[0]) * 60 + Number(components[1]) * (isNegative ? -1 : 1)
    } else {
        return 0
    }
}

// Custom function to convert a timestamp (in seconds) to a formated string - supports hh|h|mm|m|ss|s
export function secondsToTimestamp(seconds: number, format:string):string {
    // Get the absolute value of seconds for formatting
    const isNegative = seconds < 0;
    const absSeconds = Math.abs(seconds);
    
    // Calculate hours, minutes, and seconds
    const hours = Math.floor(absSeconds / 3600);
    const minutes = Math.floor((absSeconds % 3600) / 60);
    const secs = absSeconds % 60;
    

    // Replace double specifiers first (HH, hh, mm, ss) with zero-padded values
    let formattedTime = format
        .replace(/hh|HH/g, pad(hours, '0', 2))
        .replace(/mm/g, pad(minutes, '0', 2))
        .replace(/ss/g, pad(secs, '0', 2));

    // Replace single specifiers (H, h, m, s) with non-padded values
    formattedTime = formattedTime
        .replace(/h|H/g, hours.toString())
        .replace(/m/g, minutes.toString())
        .replace(/s/g, secs.toString());
    
    // Add negative sign if the original time was negative
    return isNegative ? `-${formattedTime}` : formattedTime;
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
export function secondsToTimestampBF(v: number, type:string):string {
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