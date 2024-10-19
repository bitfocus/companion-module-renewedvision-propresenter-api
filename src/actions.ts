import { CompanionActionDefinition, CompanionActionDefinitions, CompanionInputFieldDropdown, DropdownChoice } from '@companion-module/base'
import { DeviceConfig, InstanceBaseExt } from './config'
import { options, timestampToSeconds} from './utils'
import { ProPresenterLayerName, ProPresenterCaptureOperation, RequestAndResponseJSONValue, ProPresenterTimerOperation, ProPresenterTimelineOperation, ProPresenterTimePeriod, ProPresenterLayerWithTransportControl} from 'renewedvision-propresenter'

export function GetActions(instance: InstanceBaseExt<DeviceConfig>): CompanionActionDefinitions {
	const actions: { [id in ActionId]: CompanionActionDefinition | undefined } = {
		// **** ANNOUNCEMENT *****
		[ActionId.activeAnnouncementOperation]: {
			name: 'Active Announcement: Operation',
			description: 'Perform an operation on the Active Announcement',
			options: [options.active_announcement_operation, options.index, options.timeline_operation],
			callback: async (actionEvent) => {
				switch (actionEvent.options.active_announcement_operation) {
					case 'focus':
						instance.ProPresenter.announcementActiveFocus()
						break
					case 'trigger_next':
						instance.ProPresenter.announcementNextTrigger()
						break
					case 'trigger_previous':
						instance.ProPresenter.announcementPreviousTrigger()
						break
					case 'trigger_first':
						instance.ProPresenter.announcementTrigger()
						break
					case 'trigger_index':
						const index: string = await instance.parseVariablesInString(actionEvent.options.index as string)
						instance.ProPresenter.announcementActiveIndexTrigger(index)
						break
					case 'timeline_operation':
						//const operation: string = await instance.parseVariablesInString(actionEvent.options.timeline_operation as string)
						instance.ProPresenter.announcementActiveTimelineOperation(actionEvent.options.timeline_operation as ProPresenterTimelineOperation)
						break
					default:
						instance.log('debug', 'Invalid active_announcement_operation: ' + options.active_announcement_operation)
				}
				
			},
		},

		// **** AUDIO *****
		[ActionId.activeAudioPlaylistOperation]: {
			name: 'Active Audio Playlist: Operation',
			description: 'Perform an operation on the Active Audio Playlist.',
			options: [options.active_audioplaylist_operation, options.audio_item_id],
			callback: async (actionEvent) => {
				switch (actionEvent.options.active_audioplaylist_operation) {
					case 'focus':
						instance.ProPresenter.audioPlaylistActiveFocus()
						break
					case 'trigger_next':
						instance.ProPresenter.audioPlaylistActiveNextTrigger()
						break
					case 'trigger_previous':
						instance.ProPresenter.audioPlaylistActivePreviousTrigger()
						break
					case 'trigger_first':
						instance.ProPresenter.audioPlaylistActiveTrigger()
						break
					case 'trigger_id':
						const id: string = await instance.parseVariablesInString(actionEvent.options.audio_item_id as string)
						instance.ProPresenter.audioPlaylistActiveIdTrigger(id)
						break
					default:
						instance.log('debug', 'Invalid active_audioplaylist_operation: ' + options.active_audioplaylist_operation)
				}
			},
		},
		[ActionId.focusedAudioPlaylistOperation]: {
			name: 'Focused Audio Playlist: Operation',
			description: 'Perform an operation on the Focused Audio Playlist.',
			options: [options.focused_audioplaylist_operation, options.audio_item_id],
			callback: async (actionEvent) => {
				switch (actionEvent.options.focused_audioplaylist_operation) {
					case 'trigger_next':
						instance.ProPresenter.audioPlaylistFocusedNextTrigger()
						break
					case 'trigger_previous':
						instance.ProPresenter.audioPlaylistFocusedPreviousTrigger()
						break
					case 'trigger_first':
						instance.ProPresenter.audioPlaylistFocusedTrigger()
						break
					case 'trigger_id':
						const id: string = await instance.parseVariablesInString(actionEvent.options.audio_item_id as string)
						instance.ProPresenter.audioPlaylistFocusedIdTrigger(id)
						break
					case 'focus_next':
						instance.ProPresenter.audioPlaylistNextFocus()
						break
					case 'focus_previous':
						instance.ProPresenter.audioPlaylistPreviousFocus()
						break
					default:
						instance.log('debug', 'Invalid focused_audioplaylist_operation: ' + options.focused_audioplaylist_operation)
				}
			},
		},
		[ActionId.identifiedAudioPlaylistOperation]: {
			name: 'Specific Audio Playlist: Operation',
			description: 'Perform an operation on a specifically identified Audio Playlist.',
			options: [options.specific_audioplaylist_operation, options.audio_playlist_id, options.audio_item_id],
			callback: async (actionEvent) => {
				const audio_playlist_id: string = await instance.parseVariablesInString(actionEvent.options.audio_playlist_id as string)
				switch (actionEvent.options.specific_audioplaylist_operation) {
					case 'focus':
						instance.ProPresenter.audioFocusPlaylistByPlaylistId(audio_playlist_id)
						break
					case 'trigger_next':
						instance.ProPresenter.audioPlaylistByPlaylistIdNextTrigger(audio_playlist_id)
						break
					case 'trigger_previous':
						instance.ProPresenter.audioPlaylistByPlaylistIdPreviousTrigger(audio_playlist_id)
						break
					case 'trigger_first':
						instance.ProPresenter.audioPlaylistByPlaylistIdTrigger(audio_playlist_id)
						break
					case 'trigger_id':
						const audio_item_id = await instance.parseVariablesInString(actionEvent.options.audio_item_id as string)
						instance.ProPresenter.triggerAudioPlaylistIDAudioID(audio_playlist_id, audio_item_id)
						break
					default:
						instance.log('debug', 'Invalid specific_audioplaylist_operation: ' + options.specific_audioplaylist_operation)
				}
			},
			learn: async (actionEvent) => {
				const focusedAudioPlaylist: RequestAndResponseJSONValue = await instance.ProPresenter.audioGetPlaylistFocused()
				if (focusedAudioPlaylist.data.uuid as string) {
					return {
						...actionEvent.options,
						audio_playlist_id: focusedAudioPlaylist.data.uuid
					}
				} else {
					return undefined
				}
			},
		},
		// **** CAPTURE *****
		[ActionId.captureOperation]: {
			name: 'Capture: Operation',
			description: 'Performs the requested capture operation (start, stop).',
			options: [options.capture_operation],
			callback: async (actionEvent) => {
				instance.ProPresenter.captureOperation(actionEvent.options.capture_operation as ProPresenterCaptureOperation)
			},
		},
		// **** CLEAR *****
		[ActionId.clearLayerOrGroup]: {
			name: 'Clear: Operation',
			description: 'Clear the specified Layer or Clear Group',
			options: [options.clear_layer_or_group_dropdown, options.clear_layer_dropdown, options.clear_group_id_dropdown, options.clear_group_id_text],
			callback: async (actionEvent) => {
				if (actionEvent.options.clear_layer_or_group_dropdown == 'layer') {
					instance.ProPresenter.clearLayer(actionEvent.options.clear_layer_dropdown as ProPresenterLayerName)
				} else {
					// Assume clearing a group if not a layer...

					let clear_group = ''
					if (actionEvent.options.clear_group_id_dropdown == 'manually_specify_cleargroupid')
						clear_group = await instance.parseVariablesInString(actionEvent.options.clear_group_id_text as string)
					else
						clear_group = actionEvent.options.clear_group_id_dropdown as string
					
					instance.ProPresenter.clearGroupIdTrigger(clear_group)
				}
			},
		},
		// **** LIBRARY ****
		[ActionId.libraryByIdPresentationIdCueTrigger]: {
			name: 'Library: Trigger Specific Slide in Specific Presentation',
			description: 'Triggers the specified cue of the specified presentation in the specified library.',
			options: [options.library_id, options.presentation_id, options.index],
			callback: async (actionEvent) => {
				const library_id = await instance.parseVariablesInString(actionEvent.options.library_id as string)
				const presentation_id = await instance.parseVariablesInString(actionEvent.options.presentation_id as string)
				const cue_index = await instance.parseVariablesInString(actionEvent.options.index as string)
				instance.ProPresenter.libraryByIdPresentationIdCueTrigger(library_id, presentation_id, cue_index)
			},
			learn: async (actionEvent) => {
				const focusedPresentation: RequestAndResponseJSONValue = await instance.ProPresenter.presentationFocusedGet()
				if (focusedPresentation.data.uuid as string) {
					return {
						...actionEvent.options,
						presentation_id: focusedPresentation.data.uuid
					}
				} else {
					return undefined
				}
			},
		},
		// **** LOOKS ****
		[ActionId.lookIdTrigger]: {
			name: 'Look: Trigger',
			description: 'Triggers the specified audience look to make it the live/current look.',
			options: [options.look_id_dropdown, options.look_id_text],
			callback: async (actionEvent) => {
				// user can either choose a look from the dropdown, or choose to manaully enter a look ID as text (in a separate input that supports variables)
				let look_id: string = ''
				if (actionEvent.options.look_id_dropdown == 'manually_specify_lookid')
					look_id = await instance.parseVariablesInString(actionEvent.options.look_id_text as string)
				else
					look_id = actionEvent.options.look_id_dropdown as string

				instance.ProPresenter.lookIdTrigger(look_id)
			},
			learn: (actionEvent) => {
				// Warning: The current look is not contained in the looks returned by GET /v1/looks as the current look gets special treatment in ProPresenter and cannot be deleted. It is separate and has it's own UUID.
				// So for looks, the learn function will take the name of the current (not it's ID) and match that in the list of defined looks to find it's ID.
				const active_look_name:any = instance.getVariableValue('active_look_name') // TODO: is there a better option than using "any" since it involve conversions from (CompanionVariableValue | undefined) to (CompanionOptionValues | undefined)

				if (instance.config.exta_debug_logs) {
					instance.log('debug', 'Variables(active_look_name): ' + active_look_name + ' CompanionActionEvent: ' + JSON.stringify(actionEvent))
				}
				
				const lookChoicesDropDown = actions[ActionId.lookIdTrigger]?.options[0] as CompanionInputFieldDropdown
				const lookChoices = lookChoicesDropDown.choices as DropdownChoice[]
				const active_look_UUID = lookChoices?.find(choice => choice.label === active_look_name)?.id
				if (active_look_UUID === undefined)
					return undefined

				return {...actionEvent.options, look_id_dropdown: active_look_UUID}

			},
		},
		// **** MACROS ****
		[ActionId.marcoIdTrigger]: {
			name: 'Macro: Trigger',
			description: 'Triggers the specified macro.',
			options: [options.macro_id_dropdown, options.macro_id_text],
			callback: async (actionEvent) => {
				// user can either choose a macro from the dropdown, or choose to manaully enter a macro ID as text (in a separate input that supports variables)
				let macro_id: string = ''
				if (actionEvent.options.macro_id_dropdown == 'manually_specify_macroid')
					macro_id = await instance.parseVariablesInString(actionEvent.options.macro_id_text as string)
				else
					macro_id = actionEvent.options.macro_id_dropdown as string

				instance.ProPresenter.marcoIdTrigger(macro_id)
			},
		},
		// **** MEDIA ****
		[ActionId.activeMediaPlaylistOperation]: {
			name: 'Active Media Playlist: Operation',
			description: 'Perform an operation on the Active Media Playlist.',
			options: [options.active_mediaplaylist_operation, options.media_item_id],
			callback: async (actionEvent) => {
				switch (actionEvent.options.active_mediaplaylist_operation) {
					case 'focus':
						instance.ProPresenter.mediaPlaylistActiveFocus()
						break
					case 'trigger_next':
						instance.ProPresenter.mediaPlaylistActiveNextTrigger()
						break
					case 'trigger_previous':
						instance.ProPresenter.mediaPlaylistActivePreviousTrigger()
						break
					case 'trigger_first':
						instance.ProPresenter.mediaPlaylistActiveTrigger()
						break
					case 'trigger_id':
						const media_item_id: string = await instance.parseVariablesInString(actionEvent.options.media_item_id as string)
						instance.ProPresenter.mediaPlaylistActiveMediaIdTrigger(media_item_id)
						break
					default:
						instance.log('debug', 'Invalid active_mediaplaylist_operation: ' + options.active_mediaplaylist_operation)
				}
			},
		},
		[ActionId.focusedMediaPlaylistOperation]: {
			name: 'Focused Media Playlist: Operation',
			description: 'Perform an operation on the Focused Media Playlist.',
			options: [options.focused_mediaplaylist_operation, options.media_item_id],
			callback: async (actionEvent) => {
				switch (actionEvent.options.focused_mediaplaylist_operation) {
					case 'trigger_next':
						instance.ProPresenter.mediaPlaylistFocusedNextTrigger()
						break
					case 'trigger_previous':
						instance.ProPresenter.mediaPlaylistFocusedPreviousTrigger()
						break
					case 'trigger_first':
						instance.ProPresenter.mediaPlaylistFocusedTrigger()
						break
					case 'trigger_id':
						const media_item_id: string = await instance.parseVariablesInString(actionEvent.options.media_item_id as string)
						instance.ProPresenter.mediaPlaylistFocusedMediaIdTrigger(media_item_id)
						break
					case 'focus_next':
						instance.ProPresenter.mediaPlaylistNextFocus()
						break
					case 'focus_previous':
						instance.ProPresenter.mediaPlaylistPreviousFocus()
						break
					default:
						instance.log('debug', 'Invalid focused_mediaplaylist_operation: ' + options.focused_mediaplaylist_operation)
				}
			},
		},
		[ActionId.identifiedMediaPlaylistOperation]: {
			name: 'Specific Media Playlist: Operation',
			description: 'Perform an operation on a specifically identified Media Playlist.',
			options: [options.specific_mediaplaylist_operation, options.media_playlist_id, options.media_item_id],
			callback: async (actionEvent) => {
				const media_playlist_id: string = await instance.parseVariablesInString(actionEvent.options.media_playlist_id as string)
				switch (actionEvent.options.specific_mediaplaylist_operation) {
					case 'focus':
						instance.ProPresenter.mediaPlaylistByPlaylistIdFocus(media_playlist_id)
						break
					case 'trigger_next':
						instance.ProPresenter.mediaPlaylistByPlaylistIdNextTrigger(media_playlist_id)
						break
					case 'trigger_previous':
						instance.ProPresenter.mediaPlaylistByPlaylistIdPreviousTrigger(media_playlist_id)
						break
					case 'trigger_first':
						instance.ProPresenter.mediaPlaylistByPlaylistIdTrigger(media_playlist_id)
						break
					case 'trigger_id':
						const media_item_id = await instance.parseVariablesInString(actionEvent.options.media_item_id as string)
						instance.ProPresenter.mediaPlaylistByPlaylistIdMediaIdTrigger(media_playlist_id, media_item_id)
						break
					default:
						instance.log('debug', 'Invalid specific_mediaplaylist_operation: ' + options.specific_mediaplaylist_operation)
				}
			},
			learn: async (actionEvent) => {
				const focusedMediaPlaylist: RequestAndResponseJSONValue = await instance.ProPresenter.mediaPlaylistFocusedGet()
				if (focusedMediaPlaylist.data.uuid as string) {
					return {
						...actionEvent.options,
						media_playlist_id: focusedMediaPlaylist.data.uuid
					}
				} else {
					return undefined
				}
			},
		},
		// **** MESSAGES ****
		[ActionId.messageOperation]: {
			name: 'Message: Operation',
			description: 'Perform an operation on the specified message',
			options: [
				options.message_operation,
				options.message_id_dropdown,
				options.message_id_text,
			],
			callback: async (actionEvent) => {
				// user can either choose a message from the dropdown, or choose to manaully enter a message ID as text (in a separate input that supports variables)
				let message_id: string = ''
				if (actionEvent.options.message_id_dropdown == 'manually_specify_messageid')
					message_id = await instance.parseVariablesInString(actionEvent.options.message_id_text as string)
				else
					message_id = actionEvent.options.message_id_dropdown as string

				switch (actionEvent.options.message_operation) {
					case 'show':
						// The (intially empty) array of text tokens to pass to MessageTrigger API
						let tokenNamesAndTextArray: {"name": string, "text":{"text":string}}[] = [];

						// For this messageOperation action, there are two fixed inputs "message_id_dropdown" and "message_id_text", and then a variable number of inputs for message tokens.
						// Note that this action actually has inputs for ALL message tokens for ALL messages and uses visability logic to only show the inputs for tokens relevent the selected message.
						// But we also need a way to know which token inputs belong to which message...
						// I could not find anywhere "proper" to store the message UUID with each token input (that seems to be accessible from this action's callback) so I have stuffed the "parent" message UUID into the ID of each token input field so this determination can be made by looking at the ID string!
						// Each input for a message token has an ID in the form of 'TokensParentMessageUUID__[???|txt|tmr]__TokenName', where MessageUUID is the uuid of the message that this token belongs to and then two underscores, *3 CHARS* for the token type and 2 more underscores and then the token name which is variable length.
						// For now, this is the only way I could think ot to support a dynamic number of tokens inputs per selected message in Companion ¯\_(ツ)_/¯
						// This loop will interate all token inputs and find matching token inputs for the selected message to build up the tokenNamesAndTextArray ready to pass to the API call
						for (const companionOptionValue in actionEvent.options) {
							if (instance.config.exta_debug_logs) {
								instance.log('debug', 'MMMM messageOperation Option: ' + JSON.stringify(companionOptionValue) + ' = ' + JSON.stringify(actionEvent.options[companionOptionValue]))
							}
							if (companionOptionValue.startsWith(actionEvent.options.message_id_dropdown as string)) { // The ID of the token input fields have the uuid of the message they belong to at the start of their own id string
								const token_name = companionOptionValue.slice((actionEvent.options.message_id_dropdown as string + '__???__').length) // Extract name from the ID that is always a contacatination of the uuid, 2 underscores, 3 char for the token type and 2 more underscores before the variable length token name
								const token_value = await instance.parseVariablesInString(actionEvent.options[companionOptionValue] as string)
								tokenNamesAndTextArray.push({"name": token_name, "text":{"text":token_value}})
							}
						}
						
						instance.ProPresenter.messageIdTrigger(message_id, JSON.stringify(tokenNamesAndTextArray))
						break
					case 'hide':
						instance.ProPresenter.messageIdClear(message_id)
						break
					default:
						instance.log('debug', 'Invalid message_operation ' + actionEvent.options.message_operation)
				}
			}
		},
		// **** MISC ****
		[ActionId.miscFindMyMouse]: {
			name: 'Misc: Find My Mouse',
			description: 'Moves mouse cursor to center of ProPresenter UI',
			options: [],
			callback: async () => {
				instance.ProPresenter.findMyMouse()
			},
		},
		// **** PLAYLIST ****
		[ActionId.activeAnnouncementPlaylistOperation]: {
			name: 'Active Announcement Playlist: Operation',
			description: 'Perform an operation on the Playlist that has the active announcement in it.',
			options: [options.active_announcement_playlist_operation, options.index],
			callback: async (actionEvent) => {
				switch (actionEvent.options.active_announcement_playlist_operation) {
					case 'focus':
						instance.ProPresenter.playlistActiveAnnouncementFocus()
						break
					case 'trigger_first':
						instance.ProPresenter.playlistActiveAnnouncementTrigger()
						break
					case 'trigger_index':
						const index: string = await instance.parseVariablesInString(actionEvent.options.index as string)
						instance.ProPresenter.playlistActiveAnnouncementIndexTrigger(index)
						break
					default:
						console.log('debug', 'Invalid active_announcement_playlist_operation: ' + actionEvent.options.active_announcement_playlist_operation)
				}
			}
		},
		[ActionId.activePresentationPlaylistOperation]: {
			name: 'Active Presentation Playlist: Operation',
			description: 'Perform an operation on the Playlist that has the active presentation in it.',
			options: [options.active_presentation_playlist_operation, options.index],
			callback: async (actionEvent) => {
				switch (actionEvent.options.active_presentation_playlist_operation) {
					case 'focus':
						instance.ProPresenter.playlistActivePresentationFocus()
						break
					case 'trigger_first':
						instance.ProPresenter.playlistActivePresentationTrigger()
						break
					case 'trigger_index':
						const index: string = await instance.parseVariablesInString(actionEvent.options.index as string)
						instance.ProPresenter.playlistActivePresentationIndexTrigger(index)
						break
					default:
						console.log('debug', 'Invalid active_presentation_playlist_operation: ' + actionEvent.options.active_presentation_playlist_operation)
				}
			},
			learn: async (actionEvent) => {
				const focusedPlaylist: RequestAndResponseJSONValue = await instance.ProPresenter.playlistFocusedGet()
				if (focusedPlaylist.data.item.index as string) {
					return {
						...actionEvent.options,
						index: focusedPlaylist.data.item.index,
					}
				} else {
					return undefined
				}
			},
		},
		[ActionId.focusedPlaylistOperation]: {
			name: 'Focused Playlist: Operation',
			description: 'Perform an operation on the focused Playlist.',
			options: [options.focused_playlist_operation, options.index],
			callback: async (actionEvent) => {
				switch (actionEvent.options.focused_playlist_operation) {
					case 'trigger_next':
						instance.ProPresenter.playlistFocusedNextTrigger()
						break
					case 'trigger_previous':
						instance.ProPresenter.playlistFocusedPreviousTrigger()
						break
					case 'trigger_first':
						instance.ProPresenter.playlistFocusedTrigger()
						break
					case 'trigger_index':
						const index: string = await instance.parseVariablesInString(actionEvent.options.index as string)
						instance.ProPresenter.playlistFocusedIndexTrigger(index)
						break
					case 'focus_next':
						instance.ProPresenter.playlistNextFocus()
						break
					case 'focus_previous':
						instance.ProPresenter.playlistPreviousFocus()
						break
					default:
						console.log('debug', 'Invalid focused_playlist_operation: ' + actionEvent.options.focused_playlist_operation)
				}
			},
			learn: async (actionEvent) => {
				const focusedPlaylist: RequestAndResponseJSONValue = await instance.ProPresenter.playlistFocusedGet()
				if (focusedPlaylist.data.item.index as string) {
					return {
						...actionEvent.options,
						index: focusedPlaylist.data.item.index,
					}
				} else {
					return undefined
				}
			},
		},
		[ActionId.specificPlaylistOperation]: {
			name: 'Specific Playlist: Operation',
			description: 'Perform an operation on a specifically identified Playlist.',
			options: [options.specific_playlist_operation, options.playlist_id, options.index],
			callback: async (actionEvent) => {
				const playlist_id: string = await instance.parseVariablesInString(actionEvent.options.playlist_id as string)
				switch (actionEvent.options.specific_playlist_operation) {
					case 'trigger_next':
						instance.ProPresenter.playlistByPlaylistIdNextTrigger(playlist_id)
						break
					case 'trigger_previous':
						instance.ProPresenter.playlistByPlaylistIdPreviousTrigger(playlist_id)
						break
					case 'trigger_first':
						instance.ProPresenter.playlistByPlaylistIdTrigger(playlist_id)
						break
					case 'trigger_index':
						const index: string = await instance.parseVariablesInString(actionEvent.options.index as string)
						instance.ProPresenter.playlistByPlaylistIdIndexTrigger(playlist_id, index)
						break
					default:
						console.log('debug', 'Invalid specific_playlist_operation: ' + actionEvent.options.specific_playlist_operation)
				}
			},
			learn: async (actionEvent) => {
				const focusedPlaylist: RequestAndResponseJSONValue = await instance.ProPresenter.playlistFocusedGet()
				if (focusedPlaylist.data.playlist.uuid as string) {
					return {
						...actionEvent.options,
						playlist_id: focusedPlaylist.data.playlist.uuid,
						index: focusedPlaylist.data.item.index,
					}
				} else {
					return undefined
				}
			},
		},
		// **** PRESENTATION ****
		[ActionId.activePresentationOperation]: {
			name: 'Active Presentation: Operation',
			description: 'Perform an operation on the Active Presentation.',
			options: [options.active_presentation_operation, options.index, options.group_id_dropdown, options.group_id_text, options.timeline_operation],
			callback: async (actionEvent) => {
				switch (actionEvent.options.active_presentation_operation) {
					case 'focus':
						instance.ProPresenter.presentationActiveFocus()
						break
					case 'trigger_next':
						instance.ProPresenter.presentationActiveNextTrigger()
						break
					case 'trigger_previous':
						instance.ProPresenter.presentationActivePreviousTrigger()
						break
					case 'trigger_first':
						instance.ProPresenter.presentationActiveTrigger()
						break
					case 'trigger_index':
						const index: string = await instance.parseVariablesInString(actionEvent.options.index as string)
						instance.ProPresenter.presentationActiveIndexTrigger(index)
						break
					case 'group':
						// user can either choose a Group from the dropdown, or choose to manually enter a Group ID as text (in a separate input that supports variables)
						let group_id: string = ''
						if (actionEvent.options.group_id_dropdown == 'manually_specify_groupid')
							group_id = await instance.parseVariablesInString(actionEvent.options.group_id_text as string)
						else
							group_id = actionEvent.options.group_id_dropdown as string

						instance.ProPresenter.presentationActiveGroupGroup_IdTrigger(group_id)
						break
					case 'timeline_operation':
						//const operation: string = await instance.parseVariablesInString(actionEvent.options.timeline_operation as string)
						instance.ProPresenter.presentationActiveTimelineOperation(actionEvent.options.timeline_operation as ProPresenterTimelineOperation)
						break
					default:
						console.log('debug', 'Invalid active_presentation_operation: ' + actionEvent.options.active_presentation_operation)
				}
			}
		},
		[ActionId.focusedPresentationOperation]: {
			name: 'Focused Presentation: Operation',
			description: 'Perform an operation on the Focused Presentation.',
			options: [options.focused_presentation_operation , options.index, options.group_id_dropdown, options.group_id_text, options.timeline_operation],
			callback: async (actionEvent) => {
				switch (actionEvent.options.focused_presentation_operation) {
					case 'trigger_next':
						instance.ProPresenter.presentationFocusedNextTrigger()
						break
					case 'trigger_previous':
						instance.ProPresenter.presentationFocusedPreviousTrigger()
						break
					case 'trigger_first':
						instance.ProPresenter.presentationFocusedTrigger()
						break
					case 'trigger_index':
						const index: string = await instance.parseVariablesInString(actionEvent.options.index as string)
						instance.ProPresenter.presentationFocusedIndexTrigger(index)
						break
					case 'group':
						// user can either choose a Group from the dropdown, or choose to manually enter a Group ID as text (in a separate input that supports variables)
						let group_id: string = ''
						if (actionEvent.options.group_id_dropdown == 'manually_specify_groupid')
							group_id = await instance.parseVariablesInString(actionEvent.options.group_id_text as string)
						else
							group_id = actionEvent.options.group_id_dropdown as string

						instance.ProPresenter.presentationFocusedGroupGroup_IdTrigger(group_id)
						break
					case 'timeline_operation':
						//const operation: string = await instance.parseVariablesInString(actionEvent.options.timeline_operation as string)
						instance.ProPresenter.presentationFocusedTimelineOperation(actionEvent.options.timeline_operation as ProPresenterTimelineOperation)
						break
					case 'focus_next':
						instance.ProPresenter.presentationNextFocus()
						break
					case 'focus_previous':
						instance.ProPresenter.presentationPreviousFocus()
						break
					default:
						console.log('debug', 'Invalid focused_presentation_operation: ' + actionEvent.options.focused_presentation_operation)
				}
			}
		},
		[ActionId.specificPresentationOperation]: {
			name: 'Specific Presentation: Operation',
			description: 'Perform an operation on a specifically identified Presentation.',
			options: [options.specific_presentation_operation, options.presentation_uuid, options.index, options.group_id_dropdown, options.group_id_text, options.timeline_operation],
			callback: async (actionEvent) => {
				const presentation_uuid: string = await instance.parseVariablesInString(actionEvent.options.presentation_uuid as string)
				switch (actionEvent.options.specific_presentation_operation) {
					case 'focus':
						instance.ProPresenter.presentationUUIDFocus(presentation_uuid)
						break
					case 'trigger_next':
						instance.ProPresenter.presentationUUIDNextTrigger(presentation_uuid)
						break
					case 'trigger_previous':
						instance.ProPresenter.presentationUUIDPreviousTrigger(presentation_uuid)
						break
					case 'trigger_first':
						instance.ProPresenter.presentationUUIDTrigger(presentation_uuid)
						break
					case 'trigger_index':
						const index: string = await instance.parseVariablesInString(actionEvent.options.index as string)
						instance.ProPresenter.presentationUUIDIndexTrigger(presentation_uuid, index)
						break
					case 'group':
						// user can either choose a Group from the dropdown, or choose to manually enter a Group ID as text (in a separate input that supports variables)
						let group_id: string = ''
						if (actionEvent.options.group_id_dropdown == 'manually_specify_groupid')
							group_id = await instance.parseVariablesInString(actionEvent.options.group_id_text as string)
						else
							group_id = actionEvent.options.group_id_dropdown as string

						instance.ProPresenter.presentationUUIDGroupGroup_IdTrigger(presentation_uuid, group_id)
						break
					case 'timeline_operation':
						instance.ProPresenter.presentationUUIDTimelineOperation(presentation_uuid, actionEvent.options.timeline_operation as ProPresenterTimelineOperation)
						break
					default:
						console.log('debug', 'Invalid specific_presentation_operation: ' + actionEvent.options.specific_presentation_operation)
				}
			},
			learn: async (actionEvent) => {
				const focusedPresentation: RequestAndResponseJSONValue = await instance.ProPresenter.presentationFocusedGet()
				if (focusedPresentation.data.uuid as string) {
					return {
						...actionEvent.options,
						presentation_uuid: focusedPresentation.data.uuid
					}
				} else {
					return undefined
				}
			},
		},
		// **** PROPS ****
		[ActionId.propOperation]: {
			name: 'Prop: Operation',
			description: 'Perform an operation of the specified prop.',
			options: [options.prop_operation, options.prop_id_dropdown, options.prop_id_text],
			callback: async (actionEvent) => {
				// user can either choose a prop from the dropdown, or choose to manually enter a prop ID as text (in a separate input that supports variables)
				let prop_id: string = ''
				if (actionEvent.options.prop_id_dropdown == 'manually_specify_propid')
					prop_id = await instance.parseVariablesInString(actionEvent.options.prop_id_text as string)
				else
					prop_id = actionEvent.options.prop_id_dropdown as string

				switch (actionEvent.options.prop_operation) {
					case 'show':
						instance.ProPresenter.propIdTrigger(prop_id)
						break
					case 'hide':
						instance.ProPresenter.propIdClear(prop_id)
						break
					default:
						instance.log('debug', 'Invalid prop_operation: ' + actionEvent.options.prop_operation)
				}
			},
		},
		// **** STAGE ****
		[ActionId.stageDisplayOperation]: {
			name: 'Stage Display: Operation',
			description: 'Perform an operation on the stage display',
			options: [options.stagedisplay_operation, options.stage_message_text, options.stagescreen_id_dropdown, options.stagescreen_id_text, options.stagescreenlayout_id_dropdown, options.stagescreenlayout_id_text],
			callback: async (actionEvent) => {
				switch (actionEvent.options.stagedisplay_operation) {
					case 'show_stage_message':
						const stage_message_text: string = await instance.parseVariablesInString(actionEvent.options.stage_message_text as string)
						instance.ProPresenter.stageMessage(stage_message_text).then((requestAndResponseJSON: RequestAndResponseJSONValue) => { // Leaving this here as an example to process an error from a ProPresenter request locally (instead of the catch-all emitter)
								if (!requestAndResponseJSON.ok){
									instance.log('debug', 'Request Error: ' + requestAndResponseJSON.status + '. ' + requestAndResponseJSON.data + '. Called: ' + requestAndResponseJSON.path + ' with body: ' + stage_message_text)
								}
						})
						break
					case 'hide_stage_message':
						instance.ProPresenter.stageMessageHide()
						break
					case 'set_layout':
						let stagescreen_id: string = ''
						if (actionEvent.options.stagescreen_id_dropdown == 'manually_specify_stagescreenid')
							stagescreen_id = await instance.parseVariablesInString(actionEvent.options.stagescreen_id_text as string)
						else
							stagescreen_id = actionEvent.options.stagescreen_id_dropdown as string

						let stagescreenlayout_id: string = ''
						if (actionEvent.options.stagescreenlayout_id_dropdown == 'manually_specify_stagescreenlayoutid')
							stagescreenlayout_id = await instance.parseVariablesInString(actionEvent.options.stagescreenlayout_id_text as string)
						else
							stagescreenlayout_id = actionEvent.options.stagescreenlayout_id_dropdown as string

						instance.ProPresenter.stageScreenIdSetLayoutId(stagescreen_id, stagescreenlayout_id)
						break
					default:
						instance.log('debug', 'Invalid stagedisplay_operation: ' + actionEvent.options.stagedisplay_operation)
				}
			},
		},
		// **** SCREENS ****
		[ActionId.screensOperation]: {
			name: 'Screens: Operation',
			description: 'Show or hide audience or stage screens.',
			options: [options.screens_choice, options.screens_operation],
			callback: async (actionEvent) => {
				switch (actionEvent.options.screens_choice) {
					case 'audience':
						if (actionEvent.options.screens_operation == 'toggle') {
							const currentStatus: RequestAndResponseJSONValue = await instance.ProPresenter.statusAudienceScreensGet()
							instance.ProPresenter.statusAudienceScreensSet(!currentStatus.data)
						} else {
							instance.ProPresenter.statusAudienceScreensSet(actionEvent.options.screens_operation == 'show')
						}
						break
					case 'stage':
						if (actionEvent.options.screens_operation == 'toggle') {
							const currentStatus: RequestAndResponseJSONValue = await instance.ProPresenter.statusStageScreensGet()
							instance.ProPresenter.statusStageScreensSet(!currentStatus.data)
						} else {
							instance.ProPresenter.statusStageScreensSet(actionEvent.options.screens_operation == 'show')
						}
						break
					default:
						instance.log('debug', 'Invalid screens_choice ' + actionEvent.options.screens_choice)
				}
				
			},
		},
		// **** TIMERS ****
		[ActionId.timerOperation]: {
			name: 'Timer: Operation',
			description: 'Performs an operation on the specified timer.',
			options: [options.timer_id_dropdown, options.timer_id_text, options.timer_operation, options.timer_increment_value, options.timer_type, options.timer_duration, options.timer_time_of_day, options.timer_timeperiod, options.timer_start_time, options.timer_end_time, options.timer_allows_overrun, options.timer_optional_operation, options.timer_new_name],
			callback: async (actionEvent) => {
				let timerID: string = ''
				if (actionEvent.options.video_input_id_dropdown == 'manually_specify_videoinputsid')
					timerID = await instance.parseVariablesInString(actionEvent.options.timer_id_text as string)
				else
					timerID = actionEvent.options.timer_id_dropdown as string

				switch (actionEvent.options.timer_operation) {
					case 'start':
					case 'stop':
					case 'reset':
						instance.ProPresenter.timerIdOperation(timerID, actionEvent.options.timer_operation as ProPresenterTimerOperation)
						break
					case 'increment':
						const timer_increment_value = await instance.parseVariablesInString(actionEvent.options.timer_increment_value as string)
						instance.ProPresenter.timerIdIncrement(timerID, parseInt(timer_increment_value))
						break
					case 'set':
						const newTimerName: string = await instance.parseVariablesInString(actionEvent.options.timer_new_name as string)
						const timerDurationString: string = await instance.parseVariablesInString(actionEvent.options.timer_duration as string)
						const timerDurationNumber: number = (timerDurationString.includes(":")) ? timestampToSeconds(timerDurationString) : Number(timerDurationString)
						const timeOfDayString: string = await instance.parseVariablesInString(actionEvent.options.timer_time_of_day as string)
						const timeOfDayNumber: number = (timeOfDayString.includes(":")) ? timestampToSeconds(timeOfDayString) : Number(timeOfDayString)
						const timerType: string = actionEvent.options.timer_type as string
						const startTimeString: string = await instance.parseVariablesInString(actionEvent.options.timer_start_time as string)
						const startTimeNumber: number = (startTimeString.includes(":")) ? timestampToSeconds(startTimeString) : Number(startTimeString)
						const endTimeString: string = await instance.parseVariablesInString(actionEvent.options.timer_end_time as string)
						const endTimeNumber: number = (endTimeString.includes(":")) ? timestampToSeconds(endTimeString) : Number(endTimeString)
						const optionalOperation: ProPresenterTimerOperation | undefined = (actionEvent.options.timer_optional_operation  == 'none') ? undefined : actionEvent.options.timer_optional_operation as ProPresenterTimerOperation

						switch (timerType) {
							case 'countdown':
								instance.ProPresenter.timerIdSetToCountdown(timerID, timerDurationNumber, actionEvent.options.timer_allows_overrun as boolean, optionalOperation, (newTimerName != '') ? newTimerName : undefined) // Only rename if new name is not blank
								break
							case 'countdownto':
								instance.ProPresenter.timerIdSetToCountdownToTime(timerID, timeOfDayNumber, actionEvent.options.timer_timeperiod as ProPresenterTimePeriod, actionEvent.options.timer_allows_overrun as boolean, optionalOperation, (newTimerName != '') ? newTimerName : undefined) // Only rename if new name is not blank
								break
							case 'elapsed':
								instance.ProPresenter.timerIdSetToElapsed(timerID, startTimeNumber, actionEvent.options.timer_allows_overrun as boolean, (endTimeNumber > 0) ? endTimeNumber : undefined, optionalOperation, (newTimerName != '') ? newTimerName : undefined) // Only pass endTime if it was > 0 and only rename if new name is not blank
								break
							default:
								instance.log('debug', 'Invalid timer type: ' + timerType)
						}
						break
					default:
						instance.log('debug', 'Invalid timer_operation' + actionEvent.options.timer_operation)
				}
			},
		},
		// **** TRANSPORT ****
		[ActionId.transportLayerOperation]: {
			name: 'Transport Control: Operation',
			description: 'Perform a Transport Control Operation for a specified layer',
			options: [options.transport_layer, options.transport_operation, options.transport_skip_time, options.transport_goto_time, options.transport_goto_end_time],
			callback: async (actionEvent) => {
				switch (actionEvent.options.transport_operation) {
					case 'play':
						instance.ProPresenter.transportLayerPlay(actionEvent.options.transport_layer as ProPresenterLayerWithTransportControl)
						break
					case 'pause':
						instance.ProPresenter.transportLayerPause(actionEvent.options.transport_layer as ProPresenterLayerWithTransportControl)
						break
					case 'toggle_play_pause':
						const transport_layer = actionEvent.options.transport_layer as ProPresenterLayerWithTransportControl
						const layer_transport_status = await instance.ProPresenter.transportLayerCurrent(transport_layer)
						if (layer_transport_status.ok) {
							if (layer_transport_status.data.is_playing)
								instance.ProPresenter.transportLayerPause(transport_layer)
							else
								instance.ProPresenter.transportLayerPlay(transport_layer)
						}
						break
					case 'skip_forward':
						const transport_skip_forward_time_string = await instance.parseVariablesInString(actionEvent.options.transport_skip_time as string)
						instance.ProPresenter.transportLayerSkipForwardTime(actionEvent.options.transport_layer as ProPresenterLayerWithTransportControl, parseInt(transport_skip_forward_time_string))
						break
					case 'skip_backward':
						const transport_skip_backward_time_string = await instance.parseVariablesInString(actionEvent.options.transport_skip_time as string)
						instance.ProPresenter.transportLayerSkipBackwardTime(actionEvent.options.transport_layer as ProPresenterLayerWithTransportControl, parseInt(transport_skip_backward_time_string))
						break
					case 'go_to_time':
						const transport_goto_time_string = await instance.parseVariablesInString(actionEvent.options.transport_goto_time as string)
						instance.ProPresenter.transportLayerTimeSet(actionEvent.options.transport_layer as ProPresenterLayerWithTransportControl, parseInt(transport_goto_time_string))
						break
					case 'go_to_end':
						const transport_goto_end_time = await instance.parseVariablesInString(actionEvent.options.transport_goto_end_time as string)
						instance.ProPresenter.transportLayerGoToEnd(actionEvent.options.transport_layer as ProPresenterLayerWithTransportControl, parseInt(transport_goto_end_time))
						break
					default:
						instance.log('debug', 'Invalid Transport Operation: ' + actionEvent.options.transport_operation)
				}
			}
		},
		// **** TRIGGER *****
		[ActionId.triggerOperation]: {
			name: 'Trigger: Operation',
			description: 'Triggers the next/previous item in the focused presentation, audio playlist or media playlist.',
			options: [options.trigger_target, options.trigger_next_previous],
			callback: async (actionEvent) => {
				switch (actionEvent.options.trigger_target) {
					case 'presentation':
						if (actionEvent.options.trigger_next_previous == 'next')
							instance.ProPresenter.triggerNext()
						else
							instance.ProPresenter.triggerPrevious()
						break
					case 'media':
						if (actionEvent.options.trigger_next_previous == 'next')
							instance.ProPresenter.triggerMediaNext()
						else
							instance.ProPresenter.triggerMediaPrevious()
						break
					case 'audio':
						if (actionEvent.options.trigger_next_previous == 'next')
							instance.ProPresenter.triggerAudioNext()
						else
							instance.ProPresenter.triggerAudioPrevious()
						break
					default:
						instance.log('debug', 'Invalid Trigger Type: ' + actionEvent.options.trigger_target)
				}
			},
		},
		// ****VIDEO INPUTS ****
		[ActionId.videoInputsIdTrigger]: {
			name: 'VideoInputs: Trigger',
			description: 'Triggers a video input from the video inputs playlist.',
			options: [options.video_input_id_dropdown, options.video_input_id_text],
			callback: async (actionEvent) => {
				// user can either choose a video input from the dropdown, or choose to manaully enter a video input ID as text (in a separate input that supports variables)
				let video_input_id: string = ''
				if (actionEvent.options.video_input_id_dropdown == 'manually_specify_videoinputsid')
					video_input_id = await instance.parseVariablesInString(actionEvent.options.video_input_id_text as string)
				else
					video_input_id = actionEvent.options.video_input_id_dropdown as string

				instance.ProPresenter.videoInputsIdTrigger(video_input_id)
			},
		},
	}

	// Update look choices with data from propresenterStateStore
	const lookChoicesDropDown = actions[ActionId.lookIdTrigger]?.options[0] as CompanionInputFieldDropdown
	const manual_look_choice = lookChoicesDropDown.choices.pop() // The last item in the looks choices list (after all the current looks list from ProPresenter) is ALWAYS a placeholder, that when selected, allows for manually specifing the Look (in another text input)
	lookChoicesDropDown.choices = instance.propresenterStateStore.looksChoices.concat(manual_look_choice as DropdownChoice)
	lookChoicesDropDown.default = lookChoicesDropDown.choices[0].id

	// Update macro choices with data from propresenterStateStore
	const macroChoicesDropDown = actions[ActionId.marcoIdTrigger]?.options[0] as CompanionInputFieldDropdown
	const manual_macro_choice = macroChoicesDropDown.choices.pop() // The last item in the macro choices list (after all the current macros list from ProPresenter) is a placeholder, that when selected, allows for manually specifing the Macro (in another text input)
	macroChoicesDropDown.choices = instance.propresenterStateStore.macroChoices.concat(manual_macro_choice as DropdownChoice) 
	macroChoicesDropDown.default = macroChoicesDropDown.choices[0].id
	
	// Update prop choices with data from propresenterStateStore
	const propChoicesDropDown = actions[ActionId.propOperation]?.options[1] as CompanionInputFieldDropdown
	const manual_prop_choice = propChoicesDropDown.choices.pop() // The last item in the prop choices list (after all the current props list from ProPresenter) is a placeholder, that when selected, allows for manually specifing the Prop (in another text input)
	propChoicesDropDown.choices = instance.propresenterStateStore.propChoices.concat(manual_prop_choice as DropdownChoice) 
	propChoicesDropDown.default = propChoicesDropDown.choices[0].id
	
	// Update video input choices with data from propresenterStateStore
	const videoInputChoicesDropDown = actions[ActionId.videoInputsIdTrigger]?.options[0] as CompanionInputFieldDropdown
	const manual_video_input_choice = videoInputChoicesDropDown.choices.pop() // The last item in the video inputs choices list (after all the current video inputs list from ProPresenter) is a placeholder, that when selected, allows for manually specifing the Video Input (in another text input)
	videoInputChoicesDropDown.choices = instance.propresenterStateStore.videoInputChoices.concat(manual_video_input_choice as DropdownChoice) 
	videoInputChoicesDropDown.default = videoInputChoicesDropDown.choices[0].id
	
	// Update timer choices with data from propresenterStateStore
	const timerChoicesDropDown = actions[ActionId.timerOperation]?.options[0] as CompanionInputFieldDropdown
	const manual_timer_choice = timerChoicesDropDown.choices.pop() // The last item in the timer choices list (after all the current timers list from ProPresenter) is a placeholder, that when selected, allows for manually specifing the Timer (in another text input)
	timerChoicesDropDown.choices = instance.propresenterStateStore.timerChoices.concat(manual_timer_choice as DropdownChoice) 
	timerChoicesDropDown.default = timerChoicesDropDown.choices[0].id
	
	// Update stagescreen choices with data from propresenterStateStore
	const stageScreenChoicesDropDown = actions[ActionId.stageDisplayOperation]?.options[2] as CompanionInputFieldDropdown
	const manual_stagescreen_choice = stageScreenChoicesDropDown.choices.pop() // The last item in the stage screen choices list (after all the current stage screens list from ProPresenter) is a placeholder, that when selected, allows for manually specifing the stage screen (in another text input)
	stageScreenChoicesDropDown.choices = instance.propresenterStateStore.stageScreenChoices.concat(manual_stagescreen_choice as DropdownChoice) 
	stageScreenChoicesDropDown.default = stageScreenChoicesDropDown.choices[0].id
	
	// Update stagescreen layout choices with data from propresenterStateStore
	const stageScreenLayoutChoicesDropDown = actions[ActionId.stageDisplayOperation]?.options[4] as CompanionInputFieldDropdown
	const manual_stagescreenlayout_choice = stageScreenLayoutChoicesDropDown.choices.pop() // The last item in the stage screen layout choices list (after all the current stage screen layouts list from ProPresenter) is a placeholder, that when selected, allows for manually specifing the stage screen layout (in another text input)
	stageScreenLayoutChoicesDropDown.choices = instance.propresenterStateStore.stageScreenLayoutChoices.concat(manual_stagescreenlayout_choice as DropdownChoice) 
	stageScreenLayoutChoicesDropDown.default = stageScreenLayoutChoicesDropDown.choices[0].id
	
	// Update message choices with data from propresenterStateStore
	const messageChoicesDropDown = actions[ActionId.messageOperation]?.options[1] as CompanionInputFieldDropdown
	const manual_message_choice = messageChoicesDropDown.choices.pop() // The last item in the message choices list (after all the current messages list from ProPresenter) is a placeholder, that when selected, allows for manually specifing the message (in another text input)
	messageChoicesDropDown.choices = instance.propresenterStateStore.messageChoices.concat(manual_message_choice as DropdownChoice) 
	messageChoicesDropDown.default = messageChoicesDropDown.choices[0].id
	
	// Update group choices with data from propresenterStateStore
	const groupChoicesDropDown = actions[ActionId.activePresentationOperation]?.options[2] as CompanionInputFieldDropdown  // This dropdown is used in multiple actions - but updating in this one action, updates for all the others (phew)
	const manual_group_choice = groupChoicesDropDown.choices.pop() // The last item in the group choices list (after all the current group list from ProPresenter) is a placeholder, that when selected, allows for manually specifing the group (in another text input)
	groupChoicesDropDown.choices = instance.propresenterStateStore.groupChoices.concat(manual_group_choice as DropdownChoice) 
	groupChoicesDropDown.default = groupChoicesDropDown.choices[0].id

	// Update clearGroup choices with data from propresenterStateStore
	const clearGroupChoicesDropDown = actions[ActionId.clearLayerOrGroup]?.options[2] as CompanionInputFieldDropdown
	const manual_clearGroup_choice = clearGroupChoicesDropDown.choices.pop() // The last item in the group choices list (after all the current group list from ProPresenter) is a placeholder, that when selected, allows for manually specifing the group (in another text input)
	clearGroupChoicesDropDown.choices = instance.propresenterStateStore.clearGroupChoices.concat(manual_clearGroup_choice as DropdownChoice) 
	clearGroupChoicesDropDown.default = clearGroupChoicesDropDown.choices[0].id
	
	// Update messageTokenInputs with data from propresenterStateStore
	let messageOperationAction = actions[ActionId.messageOperation]
	if (messageOperationAction) {
		let messsageIdTriggerActionOptions = messageOperationAction?.options
		messageOperationAction.options = [...messsageIdTriggerActionOptions, ...instance.propresenterStateStore.messageTokenInputs]
		if (instance.config.exta_debug_logs) {
			instance.log('debug', 'MMMMM messageOperationAction.options: ' + JSON.stringify(messageOperationAction.options))
		}
	}

	return actions
}

