import { CompanionInputFieldDropdown, CompanionInputFieldTextInput } from "@companion-module/base"

// Force options to have a default to prevent sending undefined values
type EnforceDefault<T, U> = Omit<T, 'default'> & { default: U }

export interface Options {
    playlist_id: EnforceDefault<CompanionInputFieldTextInput, string>
    id: EnforceDefault<CompanionInputFieldTextInput, string>
    index: EnforceDefault<CompanionInputFieldTextInput, string>
    layer: EnforceDefault<CompanionInputFieldDropdown, string>
    timeline_operation: EnforceDefault<CompanionInputFieldDropdown, string>
}

export const options: Options = {
    playlist_id: {
        type: 'textinput',
        label: 'Playlist Id',
        id: 'playlist_id',
        default: '',
        useVariables: true,
    },
    id: {
        type: 'textinput',
        label: 'Id',
        id: 'id',
        default: '',
        useVariables: true,
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
        id: 'operation',
        choices: [
            { label: 'Play', id: 'play' },
            { label: 'Pause', id: 'pause' },
            { label: 'Rewind', id: 'rewind' },
        ],
        default: 'play',
    },
    index: {
        type: 'textinput',
        label: 'Index',
        id: 'index',
        default: '0',
        useVariables: true,
    }
}