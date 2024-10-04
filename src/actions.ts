import { CompanionActionDefinition, CompanionActionDefinitions, CompanionInputFieldDropdown, DropdownChoice } from '@companion-module/base'
import { DeviceConfig, InstanceBaseExt } from './config'
import { options, timestampToSeconds} from './utils'
import { ProPresenterLayerName, ProPresenterCaptureOperation, RequestAndResponseJSONValue, ProPresenterTimerOperation, ProPresenterTimelineOperation, ProPresenterTimePeriod, ProPresenterLayerWithTransportControl} from 'renewedvision-propresenter'

export function GetActions(instance: InstanceBaseExt<DeviceConfig>): CompanionActionDefinitions {
	const actions: { [id in ActionId]: CompanionActionDefinition | undefined } = {
		// **** ANNOUNCEMENT *****
		[ActionId.announcementActiveFocus]: {
			name: 'Announcement: Active: Focus',
			description: 'Focuses the currently active announcement presentation.',
			options: [],
			callback: () => {
				instance.ProPresenter.announcementActiveFocus()
			},
		},
		[ActionId.announcementActiveTrigger]: {
			name: 'Announcement: Active: Trigger (Restarts)',
			description: 'Retriggers the currently active announcement presentation (Starts from the beginning).',
			options: [],
			callback: () => {
				instance.ProPresenter.announcementTrigger()
			},
		},
		[ActionId.announcementActiveNextTrigger]: {
			name: 'Announcement: Active: Next: Trigger',
			description: 'Triggers the next cue in the active announcement presentation (if there is one)',
			options: [],
			callback: () => {
				instance.ProPresenter.announcementNextTrigger()
			},
		},
		[ActionId.announcementActivePreviousTrigger]: {
			name: 'Announcement: Active: Previous: Trigger',
			description: 'Triggers the previous cue in the active announcement presentation (if there is one)',
			options: [],
			callback: () => {
				instance.ProPresenter.announcementPreviousTrigger()
			},
		},
		[ActionId.announcementActiveIndexTrigger]: {
			name: 'Announcement: Active: Index: Trigger',
			description: 'Triggers the specified cue (by index) in the currently active announcement presentation.',
			options: [options.index],
			callback: async (actionEvent) => {
				const index: string = await instance.parseVariablesInString(actionEvent.options.index as string)
				instance.ProPresenter.announcementActiveIndexTrigger(index)
			},
		},
		[ActionId.announcementActiveTimelineOperation]: {
			name: 'Announcement: Active: Timeline Operation',
			description: 'Performs the requested timeline operation for the active announcment presentation.',
			options: [options.timeline_operation],
			callback: async (actionEvent) => {
				const operation: string = await instance.parseVariablesInString(actionEvent.options.timeline_operation as string)
				instance.ProPresenter.announcementActiveTimelineOperation(operation as ProPresenterTimelineOperation)
			},
		},
		// **** AUDIO *****
		[ActionId.audioPlaylistActiveFocus]: {
			name: 'Audio: Playlist: Active: Focus',
			description: 'Focuses the active audio playlist.',
			options: [],
			callback: () => {
				instance.ProPresenter.audioPlaylistActiveFocus()
			},
		},
		[ActionId.audioPlaylistActiveNextTrigger]: {
			name: 'Audio: Playlist: Active: Next: Trigger',
			description: 'Triggers the next item in the active audio playlist.',
			options: [],
			callback: () => {
				instance.ProPresenter.audioPlaylistActiveNextTrigger()
			},
		},
		[ActionId.audioPlaylistActivePreviousTrigger]: {
			name: 'Audio: Playlist: Active: Previous: Trigger',
			description: 'Triggers the previous item in the active audio playlist.',
			options: [],
			callback: () => {
				instance.ProPresenter.audioPlaylistActivePreviousTrigger()
			},
		},
		[ActionId.audioPlaylistActiveTrigger]: {
			name: 'Audio: Playlist: Active: Trigger',
			description: 'Triggers the active audio playlist (restarts from the beginning).',
			options: [],
			callback: async () => {
				instance.ProPresenter.audioPlaylistActiveTrigger()
			},
		},
		[ActionId.audioPlaylistActiveIdTrigger]: {
			name: 'Audio: Playlist: Active: ID: Trigger',
			description: 'Triggers the specified item in the active audio playlist.',
			options: [options.audio_item_id],
			callback: async (actionEvent) => {
				const id: string = await instance.parseVariablesInString(actionEvent.options.audio_item_id as string)
				instance.ProPresenter.audioPlaylistActiveIdTrigger(id)
			},
		},
		[ActionId.audioPlaylistFocusedNextTrigger]: {
			name: 'Audio: Playlist: Focused: Next: Trigger',
			description: 'Triggers the next item in the focused audio playlist.',
			options: [],
			callback: () => {
				instance.ProPresenter.audioPlaylistFocusedNextTrigger()
			},
		},
		[ActionId.audioPlaylistFocusedPreviousTrigger]: {
			name: 'Audio: Playlist: Focused: Previous: Trigger',
			description: 'Triggers the previous item in the focused audio playlist.',
			options: [],
			callback: () => {
				instance.ProPresenter.audioPlaylistFocusedPreviousTrigger()
			},
		},
		[ActionId.audioPlaylistFocusedTrigger]: {
			name: 'Audio: Playlist: Focused: Trigger',
			description: 'Triggers the focused audio playlist.',
			options: [],
			callback: () => {
				instance.ProPresenter.audioPlaylistFocusedTrigger()
			},
		},
		[ActionId.audioPlaylistFocusedIdTrigger]: {
			name: 'Audio: Playlist: Focused: Id: Trigger',
			description: 'Triggers the specified item in the focused audio playlist.',
			options: [options.audio_item_id],
			callback: async (actionEvent) => {
				const id: string = await instance.parseVariablesInString(actionEvent.options.audio_item_id as string)
				instance.ProPresenter.audioPlaylistFocusedIdTrigger(id)
			},
		},
		[ActionId.audioPlaylistNextFocus]: {
			name: 'Audio: Playlist: Next: Focus',
			description: 'Focuses the next audio playlist.',
			options: [],
			callback: () => {
				instance.ProPresenter.audioPlaylistNextFocus()
			},
		},
		[ActionId.audioPlaylistPreviousFocus]: {
			name: 'Audio: Playlist: Previous: Focus',
			description: 'Focuses the previous audio playlist.',
			options: [],
			callback: () => {
				instance.ProPresenter.audioPlaylistPreviousFocus()
			},
		},
		[ActionId.audioPlaylistByPlaylistIdFocus]: {
			name: 'Audio: Playlist: PlaylistID: Focus',
			options: [options.audio_playlist_id],
			callback: async (actionEvent) => {
				const audio_playlist_id: string = await instance.parseVariablesInString(actionEvent.options.audio_playlist_id as string)
				instance.ProPresenter.audioFocusPlaylistByPlaylistId(audio_playlist_id)
			},
		},
		[ActionId.audioPlaylistByPlaylistIdNextTrigger]: {
			name: 'Audio: Playlist: PlaylistID: Next: Trigger',
			options: [options.audio_playlist_id],
			callback: async (actionEvent) => {
				const audio_playlist_id: string = await instance.parseVariablesInString(actionEvent.options.audio_playlist_id as string)
				instance.ProPresenter.audioPlaylistByPlaylistIdNextTrigger(audio_playlist_id)
			},
		},
		[ActionId.audioPlaylistByPlaylistIdPreviousTrigger]: {
			name: 'Audio: Playlist: PlaylistID: Previous: Trigger',
			options: [options.audio_playlist_id],
			callback: async (actionEvent) => {
				const audio_playlist_id = await instance.parseVariablesInString(actionEvent.options.audio_playlist_id as string)
				instance.ProPresenter.audioPlaylistByPlaylistIdPreviousTrigger(audio_playlist_id)
			},
		},
		[ActionId.audioPlaylistByPlaylistIdTrigger]: {
			name: 'Audio: Playlist: PlaylistID: Trigger',
			description: 'Triggers the specified audio playlist.',
			options: [options.audio_playlist_id],
			callback: async (actionEvent) => {
				const audio_playlist_id: string = await instance.parseVariablesInString(actionEvent.options.audio_playlist_id as string)
				instance.ProPresenter.audioPlaylistByPlaylistIdTrigger(audio_playlist_id)
			},
		},
		[ActionId.audioPlaylistByPlaylistIDAudioItemIDTrigger]: {
			name: 'Audio: Playlist: PlaylistID: AudioItemID: Trigger',
			description: 'Triggers the specified audio item, in the specified audio playlist.',
			options: [options.audio_playlist_id, options.audio_item_id],
			callback: async (actionEvent) => {
				const audio_playlist_id = await instance.parseVariablesInString(actionEvent.options.audio_playlist_id as string)
				const audio_item_id = await instance.parseVariablesInString(actionEvent.options.audio_item_id as string)
				instance.ProPresenter.triggerAudioPlaylistIDAudioID(audio_playlist_id, audio_item_id)
			}
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
		[ActionId.clearLayer]: {
			name: 'Clear: Layer',
			description: 'Clears the specified layer (audio, props, messages, announcements, slide, media, video_input).',
			options: [options.layer],
			callback: async (actionEvent) => {
				instance.ProPresenter.clearLayer(actionEvent.options.layer as ProPresenterLayerName)
			},
		},
		// **** LIBRARY ****
		[ActionId.libraryByIdPresentationIdCueTrigger]: {
			name: 'Library: LibraryID: PresentationID: CueIndex: Trigger',
			description: 'Triggers the specified cue of the specified presentation in the specified library.',
			options: [options.library_id, options.presentation_id, options.index],
			callback: async (actionEvent) => {
				const library_id = await instance.parseVariablesInString(actionEvent.options.library_id as string)
				const presentation_id = await instance.parseVariablesInString(actionEvent.options.presentation_id as string)
				const cue_index = await instance.parseVariablesInString(actionEvent.options.index as string)
				instance.ProPresenter.libraryByIdPresentationIdCueTrigger(library_id, presentation_id, cue_index)
			}
		},
		// **** LOOKS ****
		[ActionId.lookIdTrigger]: {
			name: 'Look: ID: Trigger',
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
				const active_look_name:any = instance.getVariableValue('active_look_name') // TODO: is there a better option than using "any" since it involve conversion from (CompanionVariableValue | undefined) to (CompanionOptionValues | undefined)
				instance.log('debug', 'Variables(active_look_name): ' + active_look_name + ' CompanionActionEvent: ' + JSON.stringify(actionEvent))
				
				const lookChoicesDropDown = actions[ActionId.lookIdTrigger]?.options[0] as CompanionInputFieldDropdown
				const lookChoices = lookChoicesDropDown.choices as DropdownChoice[]
				const active_look_UUID = lookChoices?.find(choice => choice.label === active_look_name)?.id
				if (active_look_UUID === undefined)
					return undefined

				return {...actionEvent.options, look_id_dropdown: active_look_UUID}

			}
		},
		// **** MACROS ****
		[ActionId.marcoIdTrigger]: {
			name: 'Macro: ID: Trigger',
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
		[ActionId.mediaPlaylistPlaylistIdMediaIdTrigger]: {
			name: 'Media: PlaylistId: MediaId: Trigger',
			description: 'Triggers the specified item in the specified media playlist.',
			options: [options.media_playlist_id, options.media_id],
			callback: async (actionEvent) => {
				const media_playlist_id = await instance.parseVariablesInString(actionEvent.options.media_playlist_id as string)
				const media_id = await instance.parseVariablesInString(actionEvent.options.media_id as string)
				instance.ProPresenter.mediaPlaylistPlaylistIdMediaIdTrigger(media_playlist_id, media_id)
			}

		},
		// **** MESSAGES ****
		[ActionId.messageIdTrigger]: {
			name: 'Messages: ID: Trigger',
			description: 'Triggers/Shows the specified message',
			options: [options.message_id_dropdown,
				options.message_id_text,
			],
			callback: async (actionEvent) => {
				// user can either choose a message from the dropdown, or choose to manaully enter a message ID as text (in a separate input that supports variables)
				let message_id: string = ''
				if (actionEvent.options.message_id_dropdown == 'manually_specify_messageid')
					message_id = await instance.parseVariablesInString(actionEvent.options.message_id_text as string)
				else
					message_id = actionEvent.options.message_id_dropdown as string

				// The (intially empty) array of text tokens to pass to MessageTrigger API
				let tokenNamesAndTextArray: {"name": string, "text":{"text":string}}[] = [];

				// For the messageIdTriggeraction, there are two fixed inputs "message_id_dropdown" and "message_id_text", and then a variable number of inputs for message tokens.
				// Note that this action actually has inputs for ALL message tokens for ALL messages and uses visability logic to only show the inputs for tokens relevent the selected message.
				// But we also need a way to know which token inputs belong to which message...
				// I could not find anywhere "proper" to store the message UUID with each token input (that seems to be accessible from this action's callback) so I have stuffed the "parent" message UUID into the ID of each token input field so this determination can be made by looking at the ID string!
				// Each input for a message token has an ID in the form of 'TokensParentMessageUUID__[???|txt|tmr]__TokenName', where MessageUUID is the uuid of the message that this token belongs to and then two underscores, *3 CHARS* for the token type and 2 more underscores and then the token name which is variable length.
				// For now, this is the only way I could think ot to support a dynamic number of tokens inputs per selected message in Companion ¯\_(ツ)_/¯
				// This loop will interate all token inputs and find matching token inputs for the selected message to build up the tokenNamesAndTextArray ready to pass to the API call
				for (const companionOptionValue in actionEvent.options) {
					//instance.log('debug', 'ZZZZ Checking: ' + JSON.stringify(companionOptionValue) + ' = ' + JSON.stringify(actionEvent.options[companionOptionValue]))
					if (companionOptionValue.startsWith(actionEvent.options.message_id_dropdown as string)) { // The ID of the token input fields have the uuid of the message they belong to at the start of their own id string
						const token_name = companionOptionValue.slice((actionEvent.options.message_id_dropdown as string + '__???__').length) // Extract name from the ID that is always a contacatination of the uuid, 2 underscores, 3 char for the token type and 2 more underscores before the variable length token name
						const token_value = await instance.parseVariablesInString(actionEvent.options[companionOptionValue] as string)
						tokenNamesAndTextArray.push({"name": token_name, "text":{"text":token_value}})
					}
				}
				
				instance.ProPresenter.messageIdTrigger(message_id, JSON.stringify(tokenNamesAndTextArray))
			}
		},
		[ActionId.messageIdClear]: {
			name: 'Messages: ID: Clear',
			description: 'Clears/Hides the specified message',
			options: [options.message_id_dropdown, options.message_id_text],
			callback: async (actionEvent) => {
				// user can either choose a message from the dropdown, or choose to manaully enter a message ID as text (in a separate input that supports variables)
				let message_id: string = ''
				if (actionEvent.options.message_id_dropdown == 'manually_specify_messageid')
					message_id = await instance.parseVariablesInString(actionEvent.options.message_id_text as string)
				else
					message_id = actionEvent.options.message_id_dropdown as string

				instance.ProPresenter.messageIdClear(message_id)
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
		[ActionId.playlistIdentifierTrigger]: {
			name: 'Playlist: ID: Trigger',
			description: 'Triggers the first item in the specified playlist.',
			options: [options.playlist_id],
			callback: async (actionEvent) => {
				const playlist_id: string = await instance.parseVariablesInString(actionEvent.options.playlist_id as string)
				instance.ProPresenter.playlistIdentifierTrigger(playlist_id)
			}
		},
		[ActionId.playlistIdentifierIndexTrigger]: {
			name: 'Playlist: ID: Index: Trigger',
			description: 'Triggers the specified item in the specified playlist.',
			options: [options.playlist_id, options.index],
			callback: async (actionEvent) => {
				const playlist_id: string = await instance.parseVariablesInString(actionEvent.options.playlist_id as string)
				const index: string = await instance.parseVariablesInString(actionEvent.options.index as string)
				instance.ProPresenter.playlistIdentifierIndexTrigger(playlist_id, index)
			}
		},
		// **** PRESENTATION ****
		[ActionId.presentationActiveFocus]: {
			name: 'Presentation: Active: Focus',
			description: 'Sets the focus to the active presentation.',
			options: [],
			callback: async () => {
				instance.ProPresenter.presentationActiveFocus()
			}
		},
		[ActionId.presentationActiveGroupGroup_IdTrigger]: {
			name: 'Presentation: Active: Group: ID: Trigger',
			description: 'Triggers the specified group of the active presentation',
			options: [options.group_id_dropdown, options.group_id_text],
			callback: async (actionEvent) => {
				// user can either choose a Group from the dropdown, or choose to manually enter a Group ID as text (in a separate input that supports variables)
				let group_id: string = ''
				if (actionEvent.options.group_id_dropdown == 'manually_specify_groupid')
					group_id = await instance.parseVariablesInString(actionEvent.options.group_id_text as string)
				else
					group_id = actionEvent.options.group_id_dropdown as string

				instance.ProPresenter.presentationActiveGroupGroup_IdTrigger(group_id)
			}
		},
		[ActionId.presentationActiveTimelineOperation]: {
			name: 'Presentation: Active: Timeline Operation',
			description: 'Performs the requested timeline operation for the active presentation.',
			options: [options.timeline_operation],
			callback: async (actionEvent) => {
				const operation: string = await instance.parseVariablesInString(actionEvent.options.timeline_operation as string)
				instance.ProPresenter.presentationActiveTimelineOperation(operation as ProPresenterTimelineOperation)
			},
		},
		[ActionId.presentationActiveIndexTrigger]: {
			name: 'Presentation: Active: Index: Trigger',
			description: 'Triggers the specified cue of the active presentation.',
			options: [options.index],
			callback: async (actionEvent) => {
				const index: string = await instance.parseVariablesInString(actionEvent.options.index as string)
				instance.ProPresenter.presentationActiveIndexTrigger(index)
			}
		},
		[ActionId.presentationFocusedGroupGroup_IdTrigger]: {
			name: 'Presentation: Focused: Group: ID: Trigger',
			description: 'Triggers the specified group of the focused presentation',
			options: [options.group_id_dropdown, options.group_id_text],
			callback: async (actionEvent) => {
				// user can either choose a Group from the dropdown, or choose to manually enter a Group ID as text (in a separate input that supports variables)
				let group_id: string = ''
				if (actionEvent.options.group_id_dropdown == 'manually_specify_groupid')
					group_id = await instance.parseVariablesInString(actionEvent.options.group_id_text as string)
				else
					group_id = actionEvent.options.group_id_dropdown as string

				instance.ProPresenter.presentationFocusedGroupGroup_IdTrigger(group_id)
			}
		},
		[ActionId.presentationFocusedTrigger]: {
			name: 'Presentation: Focused: Trigger',
			description: 'Triggers the currently focused presentation in the main UI.',
			options: [],
			callback: async () => {
				instance.ProPresenter.presentationFocusedTrigger()
			}
		},
		[ActionId.presentationFocusedIndexTrigger]: {
			name: 'Presentation: Focused: Index: Trigger',
			description: 'Triggers the specified cue of the focused presentation.',
			options: [options.index],
			callback: async (actionEvent) => {
				const index: string = await instance.parseVariablesInString(actionEvent.options.index as string)
				instance.ProPresenter.presentationFocusedIndexTrigger(index)
			}
		},
		[ActionId.presentationUUIDIndexTrigger]: {
			name: 'Presentation: PresentationUUID: Index: Trigger',
			description: 'Triggers the specified cue of the specified presentation.',
			options: [options.presentation_uuid, options.index],
			callback: async (actionEvent) => {
				const presentation_uuid: string = await instance.parseVariablesInString(actionEvent.options.presentation_uuid as string)
				const index: string = await instance.parseVariablesInString(actionEvent.options.index as string)
				instance.ProPresenter.presentationUUIDIndexTrigger(presentation_uuid, index)
			}
		},
		[ActionId.presentationNextFocus]: {
			name: 'Presentation: Next: Focus',
			description: 'Sets the focus to the next presentation',
			options: [],
			callback: async () => {
				instance.ProPresenter.presentationNextFocus()
			}
		},
		[ActionId.presentationPreviousFocus]: {
			name: 'Presentation: Previous: Focus',
			description: 'Sets the focus to the previous presentation',
			options: [],
			callback: async () => {
				instance.ProPresenter.presentationPreviousFocus()
			}
		},
		// **** PROPS ****
		[ActionId.propIdTrigger]: {
			name: 'Prop: ID: Trigger',
			description: 'Triggers the specified prop.',
			options: [options.prop_id_dropdown, options.prop_id_text],
			callback: async (actionEvent) => {
				// user can either choose a prop from the dropdown, or choose to manually enter a prop ID as text (in a separate input that supports variables)
				let prop_id: string = ''
				if (actionEvent.options.prop_id_dropdown == 'manually_specify_propid')
					prop_id = await instance.parseVariablesInString(actionEvent.options.prop_id_text as string)
				else
					prop_id = actionEvent.options.prop_id_dropdown as string

				instance.ProPresenter.propIdTrigger(prop_id)
			},
		},
		[ActionId.propIdClear]: {
			name: 'Prop: ID: Clear',
			description: 'Clears the specified prop.',
			options: [options.prop_id_dropdown, options.prop_id_text],
			callback: async (actionEvent) => {
				// user can either choose a prop from the dropdown, or choose to manually enter a prop ID as text (in a separate input that supports variables)
				let prop_id: string = ''
				if (actionEvent.options.prop_id_dropdown == 'manually_specify_propid')
					prop_id = await instance.parseVariablesInString(actionEvent.options.prop_id_text as string)
				else
					prop_id = actionEvent.options.prop_id_dropdown as string

				instance.ProPresenter.propIdClear(prop_id)
			},
		},
		// **** STAGE ****
		[ActionId.stageMessage]: {
			name: 'Stage: Message: Show',
			description: 'Show stage message',
			options: [options.stage_message_text],
			callback: async (actionEvent) => {
				const stage_message_text: string = await instance.parseVariablesInString(actionEvent.options.stage_message_text as string)
				instance.ProPresenter.stageMessage(stage_message_text).then((requestAndResponseJSON: RequestAndResponseJSONValue) => {
						if (!requestAndResponseJSON.ok){
							instance.log('debug', 'Request Error: ' + requestAndResponseJSON.status + '. ' + requestAndResponseJSON.data + '. Called: ' + requestAndResponseJSON.path + ' with body: ' + stage_message_text)
						}
				})
			},
		},
		[ActionId.stageMessageHide]: {
			name: 'Stage: Message: Hide',
			description: 'Hide stage message',
			options: [],
			callback: async () => {
				instance.ProPresenter.stageMessageHide()
			},
		},
		// **** STATUS ****
		[ActionId.statusAudienceScreensSet]: {
			name: 'Status: AudienceScreens: Show/Hide',
			description: 'Show or hide Audience screens',
			options: [options.status_audience_screens_dropdown],
			callback: async (actionEvent) => {
				if (actionEvent.options.status_audience_screens_dropdown == 'toggle') {
					const currentStatus: RequestAndResponseJSONValue = await instance.ProPresenter.statusAudienceScreensGet()
					instance.ProPresenter.statusAudienceScreensSet(!currentStatus.data)
				} else {
					instance.ProPresenter.statusAudienceScreensSet(actionEvent.options.status_audience_screens_dropdown == 'show')
				}
			},
		},
		[ActionId.statusStageScreensSet]: {
			name: 'Status: StageScreens: Show/Hide',
			description: 'Show or hide Stage screens',
			options: [options.status_stage_screens_dropdown],
			callback: async (actionEvent) => {
				if (actionEvent.options.status_stage_screens_dropdown == 'toggle') {
					const currentStatus: RequestAndResponseJSONValue = await instance.ProPresenter.statusStageScreensGet()
					instance.ProPresenter.statusStageScreensSet(!currentStatus.data)
				} else {
					instance.ProPresenter.statusStageScreensSet(actionEvent.options.status_stage_screens_dropdown == 'show')
				}
			},
		},
		[ActionId.stageScreenIdSetLayoutId]: {
			name: 'stageScreenIdSetLayoutId',
			description: '',
			options: [options.stagescreen_id_dropdown, options.stagescreen_id_text, options.stagescreenlayout_id_dropdown, options.stagescreenlayout_id_text],
			callback: async (actionEvent) => {
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
			}
		},

		// **** TIMERS ****
		[ActionId.timerIdOperation]: {
			name: 'Timer: Id: Operation',
			description: 'Performs the requested operation on the specified timer (start, stop, reset).',
			options: [options.timer_id_dropdown, options.timer_id_text, options.timer_operation],
			callback: async (actionEvent) => {
				let timerID: string = ''
				if (actionEvent.options.video_input_id_dropdown == 'manually_specify_videoinputsid')
					timerID = await instance.parseVariablesInString(actionEvent.options.timer_id_text as string)
				else
					timerID = actionEvent.options.timer_id_dropdown as string

				instance.ProPresenter.timerIdOperation(timerID, actionEvent.options.timer_operation as ProPresenterTimerOperation)
			},
		},
		[ActionId.timerIdIncrement]: {
			name: 'Timer: Id: Increment',
			description: 'Modifies the time on the specified running timer.',
			options: [options.timer_id_dropdown, options.timer_id_text, options.timer_increment_value],
			callback: async (actionEvent) => {
				let timerID: string = ''
				if (actionEvent.options.video_input_id_dropdown == 'manually_specify_videoinputsid')
					timerID = await instance.parseVariablesInString(actionEvent.options.timer_id_text as string)
				else
					timerID = actionEvent.options.timer_id_dropdown as string

				const timer_increment_value = await instance.parseVariablesInString(actionEvent.options.timer_increment_value as string)
				instance.ProPresenter.timerIdIncrement(timerID, parseInt(timer_increment_value))
			},
		},
		[ActionId.timerIdSet]:{
			name: 'Timer: Id: Set',
			description: 'Set the details of the specified timer',
			options: [options.timer_id_dropdown, options.timer_id_text, options.timer_type, options.timer_duration, options.timer_time_of_day, options.timer_timeperiod, options.timer_start_time, options.timer_end_time, options.timer_allows_overrun, options.timer_optional_operation, options.timer_new_name],
			callback: async (actionEvent) => {
				let timerID: string = ''
				if (actionEvent.options.video_input_id_dropdown == 'manually_specify_videoinputsid')
					timerID = await instance.parseVariablesInString(actionEvent.options.timer_id_text as string)
				else
					timerID = actionEvent.options.timer_id_dropdown as string

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
				
			}
		},
		// **** TRANSPORT ****
		[ActionId.transportLayerOperation]: {
			name: 'Transport: Layer: Operation',
			description: 'Perform a transport control action for the specified layer',
			options: [options.transport_layer, options.transport_operation, options.transport_skip_time, options.transport_goto_time],
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
						instance.ProPresenter.transportLayerGoToEnd(actionEvent.options.transport_layer as ProPresenterLayerWithTransportControl)
						break
					default:
						instance.log('debug', 'Invalid Transport Operation: ' + actionEvent.options.transport_operation)
				}
			}
		},
		// **** TRIGGER *****
		[ActionId.triggerCueNext]: {
			name: 'Trigger: Cue: Next',
			description: 'Triggers the next cue or item in the currently active playlist or library (Like arrow keys).',
			options: [],
			callback: async () => {
				instance.ProPresenter.triggerNext()
			},
		},
		[ActionId.triggerCuePrevious]: {
			name: 'Trigger: Cue: Previous',
			description: 'Triggers the previous cue or item in the currently active playlist or library (Like arrow keys).',
			options: [],
			callback: async () => {
				instance.ProPresenter.triggerPrevious()
			},
		},
		[ActionId.triggerMediaNext]: {
			name: 'Trigger: Media: Next',
			description: 'Triggers the next item in the currently active media playlist.',
			options: [],
			callback: async () => {
				instance.ProPresenter.triggerMediaNext()
			},
		},
		[ActionId.triggerMediaPrevious]: {
			name: 'Trigger: Media: Previous',
			description: 'Triggers the previous item in the currently active media playlist.',
			options: [],
			callback: async () => {
				instance.ProPresenter.triggerMediaPrevious()
			},
		},
		[ActionId.triggerAudioNext]: {
			name: 'Trigger: Audio: Next',
			description: 'Triggers the next item in the currently active audio playlist.',
			options: [],
			callback: async () => {
				instance.ProPresenter.triggerAudioNext()
			},
		},
		[ActionId.triggerAudioPrevious]: {
			name: 'Trigger: Audio: Previous',
			description: 'Triggers the previous item in the currently active audio playlist.',
			options: [],
			callback: async () => {
				instance.ProPresenter.triggerAudioPrevious()
			},
		},
		// ****VIDEO INPUTS ****
		[ActionId.videoInputsIdTrigger]: {
			name: 'VideoInputs: ID: Trigger',
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
		// **** VERSION ****
		// Keep this one as LAST action...
		[ActionId.version]: {
			name: 'Version',
			description: 'Refresh ProPresenter, API and host version variables.',
			options: [],
			callback: () => {
				instance.ProPresenter.version().then((result: RequestAndResponseJSONValue) => {
					instance.processIncommingData(result)
			9	})
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
	const propChoicesDropDown = actions[ActionId.propIdTrigger]?.options[0] as CompanionInputFieldDropdown
	const manual_prop_choice = propChoicesDropDown.choices.pop() // The last item in the prop choices list (after all the current props list from ProPresenter) is a placeholder, that when selected, allows for manually specifing the Prop (in another text input)
	propChoicesDropDown.choices = instance.propresenterStateStore.propChoices.concat(manual_prop_choice as DropdownChoice) 
	propChoicesDropDown.default = propChoicesDropDown.choices[0].id
	
	// Update video input choices with data from propresenterStateStore
	const videoInputChoicesDropDown = actions[ActionId.videoInputsIdTrigger]?.options[0] as CompanionInputFieldDropdown
	const manual_video_input_choice = videoInputChoicesDropDown.choices.pop() // The last item in the video inputs choices list (after all the current video inputs list from ProPresenter) is a placeholder, that when selected, allows for manually specifing the Video Input (in another text input)
	videoInputChoicesDropDown.choices = instance.propresenterStateStore.videoInputChoices.concat(manual_video_input_choice as DropdownChoice) 
	videoInputChoicesDropDown.default = videoInputChoicesDropDown.choices[0].id
	
	// Update timer choices with data from propresenterStateStore
	const timerChoicesDropDown = actions[ActionId.timerIdSet]?.options[0] as CompanionInputFieldDropdown
	const manual_timer_choice = timerChoicesDropDown.choices.pop() // The last item in the timer choices list (after all the current timers list from ProPresenter) is a placeholder, that when selected, allows for manually specifing the Timer (in another text input)
	timerChoicesDropDown.choices = instance.propresenterStateStore.timerChoices.concat(manual_timer_choice as DropdownChoice) 
	timerChoicesDropDown.default = timerChoicesDropDown.choices[0].id
	
	// Update stagescreen choices with data from propresenterStateStore
	const stageScreenChoicesDropDown = actions[ActionId.stageScreenIdSetLayoutId]?.options[0] as CompanionInputFieldDropdown
	const manual_stagescreen_choice = stageScreenChoicesDropDown.choices.pop() // The last item in the stage screen choices list (after all the current stage screens list from ProPresenter) is a placeholder, that when selected, allows for manually specifing the stage screen (in another text input)
	stageScreenChoicesDropDown.choices = instance.propresenterStateStore.stageScreenChoices.concat(manual_stagescreen_choice as DropdownChoice) 
	stageScreenChoicesDropDown.default = stageScreenChoicesDropDown.choices[0].id
	
	// Update stagescreen layout choices with data from propresenterStateStore
	const stageScreenLayoutChoicesDropDown = actions[ActionId.stageScreenIdSetLayoutId]?.options[2] as CompanionInputFieldDropdown
	const manual_stagescreenlayout_choice = stageScreenLayoutChoicesDropDown.choices.pop() // The last item in the stage screen layout choices list (after all the current stage screen layouts list from ProPresenter) is a placeholder, that when selected, allows for manually specifing the stage screen layout (in another text input)
	stageScreenLayoutChoicesDropDown.choices = instance.propresenterStateStore.stageScreenLayoutChoices.concat(manual_stagescreenlayout_choice as DropdownChoice) 
	stageScreenLayoutChoicesDropDown.default = stageScreenLayoutChoicesDropDown.choices[0].id
	
	// Update message choices with data from propresenterStateStore
	const messageChoicesDropDown = actions[ActionId.messageIdTrigger]?.options[0] as CompanionInputFieldDropdown
	const manual_message_choice = messageChoicesDropDown.choices.pop() // The last item in the message choices list (after all the current messages list from ProPresenter) is a placeholder, that when selected, allows for manually specifing the message (in another text input)
	messageChoicesDropDown.choices = instance.propresenterStateStore.messageChoices.concat(manual_message_choice as DropdownChoice) 
	messageChoicesDropDown.default = messageChoicesDropDown.choices[0].id
	
	// Update group choices with data from propresenterStateStore
	const groupChoicesDropDown = actions[ActionId.presentationActiveGroupGroup_IdTrigger]?.options[0] as CompanionInputFieldDropdown
	const manual_group_choice = groupChoicesDropDown.choices.pop() // The last item in the group choices list (after all the current group list from ProPresenter) is a placeholder, that when selected, allows for manually specifing the group (in another text input)
	groupChoicesDropDown.choices = instance.propresenterStateStore.groupChoices.concat(manual_group_choice as DropdownChoice) 
	groupChoicesDropDown.default = groupChoicesDropDown.choices[0].id
	
	// Update messageTokenInputs with data from propresenterStateStore
	let messageIdTriggerAction = actions[ActionId.messageIdTrigger]
	if (messageIdTriggerAction) {
		let messsageIdTriggerActionOptions = messageIdTriggerAction?.options
		messageIdTriggerAction.options = [...messsageIdTriggerActionOptions, ...instance.propresenterStateStore.messageTokenInputs]
		//instance.log('debug', 'MMMMM messageIdTriggerAction.options: ' + JSON.stringify(messageIdTriggerAction.options))
	}

	return actions
}

export enum ActionId {
	// Announcement
	announcementActiveFocus = 'announcementActiveFocus',
	announcementActiveTrigger = 'announcementActiveTrigger',
	announcementActiveNextTrigger = 'announcementActiveNextTrigger',
	announcementActivePreviousTrigger = 'announcementActivePreviousTrigger',
	announcementActiveIndexTrigger = 'announcementActiveIndexTrigger',
	announcementActiveTimelineOperation = 'announcementActiveTimelineOperation',

	// Audio
	audioPlaylistActiveFocus = 'audioPlaylistActiveFocus',
	audioPlaylistActiveNextTrigger = 'audioPlaylistActiveNextTrigger',
	audioPlaylistActivePreviousTrigger = 'audioPlaylistActivePreviousTrigger',
	audioPlaylistActiveTrigger = 'audioPlaylistActiveTrigger',
	audioPlaylistActiveIdTrigger = 'audioPlaylistActiveIdTrigger',
	audioPlaylistFocusedNextTrigger = 'audioPlaylistFocusedNextTrigger',
	audioPlaylistFocusedPreviousTrigger = 'audioPlaylistFocusedPreviousTrigger',
	audioPlaylistFocusedTrigger = 'audioPlaylistFocusedTrigger',
	audioPlaylistFocusedIdTrigger = 'audioPlaylistFocusedIdTrigger',
	audioPlaylistNextFocus = 'audioPlaylistNextFocus',
	audioPlaylistPreviousFocus = 'audioPlaylistPreviousFocus',
	audioPlaylistByPlaylistIdFocus = 'audioPlaylistByPlaylistIdFocus',
	audioPlaylistByPlaylistIdNextTrigger = 'audioPlaylistByPlaylistIdNextTrigger',
	audioPlaylistByPlaylistIdPreviousTrigger = 'audioPlaylistByPlaylistIdPreviousTrigger',
	audioPlaylistByPlaylistIdTrigger = 'audioPlaylistByPlaylistIdTrigger',
	audioPlaylistByPlaylistIDAudioItemIDTrigger = 'audioPlaylistByPlaylistIDAudioItemIDTrigger', // calls triggerAudioPlaylistIDAudioID()
	
	// Capture
	captureOperation = 'captureOperation',

	// Clear
	clearLayer = 'clearLayer',
	//clearGroup = 'clearGroup',

	// Library
	libraryByIdPresentationIdCueTrigger = 'libraryByIdPresentationIdCueTrigger',

	// Looks
	lookIdTrigger = 'lookIdTrigger',

	// Macros
	marcoIdTrigger = 'marcoIdTrigger',

	// Media
	mediaPlaylistPlaylistIdMediaIdTrigger = 'mediaPlaylistPlaylistIdMediaIdTrigger',

	// Messages
	messageIdTrigger = 'messageIdTrigger',
	messageIdClear = 'messageIdClear',

	// Misc
	miscFindMyMouse = 'miscFindMyMouse',

	// Playlist
	playlistIdentifierTrigger = 'playlistIdentifierTrigger',
	playlistIdentifierIndexTrigger = 'playlistIdentifierIndexTrigger',

	// Presentation
	presentationActiveFocus = 'presentationActiveFocus',
	presentationActiveGroupGroup_IdTrigger = 'presentationActiveGroupGroup_IdTrigger',
	presentationActiveTimelineOperation = 'presentationActiveTimelineOperation',
	presentationActiveIndexTrigger = 'presentationActiveIndexTrigger',

	presentationFocusedGroupGroup_IdTrigger = 'presentationFocusedGroupGroup_IdTrigger',
	presentationFocusedTrigger = 'presentationFocusedTrigger',
	presentationFocusedIndexTrigger = 'presentationFocusedIndexTrigger',

	presentationNextFocus = 'presentationNextFocus',
	presentationPreviousFocus = 'presentationPreviousFocus',

	presentationUUIDIndexTrigger = 'presentationUUIDIndexTrigger',

	// Props
	propIdTrigger = 'propIdTrigger',
	propIdClear =  'propIdClear',

	// Stage
	stageMessage = 'stageMessage',
	stageMessageHide = 'stageMessageHide',
	stageScreenIdSetLayoutId = 'stageScreenIdSetLayoutId',

	// Status
	statusAudienceScreensSet = 'statusAudienceScreensSet',
	statusStageScreensSet = 'statusStageScreensSet',

	// Timers
	timerIdOperation = 'timerIdOperation',
	timerIdIncrement = 'timerIdIncrement',
	timerIdSet = 'timerIdSet',

	// Transport
	transportLayerOperation = 'transportLayerOperation',
	// TODO transportlayercancelautoadvance

	// Trigger
	triggerCueNext = 'triggerCueNext',
	triggerCuePrevious = 'triggerCuePrevious',
	triggerMediaNext = 'triggerMediaNext',
	triggerMediaPrevious = 'triggerMediaPrevious',
	triggerAudioNext = 'triggerAudioNext',
	triggerAudioPrevious = 'triggerAudioPrevious',

	// Version
	version = 'version',

	// Video Input
	videoInputsIdTrigger = 'videoInputsIdTrigger',
}