export enum ActionId {
	// Announcement
	activeAnnouncementOperation = 'activeAnnouncementOperation',

	// Audio
	activeAudioPlaylistOperation = 'activeAudioPlaylistOperation',
	focusedAudioPlaylistOperation = 'focusedAudioPlaylistOperation',
	identifiedAudioPlaylistOperation = 'identifiedAudioPlaylistOperation',

	// Capture
	captureOperation = 'captureOperation',

	// Clear
	clearLayerOrGroup = 'clearLayerOrGroup',

	// Library
	libraryByIdPresentationIdCueTrigger = 'libraryByIdPresentationIdCueTrigger',

	// Looks
	lookIdTrigger = 'lookIdTrigger',

	// Macros
	marcoIdTrigger = 'marcoIdTrigger',

	// Media
	activeMediaPlaylistOperation = 'activeMediaPlaylistOperation',
	focusedMediaPlaylistOperation = 'focusedMediaPlaylistOperation',
	identifiedMediaPlaylistOperation = 'identifiedMediaPlaylistOperation',

	// Messages
	messageOperation = 'messageOperation',

	// Misc
	miscFindMyMouse = 'miscFindMyMouse',

	// Playlist
	activePresentationPlaylistOperation = 'activePresentationPlaylistOperation',
	activeAnnouncementPlaylistOperation = 'activeAnnouncementPlaylistOperation',
	focusedPlaylistOperation = 'focusedPlaylistOperation',
	specificPlaylistOperation = 'specificPlaylistOperation',

	// Presentation
	activePresentationOperation = 'activePresentationOperation',
	focusedPresentationOperation = 'focusedPresentationOperation',
	specificPresentationOperation = 'specificPresentationOperation',

	// Props
	propOperation = 'propOperation',

	// Stage
	stageDisplayOperation = 'stageDisplayOperation',

	// Screens
	screensOperation = 'screensOperation',

	// Timers
	timerOperation = 'timerOperation',

	// Transport
	transportLayerOperation = 'transportLayerOperation', // TODO transportlayercancelautoadvance

	// Trigger
	triggerOperation = 'triggerOperation',

	// Video Input
	videoInputsIdTrigger = 'videoInputsIdTrigger',
}
