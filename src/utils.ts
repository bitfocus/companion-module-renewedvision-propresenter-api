import { CompanionInputFieldDropdown, CompanionInputFieldTextInput } from "@companion-module/base"

// Force options to have a default to prevent sending undefined values
type EnforceDefault<T, U> = Omit<T, 'default'> & { default: U }

export interface Options {
    playlist_id: EnforceDefault<CompanionInputFieldTextInput, string>
    id: EnforceDefault<CompanionInputFieldTextInput, string>
    index: EnforceDefault<CompanionInputFieldTextInput, string>
    
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
    timeline_operation: {
        type: 'dropdown',
        label: 'operation',
        id: 'operation',
        choices: [
            { label: 'play', id: 'play' },
            { label: 'pause', id: 'pause' },
            { label: 'rewind', id: 'rewind' },
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