import {
	combineRgb,
	CompanionFeedbackDefinitions,
	CompanionInputFieldDropdown,
	DropdownChoice,
} from '@companion-module/base'
import { ProLayersStatus, ProScreensStatus, StageScreenWithLayout } from './utils'
import { DeviceConfig, InstanceBaseExt } from './config'

export function GetFeedbacks(instance: InstanceBaseExt<DeviceConfig>): CompanionFeedbackDefinitions {
	const feedbackDefinitions: CompanionFeedbackDefinitions = {
		Layer: {
			name: 'Layer',
			type: 'boolean',
			defaultStyle: {
				bgcolor: combineRgb(255, 0, 0),
				color: combineRgb(255, 192, 192),
			},
			options: [
				{
					id: 'layer',
					type: 'dropdown',
					label: 'Layer',
					tooltip: '"Any Layer" will trigger this feedback if any layer is active',
					choices: [
						{ id: 'audio', label: 'Audio' },
						{ id: 'messages', label: 'Messages' },
						{ id: 'props', label: 'Props' },
						{ id: 'announcements', label: 'Announcements' },
						{ id: 'slide', label: 'Slide' },
						{ id: 'media', label: 'Media' },
						{ id: 'video_input', label: 'Video Input' },
						{ id: 'any', label: 'Any Layer' },
					],
					default: 'slide',
				},
			],
			callback: (feedback) => {
				if (feedback.options.layer == 'any') {
					return Object.values(instance.propresenterStateStore.proLayersStatus).some((status) => status) // If ANY layer is on then return true!
				} else {
					return instance.propresenterStateStore.proLayersStatus[feedback.options.layer as keyof ProLayersStatus] // If selected layer is on then return true
				}
			},
		},
		Screens: {
			name: 'Screens',
			type: 'boolean',
			defaultStyle: {
				bgcolor: combineRgb(255, 0, 0),
				color: combineRgb(255, 192, 192),
			},
			options: [
				{
					id: 'screens',
					type: 'dropdown',
					label: 'Screens',
					choices: [
						{ id: 'audience', label: 'Audience' },
						{ id: 'stage', label: 'Stage' },
					],
					default: 'audience',
				},
			],
			callback: (feedback) => {
				return instance.propresenterStateStore.proScreensStatus[feedback.options.screens as keyof ProScreensStatus]
			},
		},
		StageMessage: {
			name: 'Stage Message',
			type: 'boolean',
			defaultStyle: {
				bgcolor: combineRgb(255, 0, 0),
				color: combineRgb(255, 192, 192),
			},
			options: [
				{
					id: 'check_option',
					type: 'dropdown',
					label: 'Check',
					choices: [
						{ id: 'any_stage_message_active', label: 'Any Stage Message Is Active' },
						{ id: 'specific_stage_message_active', label: 'Specific Stage Message Is Active' },
					],
					default: 'any_stage_message_active',
				},
				{
					id: 'stage_message_text',
					type: 'textinput',
					label: 'Specific Stage Message Text To Check For',
					tooltip: 'Stage message text that this feedback will return true when it matches and is live',
					isVisible: (options) => options.check_option == 'specific_stage_message_active',
					useVariables: true,
				},
			],
			callback: async (feedback, context) => {
				if (instance.config.exta_debug_logs) {
					instance.log('debug', 'Feedback checking stage message: ' + instance.propresenterStateStore.stageMessage)
				}
				const stage_message_text = await context.parseVariablesInString(feedback.options.stage_message_text as string)
				return feedback.options.check_option == 'any_stage_message_active'
					? instance.propresenterStateStore.stageMessage.length > 0
					: instance.propresenterStateStore.stageMessage == stage_message_text
			},
		},
		StageLayouts: {
			name: 'Stage Layouts',
			type: 'boolean',
			defaultStyle: {
				color: combineRgb(0, 255, 0),
				png64:
					'iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABk2lDQ1BJQ0MgUHJvZmlsZQAAKJF9kc0rRGEUhx+DRiILlGRxF1gh\
						ISkbxkKKmgbla+HOnS81c+ftzkjKUtkqSmx8LWytsLSwVUr5KPkDZEVspOu8c2kGcep0nn7v+zv33POC78RUKlnSDik764QGA8bE\
						5JThf8BPLTXU02taGdUfDA4j8VW/x+sVRbpetupev8//jcpINGNBkSHcZyknKzwrHFzIKs2HwjWODCV8pjnu8Y3msMePuTtjoQHw\
						6Z6GlTAjwrpni5VwUsJ67sZIKqJ15bGteV1zuMAbL+BUct76nFP/YUXUHh/V9yUbGGSIEYIYhJlnjiRZWqXaomQIyXngD39Xzj9A\
						GsUijnjiJMRt0C+Kkk5R4SHpZNFGi3AH7ZLd+m1+7jyvpXeg5wWKV/NaeAOOV6DuNq81bkPVMhydKdMxc1KxpC8Wg6cDeZJJqL6A\
						8ulMrLPDm74iAKX3rvvcBP41eF913bdd133fE/MdnNrenj97sX8NY0swfA6bW9Acl2/O/LGPstw+/t9ZWeHOPwCJYXgLMfDrDgAA\
						AGxlWElmTU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAIdpAAQAAAABAAAATgAAAAAAAABaAAAA\
						AQAAAFoAAAABAAKgAgAEAAAAAQAAAEigAwAEAAAAAQAAAEgAAAAAzItoSgAAAAlwSFlzAAAN1wAADdcBQiibeAAAAdhJREFUeAHt\
						171KA0EQwPGJWomljaWCTUTs0uhzmMbaQvARrHwEwcLa0kLwBSy0UCQgaG1pk0YQCwvXGZKAHMfcXVx2z/hfWC67s1/zI9kkIhQE\
						EEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAIEZEOi0Iocgy3qOA63b4/Pc6vNUOjIct7M98gMFWdLsz7WuFBRetb2nSO+F/qTN\
						uaS7lW+2q91FHBtpfRbLWtoAtOYIeDFnWrxQG4DenHS8mDMtXqgNQFeazldJStZnsawlL1CQdc2+q/W5RMH6ujIaUxJO05XnWyzI\
						oqZ3rHWnZpo3Ou5Iv9E+ao6PNiwX0Ilm0GuYxb0CHTac8+vh6T9iQTanwLFEe/pxs7lJy0LS3Uabzevjcsp9bS4FgT8kkO6SDnKm\
						LluRbB71wt6PtJa7TMpL+sk9SbNgzLXcnVMCPbgnaRaMuZa7c2qgT/c09YK2xgwCdcQSG9QzcEcN9P6JAe1uMgmm/h10oRsPJ5v/\
						eK7q640fbXtp/8VeCn3WvC7pm/GuIH39lXxXqP02ZJ3yDmpDvo3PAFAFGUAAVQhUhHkHAVQhQBgBBBBAAAEEEEAAAQQQQAABBBBA\
						AAEEEEAAAQQQQOA/CHwD9oI41oOvWRMAAAAASUVORK5CYII=',
			},
			options: [
				{
					id: 'stagescreen_id_dropdown',
					type: 'dropdown',
					label: 'Stage Screen',
					choices: [{ id: 'manually_specify_stagescreenid', label: 'Manually Specify Stage Screen ID Below' }],
					default: '',
				},
				{
					id: 'stagescreen_id_text',
					type: 'textinput',
					label: 'Stage Screen Id',
					tooltip: 'Enter Stage Screen Name or Index or UUID',
					isVisible: (options) => options.stagescreen_id_dropdown == 'manually_specify_stagescreenid',
					default: '',
					useVariables: true,
				},
				{
					type: 'dropdown',
					label: 'Stage Layout',
					tooltip: 'Choose an existing Stage Screen Layout\nOr manually specify via text/variable',
					id: 'stagescreenlayout_id_dropdown',
					choices: [
						{ id: 'manually_specify_stagescreenlayoutid', label: 'Manually Specify Stage Screen Layout ID Below' },
					],
					default: '',
				},
				{
					type: 'textinput',
					label: 'Stage Layout Id',
					tooltip: 'Enter Stage Screen Layout Name or Index or UUID',
					id: 'stagescreenlayout_id_text',
					isVisible: (options) => options.stagescreenlayout_id_dropdown == 'manually_specify_stagescreenlayoutid',
					default: '',
					useVariables: true,
				},
			],
			callback: async (feedback, context) => {
				let stage_screen_id: string = ''
				if (feedback.options.stagescreen_id_dropdown == 'manually_specify_stagescreenid') {
					stage_screen_id = await context.parseVariablesInString(feedback.options.stagescreen_id_text as string)
				} else {
					stage_screen_id = feedback.options.stagescreen_id_dropdown as string
				}

				let stage_layout_id: string = ''
				if (feedback.options.stagescreenlayout_id_dropdown == 'manually_specify_stagescreenlayoutid') {
					stage_layout_id = await context.parseVariablesInString(feedback.options.stagescreenlayout_id_text as string)
				} else {
					stage_layout_id = feedback.options.stagescreenlayout_id_dropdown as string
				}

				if (instance.config.exta_debug_logs) {
					instance.log(
						'debug',
						'Feedback checking stage screen: ' +
							stage_screen_id +
							' for layout: ' +
							stage_layout_id +
							'. propresenterStateStore' +
							JSON.stringify(instance.propresenterStateStore.stageScreensWithLayout)
					)
				}

				const selected_stage_screen: StageScreenWithLayout | undefined =
					instance.propresenterStateStore.stageScreensWithLayout.find(
						(stageScreenWithLayout) =>
							stageScreenWithLayout.id.uuid == stage_screen_id ||
							stageScreenWithLayout.id.name == stage_screen_id ||
							(/^\d+$/.test(stage_screen_id) && stageScreenWithLayout.id.index == parseInt(stage_screen_id))
					)
				if (selected_stage_screen == undefined) {
					return false // Can't find specified stage screen
				} else {
					return (
						selected_stage_screen.layout_uuid == stage_layout_id ||
						selected_stage_screen.layout_name == stage_layout_id ||
						(/^\d+$/.test(stage_layout_id) && selected_stage_screen.layout_index == parseInt(stage_layout_id))
					)
				}
			},
		},
		ActiveLook: {
			name: 'Active Look',
			type: 'boolean',
			defaultStyle: {
				bgcolor: combineRgb(255, 255, 255),
				color: combineRgb(110, 110, 110),
				png64:
					'iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABk2lDQ1BJQ0MgUHJvZmlsZQAAKJF9kc0rRGEUhx+DRiILlGRxF1gh\
						ISkbxkKKmgbla+HOnS81c+ftzkjKUtkqSmx8LWytsLSwVUr5KPkDZEVspOu8c2kGcep0nn7v+zv33POC78RUKlnSByk764QGA8bE\
						5JThf8BPLTXU02taGdUfDA4j8VW/x+sVRbpetupev8//jcpINGNBkSHcZyknKzwrHFzIKs2HwjWODCV8pjnu8Y3msMePuTtjoQHw\
						6Z6GlTAjwrpni5VwUsJ67sZIKqJ15bGteV1zuMAbL+BUct76nFP/YUXUHh/V9yUbGGSIEYIYhJlnjiRZWqXaomQIyXngD39Xzj9A\
						GsUijnjiJMRt0C+Kkk5R4SHpZNFGi3AH7ZLd+m1+7jyvpXeg5wWKV/NaeAOOV6DuNq81bkPVMhydKdMxc1KxpC8Wg6cDeZJJqL6A\
						8ulMrLPDm74iAKX3rvvcBP41eF913bdd133fE/MdnNrenj97sX8NY0swfA6bW9Acl2/O/LGPstw+/t9ZWeHOPwC0UXgblG4USAAA\
						ALJlWElmTU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAAANAAAA\
						cgEyAAIAAAAUAAAAgIdpAAQAAAABAAAAlAAAAAAAAABIAAAAAQAAAEgAAAABR0lNUCAyLjEwLjM2AAAyMDI0OjEwOjE4IDIwOjI1\
						OjE1AAACoAIABAAAAAEAAABIoAMABAAAAAEAAABIAAAAAF6voZYAAAAJcEhZcwAACxMAAAsTAQCanBgAAAMCaVRYdFhNTDpjb20u\
						YWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+\
						CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAg\
						IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20v\
						dGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgICAgICAg\
						ICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzI8\
						L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAg\
						ICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4x\
						PC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAg\
						PHhtcDpNb2RpZnlEYXRlPjIwMjQtMTAtMThUMjA6MjU6MTU8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8eG1wOkNyZWF0b3JU\
						b29sPkdJTVAgMi4xMC4zNjwveG1wOkNyZWF0b3JUb29sPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8\
						L3g6eG1wbWV0YT4KPOCvrQAABpVJREFUeAHtmVtPVFcUgJlhZIabw0WBGQGnSlqsQhmgNCbYatI0Ghtj20j71h/gH+gjv6CPTd/6\
						YNKXJrYN1dZaIzG2xVgQhiJKqWKFGW4SZkSH60y/hXPoAYFwOYeHZu1ksde+rL33+mbvsy+kpWlQAkpACSgBJaAElIASUAJKQAko\
						ASWgBJSAElACSkAJKAEloASUgBL4HxBw7KQPdXV1e5LJpH9hYcGTnp4+7XA4wu3t7ePrjSEYDO6lnk9sEolEHBnq6emZWM/GyrId\
						AXT06NHMubm5RuBUM3g/sQenp9HDONzl9Xpvtra2SnopADOLeseoV0WmT2yQOOkh0l2xWOzX/v7+mSUDm5R0m9pdaraiosLNbPmA\
						jHNIHU4WIRno5chrOHxgeno6vbCwsG9sbGyBvLTjx497ZmZmPqKe2ASJ9yJu6u5HKtEDbrfbUVlZ2TcwMJAQG7uCy66GjXZzc3Pf\
						wqkm0l6ZLegd6DFkN1KHVJP3MQ4nmTVTLKXk5ORkvtPpbAJEDuVSvwuJkZdHG/XUP0z6k6dPnz4mvoXYFmxdYswEVzQa/RyHjuBY\
						P1580dnZGSKWX91ZU1MjcM4jB4ERIzaWjIfyXKSXpflld3f3n+hJsamtrQ3S1nlgBYj/OHv27GfNzc22zSInndoWJiYmCmi8UjrA\
						oR+B04lqOJNIpa9IOXB2A2kGp+dICpw09MvA6UYVOBISHR0d7bR1TRLEVS0tLYt1JW1HsBUQDhfguLGM763mABB6jXzqXkIWgUke\
						ZXeNMnM8Pz9v2Lipk2cus1q3FZDH43mGA4tj5ttSuNrgmQWL+cBM8h26CaDfjXqU7TF0c2yySdBu3FxmtW4rIHalMZwJy6DZyU7J\
						OcjsQCp9UvLgE6b6OLMjAtSxVL3TjY2N+Wab6urqItp8T/KA+U9BQcGEudxq3dZtnt1ovqSkRLb0GpyRw162z+fzkJeHyLfpJPnH\
						gCMAv+YAGBoZGZmjThZl1YDwzc7OZqVs8vft23eI/FNII5LA7kJbW5ux3MiyPhjfB+tbTrWIgz9nZGQESJ4AwmliOfhFES9SzmyR\
						s89V6v1CvBgAcxnny5B3AHiGzDeIY6TzKCsnniXv6tTU1PUXFvb9tXUGybBZNvHi4uKHOChbuPS3B70YJ2V5P0C/hlzs6uoyllVa\
						JBJ57vf7HwHPsJHrhhwwncT9YgPQb+/fv/+ENmwNtp6DzCMvLS3N5HtxCOf8SCbOxpEwV4a7nIaXXTMMu9R1Q5aVH1hyNnqODDFz\
						enfimmGMQ+N1COzYDDLGIPcsrgivk/alZoVRtGYss83lckVycnJ6V15q1zSyqGAnATnq6+sPs5PJ3Uw+1D5Els1GgizBCKBCgLp1\
						+/ZtOUAap+uN2G+5jiWAGhoaXsXxQd525BvxUpBvCZny3PEuIlv+VndPuYbIhVd2vJvr9cd5qpQPf99Lg9lkhiW7WFFR0af0WxYI\
						BIYGBwfNJ1sHcOQiehr5EMfkeWM7h1MZr7wnHSTO4sMfC4fDk2af+bEKWbpnOA7UsBu2mcu2om/1l1zWFwOewfGmeDy+lxfAO+ij\
						5MkBcT+DrSPdgLiXGW0jQVuyPJuYtfvpr4P0AOk5+ixi+w8C5wT9XtlGF0umlgDiANjCgN5kYO/TchUDHkUyGHCA9LKrwlLPqyjU\
						HyHbhe2q97YVJgL8beoeQR6hy+GxGL2c+DFLrIV428GSJcZUjnIYlO+PwJFftxSROBPZTPge0EOAlrPPRoP0YfQpD2pRQH8VCoXu\
						bLSB9epZMoOkA3aX6wwsHzkHJHkH2lTArg/nfsJ2F3qQ+JVNNUBl7J4A9xtsWzdru1Z9S2aQNM4sSvBc8TdPHDKTvAxWrhRr9bss\
						n7r3kAvsOneHh4cny8rKonxfSrHfEGhsk9SV96aLnLEucemV5WZJsAyQjEZu7zj4F8ttlF9yiqxdyG4G/9LOxWwRkwjyG/p3wLkl\
						GRLYmR5z2x/Hb7nI5hDnrAYbO/kwyz3vBvEPvFDe4BVTjgKWhY39xFvoju3dyyyQD+gBBl9CLKDkXzfzNPcMfYzyh3xMQ/ziw6t1\
						wQ4ld7AqYMtyk7ekbOxctDGNRMkfpvwBm0QPZyJ5IbA82AbINFInjhbimACTJ9IF9CkuqeNrXVJNtouq/F+NpSNLNhso8EiXY8Uk\
						UOSx7MWT5UojTSsBJaAElIASUAJKQAkoASWgBJSAElACSkAJKAEloASUgBJQAkpACSiB/wj8C+Vj+xv8zlIqAAAAAElFTkSuQmCC',
			},
			options: [
				{
					id: 'active_look_dropdown',
					type: 'dropdown',
					label: 'Active Look',
					choices: [{ id: 'manually_specify_lookid', label: 'Manually Specify Look ID Below' }],
					default: '',
				},
				{
					id: 'active_look_text',
					type: 'textinput',
					label: 'Active Look',
					isVisible: (options) => options.active_look_dropdown == 'manually_specify_lookid',
					default: '',
					useVariables: true,
				},
			],
			callback: async (feedback, context) => {
				let look_id: string = ''
				if (feedback.options.active_look_dropdown == 'manually_specify_lookid') {
					look_id = await context.parseVariablesInString(feedback.options.active_look_text as string)
				} else {
					look_id = feedback.options.active_look_dropdown as string
				}

				if (instance.config.exta_debug_logs)
					instance.log(
						'debug',
						'Active Look Feedback look_id selected = ' +
							look_id +
							' instance.propresenterStateStore.activeLookID.uuid = ' +
							instance.propresenterStateStore.activeLookID.uuid
					)

				return (
					(/^\d+$/.test(look_id) && instance.propresenterStateStore.activeLookID.index == parseInt(look_id)) ||
					instance.propresenterStateStore.activeLookID.uuid == look_id ||
					instance.propresenterStateStore.activeLookID.name == look_id
				)
			},
		},
		PropActive: {
			name: 'Prop Active',
			type: 'boolean',
			defaultStyle: {
				bgcolor: combineRgb(0, 165, 225),
				color: combineRgb(100, 190, 205),
			},
			options: [
				{
					id: 'prop_id_dropdown',
					type: 'dropdown',
					label: 'Prop',
					choices: [{ id: 'manually_specify_propid', label: 'Manually Specify Prop ID Below' }],
					default: '',
				},
				{
					id: 'prop_id_text',
					type: 'textinput',
					label: 'Prop ID',
					isVisible: (options) => options.prop_id_dropdown == 'manually_specify_propid',
					default: '',
					useVariables: true,
				},
			],
			callback: async (feedback, context) => {
				let prop_id: string = ''
				if (feedback.options.prop_id_dropdown == 'manually_specify_propid') {
					prop_id = await context.parseVariablesInString(feedback.options.prop_id_text as string)
				} else {
					prop_id = feedback.options.prop_id_dropdown as string
				}

				if (instance.config.exta_debug_logs)
					instance.log(
						'debug',
						'Prop Active Feedback prop_id selected = ' + prop_id + ' Feedback: ' + JSON.stringify(feedback)
					)

				return (
					instance.propresenterStateStore.proProps.find(
						(proProp) =>
							proProp.id.uuid == prop_id ||
							proProp.id.name == prop_id ||
							(/^\d+$/.test(prop_id) && proProp.id.index == parseInt(prop_id))
					)?.is_active == true
				)
			},
		},
		TransportPlaying: {
			name: 'Transport Playing',
			type: 'boolean',
			defaultStyle: {
				bgcolor: combineRgb(255, 65, 255),
				color: combineRgb(255, 225, 255),
			},
			options: [
				{
					id: 'layer',
					type: 'dropdown',
					label: 'Layer',
					tooltip: 'Which layer to check if transport is playing',
					choices: [
						{ id: 'presentation', label: 'Presentation' },
						{ id: 'audio', label: 'Audio' },
						{ id: 'announcement', label: 'Announcement' },
					],
					default: 'presentation',
				},
			],
			callback: (feedback) => {
				return instance.propresenterStateStore.proTransportLayersStatus[
					feedback.options.layer as 'presentation' | 'audio' | 'announcement'
				]
			},
		},
		TimerState: {
			name: 'Timer State',
			type: 'boolean',
			defaultStyle: {
				bgcolor: combineRgb(255, 65, 255),
				color: combineRgb(255, 225, 255),
			},
			options: [
				{
					id: 'timer_id_dropdown',
					type: 'dropdown',
					label: 'Timer',
					choices: [{ id: 'manually_specify_timerid', label: 'Manually Specify Timer ID Below' }],
					default: '',
				},
				{
					id: 'timer_id_text',
					type: 'textinput',
					label: 'Timer ID',
					isVisible: (options) => options.timer_id_dropdown == 'manually_specify_timerid',
					default: '',
					useVariables: true,
				},
				{
					id: 'timer_state',
					type: 'dropdown',
					label: 'Timer State',
					tooltip: 'Tip: Overruning = overrun and still running. Overran = overrun and stopped.',
					choices: [
						{ id: 'running', label: 'Running' },
						{ id: 'stopped', label: 'Stopped' },
						{ id: 'overrunning', label: 'Overrunning' },
						{ id: 'overran', label: 'Overran' },
					],
					default: 'running',
				},
			],
			callback: async (feedback, context) => {
				let timer_id: string = ''
				if (feedback.options.timer_id_dropdown == 'manually_specify_timerid') {
					timer_id = await context.parseVariablesInString(feedback.options.timer_id_text as string)
				} else {
					timer_id = feedback.options.timer_id_dropdown as string
				}

				if (instance.config.exta_debug_logs)
					instance.log(
						'debug',
						'Timer State Feedback timer_id selected = ' + timer_id + ' Feedback: ' + JSON.stringify(feedback)
					)

				return (
					instance.propresenterStateStore.proTimers.find(
						(proTimer) =>
							proTimer.id.uuid == timer_id ||
							proTimer.id.uuid.replace(/-/g, '') == timer_id ||
							proTimer.id.name == timer_id ||
							(/^\d+$/.test(timer_id) && proTimer.id.index == parseInt(timer_id))
					)?.state == feedback.options.timer_state
				)
			},
		},
		Capture: {
			name: 'Active Capture',
			type: 'boolean',
			defaultStyle: {
				bgcolor: combineRgb(0, 160, 0),
				color: combineRgb(192, 255, 192),
			},
			options: [],
			callback: () => {
				return instance.getVariableValue('capture_status') == 'active'
			},
		},
	}

	// Update look choices with data from propresenterStateStore
	const active_look_dropdown = feedbackDefinitions.ActiveLook?.options[0] as CompanionInputFieldDropdown
	const manual_look_choice = active_look_dropdown.choices.pop() // The last item in the looks choices list (after all the current looks list from ProPresenter) is ALWAYS a placeholder, that when selected, allows for manually specifing the Look (in another text input)
	active_look_dropdown.choices = instance.propresenterStateStore.looksChoices.concat(
		manual_look_choice as DropdownChoice
	)
	active_look_dropdown.default = active_look_dropdown.choices[0].id

	// Update stagescreen choices with data from propresenterStateStore
	const stageScreenChoicesDropDown = feedbackDefinitions.StageLayouts?.options[0] as CompanionInputFieldDropdown
	const manual_stagescreen_choice = stageScreenChoicesDropDown.choices.pop() // The last item in the stage screen choices list (after all the current stage screens list from ProPresenter) is a placeholder, that when selected, allows for manually specifing the stage screen (in another text input)
	stageScreenChoicesDropDown.choices = instance.propresenterStateStore.stageScreenChoices.concat(
		manual_stagescreen_choice as DropdownChoice
	)
	stageScreenChoicesDropDown.default = stageScreenChoicesDropDown.choices[0].id

	// Update stagescreen layout choices with data from propresenterStateStore
	const stageScreenLayoutChoicesDropDown = feedbackDefinitions.StageLayouts?.options[2] as CompanionInputFieldDropdown
	const manual_stagescreenlayout_choice = stageScreenLayoutChoicesDropDown.choices.pop() // The last item in the stage screen layout choices list (after all the current stage screen layouts list from ProPresenter) is a placeholder, that when selected, allows for manually specifing the stage screen layout (in another text input)
	stageScreenLayoutChoicesDropDown.choices = instance.propresenterStateStore.stageScreenLayoutChoices.concat(
		manual_stagescreenlayout_choice as DropdownChoice
	)
	stageScreenLayoutChoicesDropDown.default = stageScreenLayoutChoicesDropDown.choices[0].id

	// Update timer choices with data from propresenterStateStore
	const timerChoicesDropDown = feedbackDefinitions.TimerState?.options[0] as CompanionInputFieldDropdown
	const manual_timer_choice = timerChoicesDropDown.choices.pop() // The last item in the timer choices list (after all the current timers list from ProPresenter) is a placeholder, that when selected, allows for manually specifing the Timer (in another text input)
	timerChoicesDropDown.choices = instance.propresenterStateStore.timerChoices.concat(
		manual_timer_choice as DropdownChoice
	)
	timerChoicesDropDown.default = timerChoicesDropDown.choices[0].id

	// Update prop choices with data from propresenterStateStore
	const propChoicesDropDown = feedbackDefinitions.PropActive?.options[0] as CompanionInputFieldDropdown
	const manual_prop_choice = propChoicesDropDown.choices.pop() // The last item in the prop choices list (after all the current props list from ProPresenter) is a placeholder, that when selected, allows for manually specifing the Prop (in another text input)
	propChoicesDropDown.choices = instance.propresenterStateStore.propChoices.concat(manual_prop_choice as DropdownChoice)
	propChoicesDropDown.default = propChoicesDropDown.choices[0].id

	return feedbackDefinitions
}
