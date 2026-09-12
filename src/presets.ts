import { combineRgb, CompanionPresetDefinitions } from '@companion-module/base'
import { ActionId } from './actions'
import { DeviceConfig, InstanceBaseExt } from './config'

export function GetPresets(instance: InstanceBaseExt<DeviceConfig>): CompanionPresetDefinitions {
	const presets: CompanionPresetDefinitions = {
		// **** ANNOUNCEMENT *****
		['Focus Announcement Active']: {
			name: 'Focus Announcement Active',
			category: 'Announcement',
			type: 'button',
			style: {
				text: 'Focus\\n\\n\\nActive',
				size: 'auto',
				color: combineRgb(192, 192, 255),
				bgcolor: combineRgb(0, 0, 153),
				png64:
					'iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABk2lDQ1BJQ0MgUHJvZmlsZQAAKJF9kc0rRGEUhx+DRiILlGRxF1gh\
						ISkbxkKKmgbla+HOnS81c+ftzkjKUtkqSmx8LWytsLSwVUr5KPkDZEVspOu8c2kGcep0nn7v+zv33POC78RUKlnSByk764QGA8bE\
						5JThf8BPLTXU02taGdUfDA4j8VW/x+sVRbpetupev8//jcpINGNBkSHcZyknKzwrHFzIKs2HwjWODCV8pjnu8Y3msMePuTtjoQHw\
						6Z6GlTAjwrpni5VwUsJ67sZIKqJ15bGteV1zuMAbL+BUct76nFP/YUXUHh/V9yUbGGSIEYIYhJlnjiRZWqXaomQIyXngD39Xzj9A\
						GsUijnjiJMRt0C+Kkk5R4SHpZNFGi3AH7ZLd+m1+7jyvpXeg5wWKV/NaeAOOV6DuNq81bkPVMhydKdMxc1KxpC8Wg6cDeZJJqL6A\
						8ulMrLPDm74iAKX3rvvcBP41eF913bdd133fE/MdnNrenj97sX8NY0swfA6bW9Acl2/O/LGPstw+/t9ZWeHOPwC0UXgblG4USAAA\
						ADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAASKADAAQAAAABAAAASAAAAACz+WTVAAADG0lEQVR4\
						Ae2YyWsUQRhHZ9zFXeMWd8WclFwE/wQvgn+uVy8eRFxBhWhIgkEJbhhcEqOO70k1jDo4Ct2dTPh98OiameruqtdfVU9Vp5OIgRiI\
						gRiIgRiIgRiIgRiIgRiIgRiIgRiIgRiIgRiIgRiIgRhYBwa6o9KHXq9nW2UjbIcxOAaHYCtMw6Nut/uBY22xqbYr1XyhImQDl90M\
						CtkNR+E4jJeygo6A9a7DHKxfQUixo1tgJ+yCA6CAE6AMBck+8OFa3/gEfq59RDSSQXTUYeATFzPgb7HIj+/ATp+CKjsUcbCPHZQr\
						IRTbidoFFTl29DKcg2GC7lHnJkzCVXAIKdYsMptWNWoXRG980pfgGtjZYWm/RJ0H4BC6AHthzUQTgpxQq/nC8rAww6q3U+tDaFjj\
						mmiQ17TTzkMjH00IGnkp/R2IoH4bA8oRNEBK/1cR1G9jQDmCBkjp/yqC+m0MKDchqMd9vhcG3HK0vmpC0DIKXsN7+AaDZCmxEulx\
						zUYT/6TdbrgL+2ECqtW5q3KXIYbi3oAi58Hlhp8tV/U8b9gyhSrNRu2C2LBaYcE6RbPNIFfjdtTtiitwEczaFXgMN8rxLcf74Pcn\
						wRW95yp5DFy4rso/89oF0ZEOksyIuUIHYXbY9dlZcJ9HSQ6tWZihPlV61n8J/u5q3r0gtzw8z/PNLFGaO4itZFcjgmj87+F+z1N4\
						BWaDWXUazsAzWFISR+evn3NYEWY9F7x74DBUsirhCvN61VxHsd5oS5AZNQNmiVsgdtyhMwF34AX8Egiz058FWQp+Ds5t28BzleRw\
						dPi6RTIPX6DWaEVQGUJKMIsmwWHik3fIjSNgoQjh459Rsutr+UUJi5yj8FvgtcRtV18QtUYrgkqLnbSnYAF84s5DZsB5eAIf4Z+j\
						SFvhBK8njYSNbCVKhkxzM7OoygbfVA6zMTKilUmXe/1XtCaotMon/RCcLxwSZoCSZE0KanOI+fpfJlNuI8NJ29e4UvwPpDjfYokY\
						iIEYiIEYiIEYiIEYiIEYiIEYiIEYiIEYiIEYiIEYiIEYiIEYaMLAD2uXpBDC2tGgAAAAAElFTkSuQmCC',
				pngalignment: 'center:center',
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.activeAnnouncementOperation,
							options: { active_announcement_operation: 'focus' },
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		},
		// **** AUDIO *****
		// **** CAPTURE *****
		['Capture']: {
			name: 'Toggle Capture',
			category: 'Capture',
			type: 'button',
			style: {
				text: 'Start\\n\\n\\nCapture',
				size: 'auto',
				bgcolor: combineRgb(120, 0, 0),
				color: combineRgb(255, 192, 192),
				png64:
					'iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABk2lDQ1BJQ0MgUHJvZmlsZQAAKJF9kc0rRGEUhx+DRiILlGRxF1gh\
						ISkbxkKKmgbla+HOnS81c+ftzkjKUtkqSmx8LWytsLSwVUr5KPkDZEVspOu8c2kGcep0nn7v+zv33POC78RUKlnSDik764QGA8bE\
						5JThf8BPLTXU02taGdUfDA4j8VW/x+sVRbpetupev8//jcpINGNBkSHcZyknKzwrHFzIKs2HwjWODCV8pjnu8Y3msMePuTtjoQHw\
						6Z6GlTAjwrpni5VwUsJ67sZIKqJ15bGteV1zuMAbL+BUct76nFP/YUXUHh/V9yUbGGSIEYIYhJlnjiRZWqXaomQIyXngD39Xzj9A\
						GsUijnjiJMRt0C+Kkk5R4SHpZNFGi3AH7ZLd+m1+7jyvpXeg5wWKV/NaeAOOV6DuNq81bkPVMhydKdMxc1KxpC8Wg6cDeZJJqL6A\
						8ulMrLPDm74iAKX3rvvcBP41eF913bdd133fE/MdnNrenj97sX8NY0swfA6bW9Acl2/O/LGPstw+/t9ZWeHOPwCJYXgLMfDrDgAA\
						AGxlWElmTU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAIdpAAQAAAABAAAATgAAAAAAAABaAAAA\
						AQAAAFoAAAABAAKgAgAEAAAAAQAAAEigAwAEAAAAAQAAAEgAAAAAzItoSgAAAAlwSFlzAAAN1wAADdcBQiibeAAAAu1JREFUeAHt\
						mMtqVEEQhjOihkgM6M4LOEbEpde9QgKagFlFNxqy1ZW+gJG8gUtJQF2aJ1DwtvOCiiAImoU6C++uFdQ4fv9wKjSBmUmkD8mBv+Gf\
						rqqprlP9zeX0TE+PhwmYgAmYgAmYgAmYgAmYgAmYgAmYgAmYgAmYgAmYgAmYgAmYgAmYgAmYgAmsfQLNZvMYOperU2qdR0dz1VvV\
						OmxkD/qOruVqhFo30Dc0mKvmqtVhEw/QQ9QbTWBvDHu5c7pGtdBjdHe569dkHhsYRQvoYDSIPYxeoc0Ri5nYein8mJWLtGY4iR3G\
						/4tORKxyM83fQzejcewB9BXNJLEa/iR6jgRTkj0ROZrxZ9AXNBBx7DlUzXcRjW9Fv9HJZEOX8T+j/mLTgjOL2o2rydp+krR2KomN\
						4f9CWyJWmZmmT6MfqC+axp5H04k/id9tnE3yp0l+nfh9+LrGeMRyz+tyF0zq1bEbtVrtp2JsYgfTXnRLfjEuhNFhvpg8dxt7H7W2\
						KVbUbmDW5ZcxygS0nYY/JE0LkMZbPbDJDUz7ZXcZB8iNL+7WWvJ3Jms+YutapYwyATXpuJZ0LV8jrik/Yq0nOjxEXtQLX0sUS/0O\
						ZVb+VDS78pXdVyx9ZePdVNdSPh5/mF7K7jJekLtQ5Owu5qglVx+3T0U8+1QmoAbd7uLj0fqSZpMCNo9Gk11cSex2ZpozQtIbarWA\
						UHsTfh29R9UaNB+3+bHonNgUWrzNK46v8027kd7mdVjUOehSUq+6t/li8zooziUb0kFRm5yNWJE3QSw9KD7DP7MkR+clwV08gWPr\
						oHgnzauUTfMjSCfjQ9E49hD6358aQ0mdI9TRT43jEavkzAbuo0eoNzaAnePH6hPqVPfdk8AYZCP6ayLn3x3Xi5pxV4vLZZ/LvIu1\
						muWOo8PdKfQ0Y/eqNU7tdxlrupQJmIAJmIAJmIAJmIAJmIAJmIAJmIAJmIAJmIAJmIAJmIAJmIAJmIAJmIAJlEHgHzwdWD1RpQZf\
						AAAAAElFTkSuQmCC',
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.captureOperation,
							options: {
								capture_operation: 'toggle',
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [
				{
					feedbackId: 'Capture',
					options: {},
					style: {
						bgcolor: combineRgb(0, 160, 0),
						color: combineRgb(192, 255, 192),
						text: 'Stop\\n\\n\\n$(Propresenter-API:capture_time)',
					},
				},
			],
		},
		// **** CLEAR *****
		['Clear Group']: {
			name: 'Clear Group',
			category: 'Clear',
			type: 'button',
			style: {
				text: 'Clear\\n\\n\\nGroup',
				size: 'auto',
				color: combineRgb(255, 128, 128),
				bgcolor: combineRgb(75, 0, 0),
				png64:
					'iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABk2lDQ1BJQ0MgUHJvZmlsZQAAKJF9kc0rRGEUhx+DRiILlGRxF1gh\
						ISkbxkKKmgbla+HOnS81c+ftzkjKUtkqSmx8LWytsLSwVUr5KPkDZEVspOu8c2kGcep0nn7v+zv33POC78RUKlnSByk764QGA8bE\
						5JThf8BPLTXU02taGdUfDA4j8VW/x+sVRbpetupev8//jcpINGNBkSHcZyknKzwrHFzIKs2HwjWODCV8pjnu8Y3msMePuTtjoQHw\
						6Z6GlTAjwrpni5VwUsJ67sZIKqJ15bGteV1zuMAbL+BUct76nFP/YUXUHh/V9yUbGGSIEYIYhJlnjiRZWqXaomQIyXngD39Xzj9A\
						GsUijnjiJMRt0C+Kkk5R4SHpZNFGi3AH7ZLd+m1+7jyvpXeg5wWKV/NaeAOOV6DuNq81bkPVMhydKdMxc1KxpC8Wg6cDeZJJqL6A\
						8ulMrLPDm74iAKX3rvvcBP41eF913bdd133fE/MdnNrenj97sX8NY0swfA6bW9Acl2/O/LGPstw+/t9ZWeHOPwC0UXgblG4USAAA\
						ALJlWElmTU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAAANAAAA\
						cgEyAAIAAAAUAAAAgIdpAAQAAAABAAAAlAAAAAAAAABIAAAAAQAAAEgAAAABR0lNUCAyLjEwLjM2AAAyMDI0OjEwOjEzIDIyOjAz\
						OjA5AAACoAIABAAAAAEAAABIoAMABAAAAAEAAABIAAAAAMnVHCgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAN0aVRYdFhNTDpjb20u\
						YWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+\
						CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAg\
						IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94\
						YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAg\
						IHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5HSU1Q\
						IDIuMTAuMzY8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMjQtMTAtMTNUMjI6MDM6MDk8L3ht\
						cDpNb2RpZnlEYXRlPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAg\
						ICA8dGlmZjpYUmVzb2x1dGlvbj43MjwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzI8L3Rp\
						ZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDxl\
						eGlmOlBpeGVsWERpbWVuc2lvbj4yNTwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwv\
						ZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MjU8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgog\
						ICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KW5qa0QAABbhJREFUeAHtmdtPG0cUh21u\
						xhg7lEjUXKQYtWBcR6IpJFDemkqVmj41banaPy9PLSV5jNT0wcpTIIK0IJGai4R5gBgsGXGxzTXOd5xdy2zttEU7Rq3OSuOZOTNz\
						dn6fz87M2h6PXkpACSgBJaAElIASUAJKQAkoASWgBJSAElACSkAJKAEloASUgBJQAv8DAt6r0jA3N9ccDodDe3t74ebm5u7Xr193\
						FotFf0NDg4e8QJ71er1bZ2dn27lcbn90dPT0KuZad0CJRKKpr68vjPA4AKKI7ifvJi8BEgjUC2RZ0hblddIyAJcWFhbSk5OT59Kn\
						XlfdABEV3lQq5SsUCh81NjZ+huhbiO4lbyWvOQ/a88B4RT5PVCUymUxyYmJCANblqjkxN+8ucNbW1oKAuE26h9Bh/AfeBcZ5f8Yc\
						YFvA12MAzw0MDOw7+5ioN5hw6vQpkXNycnIb+yRCBVL7v4Ej/ugfPD8/H2P8JPkoj2qr8z4m6sYBTU1NNfKtRxH2JQJiCG25rBAe\
						s2Zr7boXiUSGxPdlff3TccYBDQ8Ph/nG7wJo2IYDMFmI98jT1hpTa7552tP022d8UToJJPx9TETeFd+1BrplNwpItnKgxBE4woTb\
						7Ukjcp/0tKmp6QFtM4g/tNvsnHaxPaPtAempQKpoa6f9E+xxuYdtN5EbBRQIBEJMOgqkHlJ5Q0CsREZyZ2fnN8rTtD23gJQ0Shn7\
						rN/vnz49PX1COYlNdrPyRRT18rhFrXuU7W4XjAJit+niW44gzl85ceohRI9wHvqQfIVImiYXSAIhT3lWbEdHR2uMl/VrBNu1Sh+U\
						xWc//d532F2tNrnqzeGMyOhGtJySy9FjdWlD8BjrSJH2R8FgcHl3d/chNtnKvZysf+X0vNLS0jIEnPvSl9TmcC/rUS/2HuwvnW1u\
						1Y0CYpLXEXC92mSxy1Y/jkjv4eHhI7IV+snp2XN8fJzx+XwxbF9TFTgBsTsv7J346HTa3awbBYRAOau0IqTqnAUSDZ+Sy4KcjUaj\
						KXLP8vJyBNsXjB8HQFU40o/LT58Lj+9bs3ufRtcgFlIvQp2P119mDwTbdqHv340FTrFirO3D1dxoBLF+lBZdZlzrcJijzwwin5Ay\
						RM4NHq0iYDMs8LJ7yXZ+R/JqqrEXaDf6XmY6gnYRsVtNHLYSHAA9ZLFOAmQIsT+wc/2ILdrR0fEnY6exzZJy1XxgzwK2tG5Va3fD\
						ZjSC2I22iIYtBEcQUvn45NmeZzjjyM61Sr8o+X0EjyHKS/8AoGTrXxGAnHfENoaP8npEmwfbptzDDRC1fBiNIABsc+MUYo4qJ0B9\
						nyQ/X6wSOQOkbyjfsQCUjgD8LPItwAaJLtnd5knlk7T4ok0erw0Ok3IPY5fRCELkQSgUShJFmwD4wI4iyn7KMSB5iY4RC055ncEu\
						5XGiw0P7C8oSYeVzEGWJHonOZDqdvgDObVKVYe+275K/ZDLZQ4R8j5ivLOElO9/+HkkWcXkdabPhlRqtD9pzJIm2NvKQ3ceyP6bb\
						TxwNNivHuF02+ojJZBcXF7cRmKD4O+lYbHJhu4ZgOWXX/OGMPtLWbfUtfZmUT0h/ADwxODj46q03c5/GI0imvr6+3sqiO85j8R2C\
						b2LyXVLSMdGzxNhfOA486+/vv7C2XdLnO4cZjyC5uwhh13oBoCmqz4mAQ8rVj9dVpkt/WXMOgDNL+We6zNUDjkylLhFka15dXfUR\
						QUPUP0foLVIfwmv+aG+Bkbd7OSrMs2DLo/oyHo+f2D5N53UFJGIQ27ixsdGVz+dvElVD1G8ATf7deI+8jQVdXh/k0ckCRRbgFG1J\
						4CzFYrFtyuX3EvFn+qo7IFuQ/BLIGSYIpC4gyU4nb+alF0/qBexZFmL543BHjgtX9cehPV/NlYASUAJKQAkoASWgBJSAElACSkAJ\
						KAEloASUgBJQAkpACSgBJaAE/tME3gD+AOd8OcPrQAAAAABJRU5ErkJggg==',
				pngalignment: 'center:center',
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.clearLayerOrGroup,
							options: {
								clear_layer_or_group_dropdown: 'group',
								clear_group_id_dropdown: instance.propresenterStateStore.clearGroupChoices[0]?.id ?? '',
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [
				{
					feedbackId: 'Layer',
					options: {
						layer: 'any',
					},
					style: {
						color: combineRgb(255, 192, 192),
						bgcolor: combineRgb(255, 0, 0),
					},
				},
			],
		},
		['Clear Audio']: {
			name: 'Clear Audio',
			category: 'Clear',
			type: 'button',
			style: {
				text: 'Clear\\n\\n\\nAudio',
				size: 'auto',
				color: combineRgb(255, 128, 128),
				bgcolor: combineRgb(75, 0, 0),
				png64:
					'iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABk2lDQ1BJQ0MgUHJvZmlsZQAAKJF9kc0rRGEUhx+DRiILlGRxF1gh\
						ISkbxkKKmgbla+HOnS81c+ftzkjKUtkqSmx8LWytsLSwVUr5KPkDZEVspOu8c2kGcep0nn7v+zv33POC78RUKlnSByk764QGA8bE\
						5JThf8BPLTXU02taGdUfDA4j8VW/x+sVRbpetupev8//jcpINGNBkSHcZyknKzwrHFzIKs2HwjWODCV8pjnu8Y3msMePuTtjoQHw\
						6Z6GlTAjwrpni5VwUsJ67sZIKqJ15bGteV1zuMAbL+BUct76nFP/YUXUHh/V9yUbGGSIEYIYhJlnjiRZWqXaomQIyXngD39Xzj9A\
						GsUijnjiJMRt0C+Kkk5R4SHpZNFGi3AH7ZLd+m1+7jyvpXeg5wWKV/NaeAOOV6DuNq81bkPVMhydKdMxc1KxpC8Wg6cDeZJJqL6A\
						8ulMrLPDm74iAKX3rvvcBP41eF913bdd133fE/MdnNrenj97sX8NY0swfA6bW9Acl2/O/LGPstw+/t9ZWeHOPwC0UXgblG4USAAA\
						ALJlWElmTU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAAANAAAA\
						cgEyAAIAAAAUAAAAgIdpAAQAAAABAAAAlAAAAAAAAABIAAAAAQAAAEgAAAABR0lNUCAyLjEwLjM2AAAyMDI0OjEwOjE4IDA3OjQ5\
						OjE1AAACoAIABAAAAAEAAABIoAMABAAAAAEAAABIAAAAAF76TrMAAAAJcEhZcwAACxMAAAsTAQCanBgAAAN0aVRYdFhNTDpjb20u\
						YWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+\
						CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAg\
						IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94\
						YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAg\
						IHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5HSU1Q\
						IDIuMTAuMzY8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMjQtMTAtMThUMDc6NDk6MTU8L3ht\
						cDpNb2RpZnlEYXRlPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAg\
						ICA8dGlmZjpYUmVzb2x1dGlvbj43MjwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzI8L3Rp\
						ZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDxl\
						eGlmOlBpeGVsWERpbWVuc2lvbj4yNjwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwv\
						ZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MjY8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgog\
						ICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4K8Oq5ZwAAA0lJREFUeAHtmF1vDFEch3dV\
						Jdy0ERFJRZR6aUm0PoH3eA8XxK3EHTcSH4Nww7VPoEI1QYgL7gS9UKESJQR1oV4uSuh6ftsZmWx2Zyrd0xn8/smz58yZMzPnPPuf\
						M7NbKjlswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAb+AQPlv20OlUplCWNeDl2wCrrL5fJhyiAxN8hZm3BSRMzh\
						NAuhA9ZAD6yDNtC4Z+XLLYQgZLQw4fmwDNZDNyg7JGgBVCCXyFUQYjqZ9RFQuRTqychNDuOppqrKvEJidiQuniVDt9V3eAnPYQWs\
						hmCRawZlzEoyJuAdjMIzGI7KCRbmSTLwFNv/jaBvTPYzjIBEPAZlyhdk/KDMJYqQQcqU83AXxpDxMxcTDS5aBEEa2ghi3jYYY67N\
						etdwpBiwoBQ52mVBGYKKsgalDpPHuRbyarBWZb0rxV2bUhZWUCRlI7PcBRugHcZpH6K8hqiHlMGjkIKQMI+Zn4A9kFwGFrG9FTbT\
						Z4DytuoQLAopiNkeh30ps5a0/dH+iyn9Zrwr+e3M+GRZJ9BtI9L6sb+P/XujPk8plSXJuMWG2hXq96JaC/QxKxnEpLsYv26NldDK\
						9hvKe1BP1m7a4y/uNfUzoLfr7XATzoJ+g+k/IvXbCfchSAQVFGWL/s44Cq2JGfRSl4gPibZS1F8LchySOgnn4Alch5OwBeLQuYJF\
						UEGMWhM5BnFGJCei7FmcbIjqbTVtypxhnlr9CDxIXdvJ0NMtWNQbeDMvdoiT/ek1PtUMQLfVDeQcoFQGaTsZ48mNZtdDZ1DnNAes\
						26ikl0BiiOq26DgtyFpzdFspc3qi7RZKZafi0VQR5jO0oDGGrb9S00IL8PtEh0HqmrwyT8dqQY5lSJLaO0AhseofLHSxkKGXuazQ\
						E+j3Yh29IV+NDtKTKpYTn0cLt9oVA/R/MFUN8xla0CWGrduk0e+nUfadZpLVW4x6HBeoXIba9ni/2vtBf7QFjXrvIU29IGuK1otN\
						oN9Ua0G39Su4A1eQ85WybnBsHzv0OtAL7fARtOYMcpxKhw3YgA3YgA3YgA3YgA3YgA3YgA3YgA3YgA3YgA3YgA3YgA3YgA1Mx8Av\
						92Gsb68hCR8AAAAASUVORK5CYII=',
				pngalignment: 'center:center',
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.clearLayerOrGroup,
							options: { clear_layer_or_group_dropdown: 'layer', clear_layer_dropdown: 'audio' },
						},
					],
					up: [],
				},
			],
			feedbacks: [
				{
					feedbackId: 'Layer',
					options: {
						layer: 'audio',
					},
					style: {
						color: combineRgb(255, 192, 192),
						bgcolor: combineRgb(255, 0, 0),
					},
				},
			],
		},
		['Clear Messages']: {
			name: 'Clear Messages',
			category: 'Clear',
			type: 'button',
			style: {
				text: 'Clear\\n\\n\\nMessages',
				size: 'auto',
				color: combineRgb(255, 128, 128),
				bgcolor: combineRgb(75, 0, 0),
				png64:
					'iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABk2lDQ1BJQ0MgUHJvZmlsZQAAKJF9kc0rRGEUhx+DRiILlGRxF1gh\
						ISkbxkKKmgbla+HOnS81c+ftzkjKUtkqSmx8LWytsLSwVUr5KPkDZEVspOu8c2kGcep0nn7v+zv33POC78RUKlnSByk764QGA8bE\
						5JThf8BPLTXU02taGdUfDA4j8VW/x+sVRbpetupev8//jcpINGNBkSHcZyknKzwrHFzIKs2HwjWODCV8pjnu8Y3msMePuTtjoQHw\
						6Z6GlTAjwrpni5VwUsJ67sZIKqJ15bGteV1zuMAbL+BUct76nFP/YUXUHh/V9yUbGGSIEYIYhJlnjiRZWqXaomQIyXngD39Xzj9A\
						GsUijnjiJMRt0C+Kkk5R4SHpZNFGi3AH7ZLd+m1+7jyvpXeg5wWKV/NaeAOOV6DuNq81bkPVMhydKdMxc1KxpC8Wg6cDeZJJqL6A\
						8ulMrLPDm74iAKX3rvvcBP41eF913bdd133fE/MdnNrenj97sX8NY0swfA6bW9Acl2/O/LGPstw+/t9ZWeHOPwC0UXgblG4USAAA\
						ALJlWElmTU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAAANAAAA\
						cgEyAAIAAAAUAAAAgIdpAAQAAAABAAAAlAAAAAAAAABIAAAAAQAAAEgAAAABR0lNUCAyLjEwLjM2AAAyMDI0OjEwOjE4IDA3OjQ0\
						OjM1AAACoAIABAAAAAEAAABIoAMABAAAAAEAAABIAAAAAL5eijoAAAAJcEhZcwAACxMAAAsTAQCanBgAAAN0aVRYdFhNTDpjb20u\
						YWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+\
						CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAg\
						IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94\
						YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAg\
						IHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5HSU1Q\
						IDIuMTAuMzY8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMjQtMTAtMThUMDc6NDQ6MzU8L3ht\
						cDpNb2RpZnlEYXRlPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAg\
						ICA8dGlmZjpYUmVzb2x1dGlvbj43MjwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzI8L3Rp\
						ZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDxl\
						eGlmOlBpeGVsWERpbWVuc2lvbj4yNzwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwv\
						ZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+Mjc8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgog\
						ICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KazgmbwAABDJJREFUeAHtmNduE0EUQGN6\
						6B0CoYcuipAogoB44hMQv8gPBFAEQrwRRJeAEAShpApCryGEcyJP5AeHl3jsjbhXOtn1er3eOXvvnXGamiLCQBgIA2EgDISBMBAG\
						wkAYCANhIAyEgTAQBsJAGAgDYSAMhIEwMBMMlGbCTVa7x/Hx8dkcXwnrYaRUKvVVO2+6x+ZM9wL1/DxSfKDzYSPsLvOH7TX4fwUh\
						ZhYClsMO2AnK2QUr4AoMQpYodAYhxmyxhJSyF5SyBRaD2TQAT2AEskThBJWzRQHbIJWRghQ1F1KMs9MD3fSfsXSw1tvCCEKMg18L\
						ZolC9oCSloHZohD7jfvyGcyefsgWDRWEFAdqtmwCs0UpymmBZlCKYYYoxPOXgvEKesieHxOvMv1piCDE+L2roA0UY9bYgJ22bchG\
						kvOLfWV8gy2gJI91w3PIGnUTVM4Ws6IVFCJmjK89Xi2+cPAxDIMil4AxBJbXe1/kjOyCEOOCzul4GyhEzBYzyL6TMoXdyfCYg78J\
						r+EwmD1ml33oqVBe1T7LW7WLbIIQM4/b3AAKSRmzmf2UBexOKaef927AMzgK+0GZxidQkFmUPbIJ4s4XgpnSDgcgNVd2pwybsX3F\
						xZ9T+Ak4BosgxQt2npA9P9OBnNucgmykvdAJPnFnKn8iOEOZRZZeZTgb2W86wAZ8HM6Aot+C7yvwHvRCXcIZIXtQbvP5ktWgJMvO\
						rdig7U8O/jZcAsvqCJwDe8wA2HfsP0q/A/dzT+98x0TURVD6MrfIMmstN0XZk8wqy6ULesF+cxIU8hVcJynRTPoNI2AZ3oeXiBpl\
						my3qLqhyJMhSglO89/EdbOY2ZSV6/BAocQGkGcutM9xduAIPcvajnD2Ie/93MDBLxywxs8yUNpgHlqTN3Z8eykty2J3YN6NOg837\
						F599WL4WL2sbPsEihdP7GDjrKcdSugXvwLDEbOD2K/uWGaZIV+BZokiCvjHCl2BpbQXDfnO9zDDbR9ABSlKW5+6D7ZAlGlpilSOy\
						RCgVS2YNpJ7jOuoNPIA+sBy954Ngozds9pIlipRBDtA+JKnn+HPkFLi9Cso6BmZNerjpMxyqfRRNkGUjKdwfAn+0toIZNggfIYXn\
						ZJvq01NIX9bordO3DdkMkh7oBH+HnQdl2YcswbOwDDzfXpUliiboA6N05nLAzkz2nHXgbGVZ+b5LAMPZzmWC57+ALOEao1BBo27j\
						hi5AO7jCtoRsyOlhWl7K8ZgZdRE6afJO+zWP9KU1v/A0LuhUfxmawf8DKaIyLCszxzWTK+muXHK49uRTcb8QwWBHySL7TJJgabWA\
						s5WZ8xYsqS7h/GG22aJwJeZIEeS/QsRs2Qquc5zBFGRTVlBfzszh+hFhIAyEgTAQBsJAGAgDYSAMhIEwEAbCQBgIA2EgDISBMBAG\
						wkAYmEEG/gKbhwLQRH3lLwAAAABJRU5ErkJggg==',
				pngalignment: 'center:center',
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.clearLayerOrGroup,
							options: { clear_layer_or_group_dropdown: 'layer', clear_layer_dropdown: 'messages' },
						},
					],
					up: [],
				},
			],
			feedbacks: [
				{
					feedbackId: 'Layer',
					options: {
						layer: 'messages',
					},
					style: {
						color: combineRgb(255, 192, 192),
						bgcolor: combineRgb(255, 0, 0),
					},
				},
			],
		},
		['Clear Props']: {
			name: 'Clear Props',
			category: 'Clear',
			type: 'button',
			style: {
				text: 'Clear\\n\\n\\nProps',
				size: 'auto',
				color: combineRgb(255, 128, 128),
				bgcolor: combineRgb(75, 0, 0),
				png64:
					'iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABk2lDQ1BJQ0MgUHJvZmlsZQAAKJF9kc0rRGEUhx+DRiILlGRxF1gh\
						ISkbxkKKmgbla+HOnS81c+ftzkjKUtkqSmx8LWytsLSwVUr5KPkDZEVspOu8c2kGcep0nn7v+zv33POC78RUKlnSByk764QGA8bE\
						5JThf8BPLTXU02taGdUfDA4j8VW/x+sVRbpetupev8//jcpINGNBkSHcZyknKzwrHFzIKs2HwjWODCV8pjnu8Y3msMePuTtjoQHw\
						6Z6GlTAjwrpni5VwUsJ67sZIKqJ15bGteV1zuMAbL+BUct76nFP/YUXUHh/V9yUbGGSIEYIYhJlnjiRZWqXaomQIyXngD39Xzj9A\
						GsUijnjiJMRt0C+Kkk5R4SHpZNFGi3AH7ZLd+m1+7jyvpXeg5wWKV/NaeAOOV6DuNq81bkPVMhydKdMxc1KxpC8Wg6cDeZJJqL6A\
						8ulMrLPDm74iAKX3rvvcBP41eF913bdd133fE/MdnNrenj97sX8NY0swfA6bW9Acl2/O/LGPstw+/t9ZWeHOPwC0UXgblG4USAAA\
						ALJlWElmTU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAAANAAAA\
						cgEyAAIAAAAUAAAAgIdpAAQAAAABAAAAlAAAAAAAAABIAAAAAQAAAEgAAAABR0lNUCAyLjEwLjM2AAAyMDI0OjEwOjE4IDA3OjIw\
						OjA5AAACoAIABAAAAAEAAABIoAMABAAAAAEAAABIAAAAADaNsQ8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAN0aVRYdFhNTDpjb20u\
						YWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+\
						CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAg\
						IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94\
						YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAg\
						IHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5HSU1Q\
						IDIuMTAuMzY8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMjQtMTAtMThUMDc6MjA6MDk8L3ht\
						cDpNb2RpZnlEYXRlPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAg\
						ICA8dGlmZjpYUmVzb2x1dGlvbj43MjwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzI8L3Rp\
						ZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDxl\
						eGlmOlBpeGVsWERpbWVuc2lvbj4yNjwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwv\
						ZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MjY8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgog\
						ICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4Ks5UovwAABFlJREFUeAHtmHtojlEcxzf3\
						+yWJkJE/tjAhoRS1MkpzqSGEYbktl1ZL+UP7Q4Tc1hrJHyjKJWQkl4xyXZFLC1GU+y3DXMden+96T72t2PZ6n/Mu/X712Tl7nvO8\
						zzmf/c5lb0KChRkwA2bADJgBM2AGzIAZMANmwAyYATNgBsyAGTADZsAMmAEzYAbMwH9gILGhjCEUCnWjL0vgKxQlJia+bQh9i7sg\
						xDRBxFhYAG3CUsopC6EEUVXha3Ep4ioIOd0ZdS4Mgpp9CXHtMhQg6TVlXKJmp7x0Ipw1E3lZFrSu5aUfuL8DTiHqVy1tY37buyDk\
						JDGK5TCwnqO5Sntl04t6PvdPzb0JCmdNJr2dDS2i7HUFz+2EYl9rU6MoOxrNYxN4KBuilaN3ahHPgdH6xUf4zCC9S4vxMugZ5eAe\
						8twWsqcsyufr/Zg3QeoZ06wZRTvIgKnQHOoSOhvtgbNQjqCfdXkoFm28TTHkJNPhAiiCJ6BD4S34W2irvwaL4TNoN9vIZ/Wi9BI6\
						pPkKbefKmM6wEq7AJtC0mwvKrMh4xy8SomklmYNB8QZaVdc8/PA9xSRoJmg3U/0L7IKLMB9GgrLmNOyGMTADNDV1HjoIB5hilZRe\
						wreg/oyqEzyFpTAAJKR68aVUFn0HhabVc9C68wrUTv+CvPe5BnkTxLoxicEtAk3rUtBalArKHIlRVhyHltAXNkMyjIMuoCySPMk6\
						CicQ9YMy0PApSGvQZJgOTUGL7l64AFqD0kD9eQarQRkmUcqcmqF2NyEfScqqwMKLILJnGCOYBsqQR5ADWpwV96EQ2sNC2AqzQNlV\
						W9ygwYogp1ygghCjQc8DTRN3pNBWfyx8bQ5lB9C55gjsB8nMA8UZeAzZoL5WwXboB6NA2bUGQVqnAgnX6UA+nA/NhQxw77lHXd/x\
						/AJJ0sBLwvc1/YZAOrjoSeUkbAOtN5Kr9j1AIWmR7asvxvJH0BmkhXU8ZIHWIMVr0JS6hKQqskx9GAo666yDDaAjgIsHVFZAR/gI\
						66E3uKjgc/RHCCQCFeR6jITu1HNgOOidmhqXoZDBvaTUvyESqEzTDuUyjmqCvgPKh0uQBish8n4lnxFYFkW+iPcGEwzgGWhg2p3e\
						gCSNgB2IyYTG3NeuVgHKMBeSo4x6CPlwG7aA1iIXL1wliNKLINdxJJyjrnWnGDT4tqDMKkBSCveVWVfAxT4qd0CSRoKmVykcAheR\
						7d21mJVepljN3iJD700FnXX6hO9XUh4GLcI6JOrAqKz6BF3BxXMqWo/c/fmI1bVAIi6C3EgQpcV4CuiMpAErtLuVQR40gT+FdrW1\
						yDn/pwaxuB5XQW4AiEqirl1sMGiarQKdjZZDF4jsp+4rYzYj5zploBH54kBfVNuHI0nrYTp8gwsMnkshfT2rI0AK6OtWTbe7UMp9\
						ZZCFGTADZsAMmAEzYAbMgBkwA2bADJgBM2AGzIAZMANmwAyYATNgBsyAGaiLgd9bAg/8R0NAhgAAAABJRU5ErkJggg==',
				pngalignment: 'center:center',
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.clearLayerOrGroup,
							options: { clear_layer_or_group_dropdown: 'layer', clear_layer_dropdown: 'props' },
						},
					],
					up: [],
				},
			],
			feedbacks: [
				{
					feedbackId: 'Layer',
					options: {
						layer: 'props',
					},
					style: {
						color: combineRgb(255, 192, 192),
						bgcolor: combineRgb(255, 0, 0),
					},
				},
			],
		},
		['Clear Announcements']: {
			name: 'Clear Announcements',
			category: 'Clear',
			type: 'button',
			style: {
				text: 'Clear\\n\\n\\nAnnounce',
				size: 'auto',
				color: combineRgb(255, 128, 128),
				bgcolor: combineRgb(75, 0, 0),
				png64:
					'iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABk2lDQ1BJQ0MgUHJvZmlsZQAAKJF9kc0rRGEUhx+DRiILlGRxF1gh\
						ISkbxkKKmgbla+HOnS81c+ftzkjKUtkqSmx8LWytsLSwVUr5KPkDZEVspOu8c2kGcep0nn7v+zv33POC78RUKlnSByk764QGA8bE\
						5JThf8BPLTXU02taGdUfDA4j8VW/x+sVRbpetupev8//jcpINGNBkSHcZyknKzwrHFzIKs2HwjWODCV8pjnu8Y3msMePuTtjoQHw\
						6Z6GlTAjwrpni5VwUsJ67sZIKqJ15bGteV1zuMAbL+BUct76nFP/YUXUHh/V9yUbGGSIEYIYhJlnjiRZWqXaomQIyXngD39Xzj9A\
						GsUijnjiJMRt0C+Kkk5R4SHpZNFGi3AH7ZLd+m1+7jyvpXeg5wWKV/NaeAOOV6DuNq81bkPVMhydKdMxc1KxpC8Wg6cDeZJJqL6A\
						8ulMrLPDm74iAKX3rvvcBP41eF913bdd133fE/MdnNrenj97sX8NY0swfA6bW9Acl2/O/LGPstw+/t9ZWeHOPwC0UXgblG4USAAA\
						ALJlWElmTU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAAANAAAA\
						cgEyAAIAAAAUAAAAgIdpAAQAAAABAAAAlAAAAAAAAABIAAAAAQAAAEgAAAABR0lNUCAyLjEwLjM2AAAyMDI0OjEwOjE4IDA3OjEy\
						OjEwAAACoAIABAAAAAEAAABIoAMABAAAAAEAAABIAAAAADIcQi0AAAAJcEhZcwAACxMAAAsTAQCanBgAAAN0aVRYdFhNTDpjb20u\
						YWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+\
						CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAg\
						IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94\
						YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAg\
						IHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5HSU1Q\
						IDIuMTAuMzY8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMjQtMTAtMThUMDc6MTI6MTA8L3ht\
						cDpNb2RpZnlEYXRlPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAg\
						ICA8dGlmZjpYUmVzb2x1dGlvbj43MjwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzI8L3Rp\
						ZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDxl\
						eGlmOlBpeGVsWERpbWVuc2lvbj4yODwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwv\
						ZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+Mjc8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgog\
						ICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KsSKnLQAAA/lJREFUeAHtmF1vVUUUhluB\
						glQUwSD40VIiBAhfCYSLpnIhBvHaS+HOH+BP4LcgxkC8NqLRQgKkJIQLqhDgxlb5iILWEtry5eF5yh6yOZqeHrvnnDZZK3nPzN4z\
						e/bMs9esmTkdHWFBIAgEgSAQBIJAEAgCQSAIBIEgEASCQBAIAkEgCASBIBAEgkAQCAKZCdRqtW7Ug3bletXiXA1X3S4QOmnT/q5B\
						b6G1hdaRrkKfo8ptXgMCShcjfh29iQShhKPMr0DWqaEsNq8AAcT+vILKEAShtwhJ76nvczY4vOtfL/NeJcZgl9PQVuSAZ7Kpzs7O\
						IeoLZQAJ5G3k9Wq0FDm92mL1X6PKThygsQ9Rd4NGx4Bznjqb0GHUCGiD5qotzgnoE7r6ziy6+zd19BDjico6ZWi/KXupqdrNVXaa\
						LHjLCahtcaPKr5ITUJX9bFtbAagB+pxBusGrmyp+Qu2p4ollpIuaenoOleczIFez39G1In1cjNM+u2HcjN5AWWPdfAX0iIG7N/ql\
						ALCE1P2U0CbRSKE+0r3I8iyWE5CD+T9fVzjfIyGsR9uQRw3PXNpDdAv9hIaR+yg3pVksJ6Db9NhjQ7N2kQcc+MdIOGkhSRtIvaUH\
						uQm13rfIKZfFcgL6mh77ZdPRwb8kXi6N4gH5O0gPcPD3kTHHAX+EdiDjzq9IIMkb/yE/igS0Exm8v0FZLCegk/T4JvL4oA2gfdO5\
						Zz/jJEfRBIdVjmM1g/EXyFVqD9L+RF8iQe9Gmh72HfoM6TneH0RZLBsgBq1HDKVeA+Av8v0ovbOL/DD1jCcdpL9Rx/wRlOqY6l1f\
						oTTVzOuN5Trvc+0HqdzSSytv+D8avMw9A2+yV8kIrGxOn02lG4L4FPmnmZ50DHnvUJGSTNuWlKk6bRkgPGSCzp8qDcCYsg+vWVp3\
						r/7vkV7Kt6OfkZAN3MakstU/Uy6bU75lgIpeniG9V+qx3tJXujZr0E7m9LqEziK9TZ1Drl6WJXP6ZrFWA7rBKK6URuKq9kG6xsuc\
						Yu5vkv1Bxqmlh/hnmlPLfyqdaq6AyYSYxVoKCABuAn9E6eub9jPNVpZGZ7m7Zc1p6HQyDulpG4p8L2ky6w6mi6rTtBJU3e5M7V2g\
						8CpaV1RyWXe5Hiuu9QYHfBB51tJrygDfK+6/RqrHnUbZPKjlgPCiu3iM+x2PD8mexx3KJyk/QYHB25hThpPqe0/PMR4d5xkXgCym\
						C7fFgPB8ejNAPeEFo9xptB+lVcttgTaORpGx6geeHSHNZm0DNJsRAcmAvBG9i5xSmt7m8eN6Ts/xRWFBIAgEgSAQBIJAEAgCQSAI\
						BIEgEASCQBAIAkEgCASBIBAEgkAQWDgEngI9+8X79D6T7AAAAABJRU5ErkJggg==',
				pngalignment: 'center:center',
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.clearLayerOrGroup,
							options: { clear_layer_or_group_dropdown: 'layer', clear_layer_dropdown: 'announcements' },
						},
					],
					up: [],
				},
			],
			feedbacks: [
				{
					feedbackId: 'Layer',
					options: {
						layer: 'announcements',
					},
					style: {
						color: combineRgb(255, 192, 192),
						bgcolor: combineRgb(255, 0, 0),
					},
				},
			],
		},
		['Clear Slide']: {
			name: 'Clear Slide',
			category: 'Clear',
			type: 'button',
			style: {
				text: 'Clear\\n\\n\\nSlide',
				size: 'auto',
				color: combineRgb(255, 128, 128),
				bgcolor: combineRgb(75, 0, 0),
				png64:
					'iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABk2lDQ1BJQ0MgUHJvZmlsZQAAKJF9kc0rRGEUhx+DRiILlGRxF1gh\
						ISkbxkKKmgbla+HOnS81c+ftzkjKUtkqSmx8LWytsLSwVUr5KPkDZEVspOu8c2kGcep0nn7v+zv33POC78RUKlnSByk764QGA8bE\
						5JThf8BPLTXU02taGdUfDA4j8VW/x+sVRbpetupev8//jcpINGNBkSHcZyknKzwrHFzIKs2HwjWODCV8pjnu8Y3msMePuTtjoQHw\
						6Z6GlTAjwrpni5VwUsJ67sZIKqJ15bGteV1zuMAbL+BUct76nFP/YUXUHh/V9yUbGGSIEYIYhJlnjiRZWqXaomQIyXngD39Xzj9A\
						GsUijnjiJMRt0C+Kkk5R4SHpZNFGi3AH7ZLd+m1+7jyvpXeg5wWKV/NaeAOOV6DuNq81bkPVMhydKdMxc1KxpC8Wg6cDeZJJqL6A\
						8ulMrLPDm74iAKX3rvvcBP41eF913bdd133fE/MdnNrenj97sX8NY0swfA6bW9Acl2/O/LGPstw+/t9ZWeHOPwC0UXgblG4USAAA\
						ALJlWElmTU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAAANAAAA\
						cgEyAAIAAAAUAAAAgIdpAAQAAAABAAAAlAAAAAAAAABIAAAAAQAAAEgAAAABR0lNUCAyLjEwLjM2AAAyMDI0OjEwOjE4IDA3OjQz\
						OjE3AAACoAIABAAAAAEAAABIoAMABAAAAAEAAABIAAAAAOg3y3IAAAAJcEhZcwAACxMAAAsTAQCanBgAAAN0aVRYdFhNTDpjb20u\
						YWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+\
						CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAg\
						IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94\
						YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAg\
						IHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5HSU1Q\
						IDIuMTAuMzY8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMjQtMTAtMThUMDc6NDM6MTc8L3ht\
						cDpNb2RpZnlEYXRlPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAg\
						ICA8dGlmZjpYUmVzb2x1dGlvbj43MjwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzI8L3Rp\
						ZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDxl\
						eGlmOlBpeGVsWERpbWVuc2lvbj4yOTwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwv\
						ZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MjY8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgog\
						ICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KVRsdzgAAA7RJREFUeAHtmGuLTVEYgI37\
						PeUu9/stKZQUgw/KB1JSxAe/wS+iFJIQ8okhkhKi3MlE7nflEmPG85jZOo1zxjiz1/qg961n9tn77L1mrWe/71p7n169IsJAGAgD\
						YSAMhIEwEAbCQBgIA2EgDISBMBAGwkAYCANhIAyEgTAQBv4DAw0pxtDW1raDdndCnxTtV2nzB8d2NzQ07K3yXY8O9e7R1bUvVkwu\
						OfYi2f/rW3uMpXzzkVbuw3NIka1jaHc2DIMkkVrQY3q9n9S/lKL3lPIy2t0J81O0b5upSixVf7O3mzqDfg+Iu92fnXkwC+ottzau\
						vQc3ycrvbJNHNkGMZBCsgk1Qb+a2cu1haIYPkDxyCvrMaJrAeaneDFLQA7CtLJFNkCVBmd1gVFJ30I5lli2yCUKOJbYWVkA9JWbW\
						tdLOBbanEPWFbfLIJoiROElPgaXQXUFKuA0+JjyCb/AWWiBL5BTkQ+M+OAHdnYMsp8mwBFaCkl/DNTLpIltFKS1ZZBPk3EG48iiq\
						q1CKAufCVvBhcCAUc88cPlumrobH4DQMhSSRTRByhjOC7eDAfHeqFq5SDtiyWgOLwCjktO+1C5zAju0p6SxYeqVHNkH03Dfu9/AE\
						as1BvrO5jC+AhaCYQk7lNbZllpk5ijwJSV5nsgmixD6RRQcYyEGoFUpYD4vBz9fhHMyDRjDzlGjWmJEbYRxMBVfJ0qPyrpTeeOcG\
						kdQKLbXgfDNiOozquNatK5lSz8Mz2A9XwO/6gTGjg187Zf5JnUGD6ewEMmcKW0uiq3A18ueL0RUnOc84Ubv67QEzyJu6Gcyoov9e\
						U3kdu+VE8Q/Kae3PVqZxaNefh6seucvRyzCg07cT2bfsXsAt2AarobLvXuNKV3rkKDFXpu5gdniemVQZb9g5D5aXJehkrEjPLcI3\
						+87XFd/1aFt5F3rUUAkXO+kWK53l6Or1Dg6BQsyc2XCgA4X6jOS5r0GRpUeqDHJw3mG33WUE5w6BV+DjgOHPtZbWBlgHCvLZZzzc\
						gE9gNMNDP5Qd2i89mJSdXCeBd/lf4i0nO59sgRWgXEvHG+lrRhFfOz4475hl++AIq6OlVmokKTE6+pReyj8HcpVhuY2FmVBt8i2O\
						Ke8MNKWQQ7t/XXo9J3sgyczzrd9y8gf5aploGR6Ho8hxDkoSSUqsjJ4iyb6NhOXQCGaTZfYSrkIT3EGOWRQRBsJAGAgDYSAMhIEw\
						EAbCQBgIA2EgDISBMBAGwkAYCANhIAyEgTAQBroy8BNBhtmPDHEyewAAAABJRU5ErkJggg==',
				pngalignment: 'center:center',
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.clearLayerOrGroup,
							options: { clear_layer_or_group_dropdown: 'layer', clear_layer_dropdown: 'slide' },
						},
					],
					up: [],
				},
			],
			feedbacks: [
				{
					feedbackId: 'Layer',
					options: {
						layer: 'slide',
					},
					style: {
						color: combineRgb(255, 192, 192),
						bgcolor: combineRgb(255, 0, 0),
					},
				},
			],
		},
		['Clear Media']: {
			name: 'Clear Media',
			category: 'Clear',
			type: 'button',
			style: {
				text: 'Clear\\n\\n\\nMedia',
				size: 'auto',
				color: combineRgb(255, 128, 128),
				bgcolor: combineRgb(75, 0, 0),
				png64:
					'iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABk2lDQ1BJQ0MgUHJvZmlsZQAAKJF9kc0rRGEUhx+DRiILlGRxF1gh\
						ISkbxkKKmgbla+HOnS81c+ftzkjKUtkqSmx8LWytsLSwVUr5KPkDZEVspOu8c2kGcep0nn7v+zv33POC78RUKlnSByk764QGA8bE\
						5JThf8BPLTXU02taGdUfDA4j8VW/x+sVRbpetupev8//jcpINGNBkSHcZyknKzwrHFzIKs2HwjWODCV8pjnu8Y3msMePuTtjoQHw\
						6Z6GlTAjwrpni5VwUsJ67sZIKqJ15bGteV1zuMAbL+BUct76nFP/YUXUHh/V9yUbGGSIEYIYhJlnjiRZWqXaomQIyXngD39Xzj9A\
						GsUijnjiJMRt0C+Kkk5R4SHpZNFGi3AH7ZLd+m1+7jyvpXeg5wWKV/NaeAOOV6DuNq81bkPVMhydKdMxc1KxpC8Wg6cDeZJJqL6A\
						8ulMrLPDm74iAKX3rvvcBP41eF913bdd133fE/MdnNrenj97sX8NY0swfA6bW9Acl2/O/LGPstw+/t9ZWeHOPwC0UXgblG4USAAA\
						ALJlWElmTU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAAANAAAA\
						cgEyAAIAAAAUAAAAgIdpAAQAAAABAAAAlAAAAAAAAABIAAAAAQAAAEgAAAABR0lNUCAyLjEwLjM2AAAyMDI0OjEwOjE4IDA3OjQ1\
						OjM2AAACoAIABAAAAAEAAABIoAMABAAAAAEAAABIAAAAALjflU0AAAAJcEhZcwAACxMAAAsTAQCanBgAAAN0aVRYdFhNTDpjb20u\
						YWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+\
						CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAg\
						IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94\
						YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAg\
						IHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5HSU1Q\
						IDIuMTAuMzY8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMjQtMTAtMThUMDc6NDU6MzY8L3ht\
						cDpNb2RpZnlEYXRlPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAg\
						ICA8dGlmZjpYUmVzb2x1dGlvbj43MjwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzI8L3Rp\
						ZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDxl\
						eGlmOlBpeGVsWERpbWVuc2lvbj4yNTwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwv\
						ZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MjU8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgog\
						ICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KKbe03gAABG5JREFUeAHtmVlrVVcUgHOt\
						2qrViHXCNhiHRq2zSFtbhzqC4osP/ktf7EMhDyKWKs44JE61Fq2Js3UWYuL1+8I5IVyTGGLWjcha8LnvGffe31l7nRNsaMhIA2kg\
						DaSBNJAG0kAaSANpIA2kgTSQBtJAGkgDaSANpIE0kAbSQBr4DAxUoudQrVbtYya0wDyYBCPtt8q1r6ETrsHDSqXivrAY6UCHNaBC\
						zkJO3g7L4Ut4Cx8T47i4C9rgENyIlDSeDiJjFjffAWvhUsEL2pE+dR/oFFgB68B4Bg96fwX8Ey3oe8b8A1yGAzxpl8ZHRZGVyt4P\
						imqHMEGma2RYc1xWbQPJcbIwHibCsMZSLKe73FMx3ts+wiI6gyzI1pyXtTNAyBfssz6tgqnQwb4LCLjH7yFDSYT39N72ERbRgsqX\
						wEA151tmtQd+g8lgVhxk4q0IeE8ox2qjvGfZR+3xUdkeVlqPSk/9boIEJ7UILLTTYSI0wWqYA59MRGfQUBN1iUkZSnP7vYeG0AnF\
						Sd1FDSqvCW/HRFBRQ24yuyvwDVhsH4Nvu743EmKU5VI006ZBO/suc70fi3WJMRFUzExBv0MHOHnbk0z+KW0DIsymRbAbfgXP8fX+\
						B8dO0tYl6iaoyAYzooqEHuhi30W2r4NL6LX7aJVjTVoGFnHrktf5QdgM+0BZbyA86iXIr9/1YEbcR4Cv8wfgm+gV9AXHfG2vgp/A\
						42aL2WSN6gFltcDXMANCox6C/MbZALNhMVhjjiDiMO0tJPX9bcY+M2MNKKAblKfcRlCS2y5BPwMce/mq52dM1EOQf8n/Al+BT38+\
						7AWLcytSriDpDa3bilwAFmGzYyV4vXJKGR77B9qhDXprFm1I1EOQYmrDyW+BJ+AXtDVnG1hvOmEu/AzWJjNJsYZLTFlLwfuehb8h\
						LOohaKDBmw33QRlzYCNsBTPDJecfoco5A2bMOnCpXoXbsATMtDsQWqzHQpByfKW3gpJ2wSaw1phRFt9ZYOYo5wQ8A0WeAjPHDDKT\
						muE7uAYhMRaCeos0s7HdAdYdi/NjqBS/nbzLysx5Di4l2yZQplIMRUpYlGs7rIOaG//P9nFQjkvKySrHcGk5nv4F2WWlAOXcgilg\
						JpXj9tzQh1x2RD8h4XIS4wWcg0egmB9hMpRhoe4BX+WGv106p6EJdsJDOAYuRcN7Ki8sQu0zamuI+CAssE5MMRbZ2r6VZUZYb7zG\
						3/+BH44KnQ3KcSnKdLgN1rOwqB3kaHfUyQ3FyRi+xpthoMx1LPOhHa6DhViRttYcr9kILtNG8PvnHNyAsIgW5BI5BZvByVpDLMSD\
						xQIOWJ+UZOa4bSaVoWjlmGVH4S8+MhUWFtGCrBmHitGvp50HLqXBJCllBXSDYs2+ZpgJjtV645I6D3/CvxAagw101DrlK9k+nGAL\
						KEgJH+r3Cef4hdwFFmjfZP0F+X9hnpORBtJAGkgDaSANpIE0kAbSQBpIA2kgDaSBNJAG0kAaSANpIA2kgTSQBoZj4B2CuyW2svev\
						LQAAAABJRU5ErkJggg==',
				pngalignment: 'center:center',
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.clearLayerOrGroup,
							options: { clear_layer_or_group_dropdown: 'layer', clear_layer_dropdown: 'media' },
						},
					],
					up: [],
				},
			],
			feedbacks: [
				{
					feedbackId: 'Layer',
					options: {
						layer: 'media',
					},
					style: {
						color: combineRgb(255, 192, 192),
						bgcolor: combineRgb(255, 0, 0),
					},
				},
			],
		},
		['Clear Video Inputs']: {
			name: 'Clear Video Inputs',
			category: 'Clear',
			type: 'button',
			style: {
				text: 'Clear\\n\\n\\nVid Inputs',
				size: 'auto',
				color: combineRgb(255, 128, 128),
				bgcolor: combineRgb(75, 0, 0),
				png64:
					'iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABk2lDQ1BJQ0MgUHJvZmlsZQAAKJF9kc0rRGEUhx+DRiILlGRxF1gh\
						ISkbxkKKmgbla+HOnS81c+ftzkjKUtkqSmx8LWytsLSwVUr5KPkDZEVspOu8c2kGcep0nn7v+zv33POC78RUKlnSByk764QGA8bE\
						5JThf8BPLTXU02taGdUfDA4j8VW/x+sVRbpetupev8//jcpINGNBkSHcZyknKzwrHFzIKs2HwjWODCV8pjnu8Y3msMePuTtjoQHw\
						6Z6GlTAjwrpni5VwUsJ67sZIKqJ15bGteV1zuMAbL+BUct76nFP/YUXUHh/V9yUbGGSIEYIYhJlnjiRZWqXaomQIyXngD39Xzj9A\
						GsUijnjiJMRt0C+Kkk5R4SHpZNFGi3AH7ZLd+m1+7jyvpXeg5wWKV/NaeAOOV6DuNq81bkPVMhydKdMxc1KxpC8Wg6cDeZJJqL6A\
						8ulMrLPDm74iAKX3rvvcBP41eF913bdd133fE/MdnNrenj97sX8NY0swfA6bW9Acl2/O/LGPstw+/t9ZWeHOPwC0UXgblG4USAAA\
						ALJlWElmTU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAAANAAAA\
						cgEyAAIAAAAUAAAAgIdpAAQAAAABAAAAlAAAAAAAAABIAAAAAQAAAEgAAAABR0lNUCAyLjEwLjM2AAAyMDI0OjEwOjE4IDA3OjE2\
						OjIyAAACoAIABAAAAAEAAABIoAMABAAAAAEAAABIAAAAANlUrY8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAN0aVRYdFhNTDpjb20u\
						YWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+\
						CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAg\
						IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94\
						YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAg\
						IHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5HSU1Q\
						IDIuMTAuMzY8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMjQtMTAtMThUMDc6MTY6MjI8L3ht\
						cDpNb2RpZnlEYXRlPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAg\
						ICA8dGlmZjpYUmVzb2x1dGlvbj43MjwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzI8L3Rp\
						ZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDxl\
						eGlmOlBpeGVsWERpbWVuc2lvbj4zMzwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwv\
						ZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MjY8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgog\
						ICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4K2P803QAAA4xJREFUeAHtmduLTWEYh2dj\
						HHJoxAUNZpCcGkIIUZMSNRglF7hw5S9x6X+QRKGEmqJRxqHmQmRouMDFFMphxjln2/Nor1rTmGjPN1qj91dP67BnHb5nf9/7rbWn\
						piYSBsJAGAgDYSAMhIEwEAbCQBgIA2EgDISBMBAGwkAYCANhIAyEgTDwHxgopWxDuVxu5nwHYE6i85Y5Tw8cg8ulUsntAeG6tmMa\
						bIZe/u7SgD+qcseYKo8b7DDFpJLjNWz4LJgNo+A79AtyJrNjLbTCIlBmsqQWlOzGcidS0oAgZjw7m2AnrIQJkDwjQVC/RiPGe54P\
						LbAR6uC3Q4/9Q86IE0SLZ8JusN7Yu4ZNDuf+Na5djqSM5mb9Yq1Jw55/cpFhb8UwXiAE/UFu0WuQ9eU1vIGs1jxnvQ16YTn4COCM\
						ln3OaroUWZBSOip4n3uZwRpYjoU+uAftMA+c0RaC9SlpiijIntADZ+EV7AF7ykTI9xKff57CBTgKzRVYpEsRBT2heefAezsI9WDy\
						ctx2ivez/XC9gjV1wNM2+6pO0QR9pCXXwMbvgEwOq4NmHJ9sgs/QDfaqZCnaLGYDLcKrwHc6e43bNvob5POSDfd/gVpYBw5Da1Oy\
						FEmQDX0Ik2BJpYXvWDrcDkEHZJIchtadw3AbzFRYDD5pJ0uRBNkj3sMM8P3K+KZuz5gCp+AK9MBJuAWrYSlkaWRFkqVINcjnHb8w\
						e0Kp0kKXCtgHx+EIWHM+QQtsB4dVlums+LtQsqTuQV+5M6kmHqcQH/ryySRlMh7z4XrYBg7HfJQnyZK6B13lzvx2rQNZL/jbm7Xg\
						voX8kMmOfcHKTbBge8934Q5sgPzDoTUqq1OsDj1JBfFTp9+uVBWelOs50LqSzzM2rD+d0Apz4TycAJOX5DCVZEkqKMFd2VMUbC90\
						qDmLtYFytsIusHA7tKxJZyrr/qJoPNYZLlmKJsg65HPMA2gCC/AKWADLwNnMuK8W+qARjFLvwyM3UqVQgvyvBVGQPca39DpQhvUs\
						/6rhtgKz/X7WBZ2c4wPLZEk9iw35xmigrxvtcBGyxubl5K/hfrHnWJdcJo3fQCFDT7L3bAHf2gebFR1WN+A0dCP3B8ukKawgW4kk\
						p3CHmjPVGmgAa48/g3SDjxVdiPEJPBIGwkAYCANhIAyEgTAQBsJAGAgDYSAMhIEwEAbCQBgIA2EgDISBMBAGBjPwE69kr4exIhkJ\
						AAAAAElFTkSuQmCC',
				pngalignment: 'center:center',
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.clearLayerOrGroup,
							options: { clear_layer_or_group_dropdown: 'layer', clear_layer_dropdown: 'video_input' },
						},
					],
					up: [],
				},
			],
			feedbacks: [
				{
					feedbackId: 'Layer',
					options: {
						layer: 'video_input',
					},
					style: {
						color: combineRgb(255, 192, 192),
						bgcolor: combineRgb(255, 0, 0),
					},
				},
			],
		},
		// **** GROUPS **** Dynamically created below.
		// **** MISC *****
		['Find Mouse']: {
			name: 'Find Mouse',
			category: 'Misc',
			type: 'button',
			style: {
				text: 'Find\\n\\n\\nMouse',
				size: 'auto',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(255, 0, 0),
				png64:
					'iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABk2lDQ1BJQ0MgUHJvZmlsZQAAKJF9kc0rRGEUhx+DRiILlGRxF1gh\
						ISkbxkKKmgbla+HOnS81c+ftzkjKUtkqSmx8LWytsLSwVUr5KPkDZEVspOu8c2kGcep0nn7v+zv33POC78RUKlnSByk764QGA8bE\
						5JThf8BPLTXU02taGdUfDA4j8VW/x+sVRbpetupev8//jcpINGNBkSHcZyknKzwrHFzIKs2HwjWODCV8pjnu8Y3msMePuTtjoQHw\
						6Z6GlTAjwrpni5VwUsJ67sZIKqJ15bGteV1zuMAbL+BUct76nFP/YUXUHh/V9yUbGGSIEYIYhJlnjiRZWqXaomQIyXngD39Xzj9A\
						GsUijnjiJMRt0C+Kkk5R4SHpZNFGi3AH7ZLd+m1+7jyvpXeg5wWKV/NaeAOOV6DuNq81bkPVMhydKdMxc1KxpC8Wg6cDeZJJqL6A\
						8ulMrLPDm74iAKX3rvvcBP41eF913bdd133fE/MdnNrenj97sX8NY0swfA6bW9Acl2/O/LGPstw+/t9ZWeHOPwC0UXgblG4USAAA\
						ALJlWElmTU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAAANAAAA\
						cgEyAAIAAAAUAAAAgIdpAAQAAAABAAAAlAAAAAAAAABIAAAAAQAAAEgAAAABR0lNUCAyLjEwLjM2AAAyMDI0OjEwOjEzIDIyOjI2\
						OjA4AAACoAIABAAAAAEAAABIoAMABAAAAAEAAABIAAAAAI6b8oMAAAAJcEhZcwAACxMAAAsTAQCanBgAAAN0aVRYdFhNTDpjb20u\
						YWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+\
						CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAg\
						IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94\
						YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAg\
						IHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5HSU1Q\
						IDIuMTAuMzY8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMjQtMTAtMTNUMjI6MjY6MDg8L3ht\
						cDpNb2RpZnlEYXRlPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAg\
						ICA8dGlmZjpYUmVzb2x1dGlvbj43MjwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzI8L3Rp\
						ZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDxl\
						eGlmOlBpeGVsWERpbWVuc2lvbj4yMDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwv\
						ZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+Mjc8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgog\
						ICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4K7LcjNQAAA+FJREFUeAHtmFlrVWcUQE2r\
						xUbrgANVYh0ap4oDWkRJnR5qJYpUxQcf4nOhv8Af4qtPFYqiL2rVSjWKQSyltJIoaCjSCJFoVRyqOOS6VjxHrmikSO++EfaGxT75\
						zvGc8y33N5w7bFhGGkgDaSANpIE0kAbSQBpIA2kgDaSBNJAG0kAaSANpIA2kgTSQBt4HAw31fslKpfIJ7/AZTIbG4n0ekPugp6Gh\
						4V7RVpdUN0GI+ZgeL4HF8DkoyDbjX1DQX/An/IGoh+TwqIsg5Eykp9/AamiCG3ANymoZzfE0UFoPtMMxJN0mh0a4IOSMpYc7oBWs\
						lA7oBAXdBd+pFLSI469gBByGH5F0nxwWw8OexIOQ8yHpa9gEd2AfnAUr4wvoQ0CFbHRz/QWy4rbDZuil7aeqa2iqbXxQ29u/dncn\
						42+L1v1kh80tsu/RBvPhZXDuH/44BAfAKtoKn0JYRAtaS8+mwm9wAgGPyWUs42AnFTK3bDAX1xzl0GqaCS0QFmGC6PhH9Gol9IPD\
						xPmnOpx7lkMb1za/cuLFvHOMNodfC+fDpoYwQXRsDEwBV6rL8KZQkhKVZLVUx0X+cKmfAaMgJCIFNdKjkeAmUAYL38mVS0nOWWW4\
						winIvZL3CYlIQQ4th4jPHOy5z4prrhS5GUmufIbVJd6jXOk4rG0M9qK1eKr7FyvHoTb+DQ9Qzkm4WbCX/DeUMvw3VqFD9G0VyOn/\
						LyIF2bFusJNLqQyroQwlnIEfoANmwz0m8m7oL679kjaHl/cI++wIE0RHrZB2MG+AiVCGgvZyjRXzC7jbXgVluPfx0+QJnFFaeaLW\
						OUxQ0ZHz5EvghnALlTHOdjpcgaseE65w7nmmWDkwgeNtMAe64FcIi+oyD3koHbYyvgeH2hGwYq4i6Cl5ILhmKQdOzs5b66AV/DTZ\
						zXXnyGFRD0FuGO3wVrA6fodO8JtLIYZDrAkWwhLohYNwHEEOs7AIF2TPqBD3MVbSGlgAVst1KFcnV7pJ4Fe9881uOIKc6k8Tmmof\
						YVv26q7Q0UdIGhhatFsls0AhDjvjBnSB56bBMwitHJ43EHWpoPLhZkRZPe5xFOQnhCvaA1CS88934NK+C7H+LJJRGkDeJNgDJ2AT\
						hP+HRi/zZd//U6ZirKKjoBgndifv0BjSggoTp8k94O56ZXQVvQ+CrKLj4LtuBFe4sBjyghhmTtqnwCry18YVEBZDXlBhoo/8MzgX\
						rWeYhW1Pwh5UdPSdklVEuG+aB/5wZlVlVBtwcobZML26PY/TQBpIA2kgDaSBNJAG0kAaSANpIA2kgTSQBtJAGkgDaSANpIE0kAY0\
						8BztBw8doVxPjAAAAABJRU5ErkJggg==',
				pngalignment: 'center:center',
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.miscFindMyMouse,
							options: {},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		},
		// **** LOOKS ***** These are dynamically added in code below.
		// **** MACRO ***** These are dynamically added in code below.
		// **** MEDIA ***** TODO: Consider how these might work (Be careful to avoid overloading Companion or ProPresenter by asking for 100s or 1000s of thumbnails - if a user has that many media files).
		// **** MESSAGE ***** These are dynamically added in code below.
		// **** PLAYLIST *****
		// **** PRESENTATION *****
		['Focus Previous Presentation']: {
			name: 'Focus Previous Presentation',
			category: 'Presentation',
			type: 'button',
			style: {
				text: 'Focus\\n\\n\\nPrevious',
				size: 'auto',
				color: combineRgb(128, 128, 255),
				bgcolor: combineRgb(0, 0, 153),
				png64:
					'iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABk2lDQ1BJQ0MgUHJvZmlsZQAAKJF9kc0rRGEUhx+DRiILlGRxF1gh\
						ISkbxkKKmgbla+HOnS81c+ftzkjKUtkqSmx8LWytsLSwVUr5KPkDZEVspOu8c2kGcep0nn7v+zv33POC78RUKlnSByk764QGA8bE\
						5JThf8BPLTXU02taGdUfDA4j8VW/x+sVRbpetupev8//jcpINGNBkSHcZyknKzwrHFzIKs2HwjWODCV8pjnu8Y3msMePuTtjoQHw\
						6Z6GlTAjwrpni5VwUsJ67sZIKqJ15bGteV1zuMAbL+BUct76nFP/YUXUHh/V9yUbGGSIEYIYhJlnjiRZWqXaomQIyXngD39Xzj9A\
						GsUijnjiJMRt0C+Kkk5R4SHpZNFGi3AH7ZLd+m1+7jyvpXeg5wWKV/NaeAOOV6DuNq81bkPVMhydKdMxc1KxpC8Wg6cDeZJJqL6A\
						8ulMrLPDm74iAKX3rvvcBP41eF913bdd133fE/MdnNrenj97sX8NY0swfA6bW9Acl2/O/LGPstw+/t9ZWeHOPwC0UXgblG4USAAA\
						ALJlWElmTU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAAANAAAA\
						cgEyAAIAAAAUAAAAgIdpAAQAAAABAAAAlAAAAAAAAABIAAAAAQAAAEgAAAABR0lNUCAyLjEwLjM2AAAyMDI0OjEwOjEzIDIyOjMx\
						OjMwAAACoAIABAAAAAEAAABIoAMABAAAAAEAAABIAAAAAKChzuwAAAAJcEhZcwAACxMAAAsTAQCanBgAAAN0aVRYdFhNTDpjb20u\
						YWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+\
						CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAg\
						IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94\
						YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAg\
						IHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5HSU1Q\
						IDIuMTAuMzY8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMjQtMTAtMTNUMjI6MzE6MzA8L3ht\
						cDpNb2RpZnlEYXRlPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAg\
						ICA8dGlmZjpYUmVzb2x1dGlvbj43MjwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzI8L3Rp\
						ZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDxl\
						eGlmOlBpeGVsWERpbWVuc2lvbj4yNzwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwv\
						ZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+Mjc8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgog\
						ICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KS++MFAAAAu9JREFUeAHtmFlrFEEURhN3\
						UYy4gCIiqCCIioorKCSiP9pnQfFNfRJ8CLihUVxiXGKM4zmTLhwm0yEGuzuB78KhZqq6p+ueuV29jI0lYiAGYiAGYiAGYiAGYiAG\
						YiAGYiAGYiAGYiAGYiAGYiAGYmAjGBhfL5Ps9Xqbmcuuaj5fx8fHF9fD3DoXhBjnsAkOwXnowWN4i6RftJ3Glk6PvnRw5RyE6zC1\
						1NWvpHvIm0HS76qvk6ZTQQhQzj64DJNwAqwoq+gHPGCbD11KcoKdRCVngoNfACvnOGyHraAo+y7CBNsqrZPopIIqObvJ+CzcglOw\
						EwxlKMq+nzAPj9hnlkqyslqN1gVV1aCM03C7aouckrySyjYKUtQT9v3WtqRWBVVySnVYOWfAShp1CtnnZf8cKMg16Sl8h9aiNUGV\
						nG1kdhKmwLVnL4ySQ3c/XCP3gNsqaIHfeUYVWVWtRCuCKjkuvsdgEi6BV6+V5DDcDyUp0itdkTSNJKuq8WhcUCXHu+QjcBOugvc9\
						Jr7acP/9cA2snnl+9xWSFvjcaPzLJNc6EatEIYoRE/Xmz+TEu+XhxwqvVoPbuJ197nsFFHUASY3Pv/EKIhH/fRdbk5mGl1BCeTvg\
						KByGkrBy3sAL8LRSTglluZ2L+zto9E57NWsAc1h78C8ryIXWdcQ/ZPCYfnYtugM3wHXKcH25D3fhIwwK4mu/8j7RfuY0a1RQ4xVE\
						AotI6idjZkNhJXyBWRhMVCHu8xxmhsb42o8evz0sroz9t7ZxQc60SmRZMohz2PVn2VjVp7TFNkRwnJFRzvmRg+n8uyjGRY2BVFCN\
						mNIdQcVETRtBNWJKdwQVEzVtBNWIKd0RVEzUtBFUI6Z0t3InXQ62QuudtJTHjdKusEs7Q10LKlLmSPc9+MbR8J2PfcOvQRxrNToV\
						5DMWoYiH8Bp88jcU46uOuS6fw5xIIgZiIAZiIAZiIAZiIAZiIAZiIAZiIAZiIAZiIAZiIAZiIAY2hoE/31G4uaXf45MAAAAASUVO\
						RK5CYII=',
				pngalignment: 'center:center',
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.focusedPresentationOperation,
							options: { focused_presentation_operation: 'focus_previous' },
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		},
		['Focus Next Presentation']: {
			name: 'Focus Next Presentation',
			category: 'Presentation',
			type: 'button',
			style: {
				text: 'Focus\\n\\n\\nNext',
				size: 'auto',
				color: combineRgb(128, 128, 255),
				bgcolor: combineRgb(0, 0, 153),
				png64:
					'iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABk2lDQ1BJQ0MgUHJvZmlsZQAAKJF9kc0rRGEUhx+DRiILlGRxF1gh\
						ISkbxkKKmgbla+HOnS81c+ftzkjKUtkqSmx8LWytsLSwVUr5KPkDZEVspOu8c2kGcep0nn7v+zv33POC78RUKlnSByk764QGA8bE\
						5JThf8BPLTXU02taGdUfDA4j8VW/x+sVRbpetupev8//jcpINGNBkSHcZyknKzwrHFzIKs2HwjWODCV8pjnu8Y3msMePuTtjoQHw\
						6Z6GlTAjwrpni5VwUsJ67sZIKqJ15bGteV1zuMAbL+BUct76nFP/YUXUHh/V9yUbGGSIEYIYhJlnjiRZWqXaomQIyXngD39Xzj9A\
						GsUijnjiJMRt0C+Kkk5R4SHpZNFGi3AH7ZLd+m1+7jyvpXeg5wWKV/NaeAOOV6DuNq81bkPVMhydKdMxc1KxpC8Wg6cDeZJJqL6A\
						8ulMrLPDm74iAKX3rvvcBP41eF913bdd133fE/MdnNrenj97sX8NY0swfA6bW9Acl2/O/LGPstw+/t9ZWeHOPwC0UXgblG4USAAA\
						ALJlWElmTU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAAANAAAA\
						cgEyAAIAAAAUAAAAgIdpAAQAAAABAAAAlAAAAAAAAABIAAAAAQAAAEgAAAABR0lNUCAyLjEwLjM2AAAyMDI0OjEwOjEzIDIyOjMw\
						OjU3AAACoAIABAAAAAEAAABIoAMABAAAAAEAAABIAAAAAGGFqZsAAAAJcEhZcwAACxMAAAsTAQCanBgAAAN0aVRYdFhNTDpjb20u\
						YWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+\
						CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAg\
						IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94\
						YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAg\
						IHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5HSU1Q\
						IDIuMTAuMzY8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMjQtMTAtMTNUMjI6MzA6NTc8L3ht\
						cDpNb2RpZnlEYXRlPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAg\
						ICA8dGlmZjpYUmVzb2x1dGlvbj43MjwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzI8L3Rp\
						ZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDxl\
						eGlmOlBpeGVsWERpbWVuc2lvbj4yNzwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwv\
						ZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+Mjc8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgog\
						ICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KuZW2LgAAAphJREFUeAHtmc1LVUEYxr2m\
						SAXWJtAiTFvoprW0aS/035p9kbZIdGELXQQqqFGQkBsrsQ+r2++ROXA4Xpwr3plJfF54nDkz73y8v/Pec+5c+/psJmACJmACJmAC\
						JmACJmACJmACJmACJmACJmACJmACJmACJnARCLRKb7Ldbg+xhyk03tjLDtfrrVbrZ6M96+VA1tU6L3aV5mk0g6ob1qb+HL1Hlx6Q\
						oFxDN1FlAiRw/VVDqbL4BkoF3u26BhQhZUAGFCEQ6XYGGVCEQKTbGWRAEQKRbmeQAUUIRLqdQRFAyQ+rnNZ1E4bRDdTphqhPapra\
						xhhfP6NVPn+pfJE47evclsyq03OyBQKg+yzwCN1FzTUHabuHRlHdPnHxAf2qN1IXELW/QVsAEqxkljyD2LkC0t3WzxaTaAQ1IdF0\
						7KeysttU7lQXtVLgtpCyJykcrdkp5dXeMwsfgT0mXEDzSHVBa4qmE1b3EYzP6DWaZ17Vk1tyQIogQNql+goton10VlMWauxLpLmy\
						WBZAiiRA0rPjGVpG31C3Jt8lpLEfw1zdjj2XXzZA2iWB6WOyg56it+g7itkhDvIVnO0wR2xMz/qzAtKuCfA3xQaaQ6votN+c1beG\
						nqANxv6hzGo53mInAiLQI17/7+gYCnpAqdd93Y64kM+sSo2pd+aqFwGk4Aj4B5CUQfpxXqD0r58rSKYs20TKsjV8T8syXNJZMUAK\
						icAPgbRCtcqkiRCqnlN65qzIJ7QVKYoCUsQA+AokvdWUSY/Vhr1AS/Sd5U13PLDXfzp9o+31Gl3NB6RbOD4MzsvA0RfK4vY/AdJe\
						rosIcA6Kk/EGTMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETMAETOBCEfgHzy+Gzh1l2jcAAAAASUVORK5CYII=',
				pngalignment: 'center:center',
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.focusedPresentationOperation,
							options: { focused_presentation_operation: 'focus_next' },
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		},
		['Trigger Focused Presentation']: {
			name: 'Trigger Focused Presentation',
			category: 'Presentation',
			type: 'button',
			style: {
				text: 'Trigger\\n\\n\\n$(Propresenter-API:focused_presentation_name)',
				size: 'auto',
				color: combineRgb(128, 128, 255),
				bgcolor: combineRgb(0, 0, 153),
				png64:
					'iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABk2lDQ1BJQ0MgUHJvZmlsZQAAKJF9kc0rRGEUhx+DRiILlGRxF1gh\
						ISkbxkKKmgbla+HOnS81c+ftzkjKUtkqSmx8LWytsLSwVUr5KPkDZEVspOu8c2kGcep0nn7v+zv33POC78RUKlnSByk764QGA8bE\
						5JThf8BPLTXU02taGdUfDA4j8VW/x+sVRbpetupev8//jcpINGNBkSHcZyknKzwrHFzIKs2HwjWODCV8pjnu8Y3msMePuTtjoQHw\
						6Z6GlTAjwrpni5VwUsJ67sZIKqJ15bGteV1zuMAbL+BUct76nFP/YUXUHh/V9yUbGGSIEYIYhJlnjiRZWqXaomQIyXngD39Xzj9A\
						GsUijnjiJMRt0C+Kkk5R4SHpZNFGi3AH7ZLd+m1+7jyvpXeg5wWKV/NaeAOOV6DuNq81bkPVMhydKdMxc1KxpC8Wg6cDeZJJqL6A\
						8ulMrLPDm74iAKX3rvvcBP41eF913bdd133fE/MdnNrenj97sX8NY0swfA6bW9Acl2/O/LGPstw+/t9ZWeHOPwC0UXgblG4USAAA\
						ALJlWElmTU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAAANAAAA\
						cgEyAAIAAAAUAAAAgIdpAAQAAAABAAAAlAAAAAAAAABIAAAAAQAAAEgAAAABR0lNUCAyLjEwLjM2AAAyMDI0OjEwOjEzIDIyOjI4\
						OjUzAAACoAIABAAAAAEAAABIoAMABAAAAAEAAABIAAAAAE86xiEAAAAJcEhZcwAACxMAAAsTAQCanBgAAAN0aVRYdFhNTDpjb20u\
						YWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+\
						CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAg\
						IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94\
						YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAg\
						IHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5HSU1Q\
						IDIuMTAuMzY8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMjQtMTAtMTNUMjI6Mjg6NTM8L3ht\
						cDpNb2RpZnlEYXRlPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAg\
						ICA8dGlmZjpYUmVzb2x1dGlvbj43MjwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzI8L3Rp\
						ZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDxl\
						eGlmOlBpeGVsWERpbWVuc2lvbj4zMjwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwv\
						ZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MjU8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgog\
						ICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4Ko/Y/kwAAAoJJREFUeAHtmU1LW0EUho0V\
						XBgrKNSNuDN0VxduVAQXpRvdWHBRWvR/+RtiI+pCF2K7Ed2VQjdqFqWhq1IKpVBpafqc0mC+zM0kM5N75b3wkjszZ+aceTJz7txk\
						aEiXCIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIQhUK1WH6PxMKO7jTriZh7Nesk8AWk/l8t9iea1jaO0Apok\
						1lU0BqQ9IH1qE3uUquEoXtydVOkyhtbQSyAVUM59mP57pBVQbWaj3DxFW+gJkKLHG91hbeYOnw+wtZy0jRaBFDUtRHXmAKXZ1LbX\
						PLJtlwfSG/LSTbNRiHIWVlD9vAsUXqF1IOXrG0LdZw2QJe8Z9AI9B5I97YJe3rcYQS97iHg6YYwp2jeRbTc7BnxOsO+52fujk4B3\
						eo7mtqMBenhbvPPO8tAJKqEyoGyFeb28ryCim/MaYefB7BjwDFk+KvLlfADSn85d3FqzloPazc6+5BVkZ6XZdgb91N0HQDZ/21re\
						04UNHGKL2bgxr184O0dF9NG34xCArjwE+YgxJroY5yc2p2iX3FPuwt7ZxPuyJFH++6nCOZLGDhsUFxqrWkrfqTlGpZCPee8riGDP\
						WqbiWAHkxYQu9hvRITrA39cE276avQPqK5ruOlcw20NHwPnRXZferbIEyJ5U12gXRXtZzQogO/y9/w/nnJXzm/soVxYAGYwLZCvn\
						HXC8v050Ip12QPau9dbgAOay00RCtaUZkCXgI2Rv65VQAJLGTSugbwT+Gg38b58kgANp5xyUmj8OBwJATkVABERABERABERABERA\
						BERABERABERABERABERABERABERABHwT+AuN5HtfVId3uQAAAABJRU5ErkJggg==',
				pngalignment: 'center:center',
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.focusedPresentationOperation,
							options: { focused_presentation_operation: 'trigger_first' },
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		},
		// **** PROP *****
		// **** STAGE *****
		// Stage layouts presets are dynamically built below
		['Stage Message Toggle - Okay']: {
			name: 'Stage Message Toggle - Okay',
			category: 'Stage Messages',
			type: 'button',
			style: {
				text: 'Stage Msg\\n\\n\\nOkay',
				size: 'auto',
				color: combineRgb(255, 255, 192),
				bgcolor: combineRgb(153, 153, 0),
				png64:
					'iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABk2lDQ1BJQ0MgUHJvZmlsZQAAKJF9kc0rRGEUhx+DRiILlGRxF1gh\
						ISkbxkKKmgbla+HOnS81c+ftzkjKUtkqSmx8LWytsLSwVUr5KPkDZEVspOu8c2kGcep0nn7v+zv33POC78RUKlnSDik764QGA8bE\
						5JThf8BPLTXU02taGdUfDA4j8VW/x+sVRbpetupev8//jcpINGNBkSHcZyknKzwrHFzIKs2HwjWODCV8pjnu8Y3msMePuTtjoQHw\
						6Z6GlTAjwrpni5VwUsJ67sZIKqJ15bGteV1zuMAbL+BUct76nFP/YUXUHh/V9yUbGGSIEYIYhJlnjiRZWqXaomQIyXngD39Xzj9A\
						GsUijnjiJMRt0C+Kkk5R4SHpZNFGi3AH7ZLd+m1+7jyvpXeg5wWKV/NaeAOOV6DuNq81bkPVMhydKdMxc1KxpC8Wg6cDeZJJqL6A\
						8ulMrLPDm74iAKX3rvvcBP41eF913bdd133fE/MdnNrenj97sX8NY0swfA6bW9Acl2/O/LGPstw+/t9ZWeHOPwCJYXgLMfDrDgAA\
						AGxlWElmTU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAIdpAAQAAAABAAAATgAAAAAAAABaAAAA\
						AQAAAFoAAAABAAKgAgAEAAAAAQAAAEigAwAEAAAAAQAAAEgAAAAAzItoSgAAAAlwSFlzAAAN1wAADdcBQiibeAAAAshJREFUeAHt\
						mE2IjVEYx+8dNqQsUKQUhRpfu0m+UnZSJLGxtpCVvVJWNrKysLCyUZSGyEJZUJRGE2oWQhMjugsiysdcv3+9UzPnznnf3nHO2238\
						n/p35jzPOc85z2+e+753ptWymYAJmIAJmIAJmIAJmIAJmIAJmIAJmIAJmIAJmIAJmIAJmIAJzAMC7aZr6Ha7yznzJNpZnP2I8VK7\
						3e4U88qBHAMsWob2oYNoHTpLjruMSa1RQBS2hNtfRauCKj4wP06B3wL/jCn7F+HYgA6gvUj5uugzOsL+74xJbWHSbNXJjrIkhKNd\
						8il2RZPpBhT9ElegHWg/2ox076/oGdqK7qAfKLk1DUgfhZj1xICzhsXH0G60ctrGd/ysj9MhpA66TfdoTG4DyTOWJ/xSEo7F3rLn\
						FfqI/iB1zUW0B6mzniABy2JNd9AtqjiMwl/MJD7FZhhdMY5jnE66wagOUkcJ1Cm0Ealrhln3mzGLhRfNcoiSUuR6hkH0UvPA5Bss\
						1gShVgsAk2gCPSa4FG0vFr1mVEdls+wdRNGLuf05tKukii3EJIF8yHAGGLE30nvin9BqdA+VvvmI/5M10UHnuWEZnLAArdWemHUI\
						jCE9s+4DMsvDeerwrB1EN6grhqYOqzEOaS/FPw/3CAimL5e/0EQYTz3PCojLLkA353hp7Y3ZKIExYOmtZjOBPiaQ5W8xnhGXqXlb\
						orpH+SidSJSrdppcb7EXtW8S35AyV/yUSCQXoKeR8+biTpmr9vk5Af2sfZveDcox/wDxzFBhI7311vaMFLlqb0y1Ief3oOtcsjPL\
						Rdfi2xT49bfYm8Cn6YNZfI26srzFyirgDaf/75wO1lygU64Fvr6Y5noG9UVxKS5hQBUUDciAKghUhN1BBlRBwGETMAETMAETMAET\
						MAETMAETMAETMAETMAETMAETMAETMAETMIH/gcBfb9uJXyWb5ZwAAAAASUVORK5CYII=',
				pngalignment: 'center:center',
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.stageDisplayOperation,
							options: { stagedisplay_operation: 'toggle_stage_message', stage_message_text: 'Okay' },
						},
					],
					up: [],
				},
			],
			feedbacks: [
				{
					feedbackId: 'StageMessage',
					options: {
						check_option: 'specific_stage_message_active',
						stage_message_text: 'Okay',
					},
					style: {
						bgcolor: combineRgb(255, 0, 0),
						color: combineRgb(255, 192, 192),
					},
				},
			],
		},
		['Stage Message Timed - Okay']: {
			name: 'Stage Message Timed - Okay',
			category: 'Stage Messages',
			type: 'button',
			style: {
				text: 'Stage Msg\\n\\n\\nOkay',
				size: 'auto',
				color: combineRgb(255, 255, 192),
				bgcolor: combineRgb(153, 153, 0),
				png64:
					'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\
						JpuNAAAAAElFTkSuQmCC',
				pngalignment: 'center:center',
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.stageDisplayOperation,
							options: { stagedisplay_operation: 'show_stage_message', stage_message_text: 'Okay' },
						},
						{
							actionId: ActionId.stageDisplayOperation,
							options: { stagedisplay_operation: 'hide_stage_message', stage_message_text: 'Okay' },
							delay: 5000,
						},
					],
					up: [],
				},
			],
			feedbacks: [
				{
					feedbackId: 'StageMessage',
					options: {
						check_option: 'specific_stage_message_active',
						stage_message_text: 'Okay',
					},
					style: {
						bgcolor: combineRgb(255, 0, 0),
						color: combineRgb(255, 192, 192),
					},
				},
			],
		},
		// **** SCREENS *****
		['Audience Screens Toggle']: {
			name: 'Audience Screens Toggle',
			category: 'Screens',
			type: 'button',
			style: {
				text: 'Audience\\n\\n\\nScreens',
				size: 'auto',
				color: combineRgb(182, 182, 182),
				bgcolor: combineRgb(72, 72, 72),
				png64:
					'iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABk2lDQ1BJQ0MgUHJvZmlsZQAAKJF9kc0rRGEUhx+DRiILlGRxF1gh\
						ISkbxkKKmgbla+HOnS81c+ftzkjKUtkqSmx8LWytsLSwVUr5KPkDZEVspOu8c2kGcep0nn7v+zv33POC78RUKlnSByk764QGA8bE\
						5JThf8BPLTXU02taGdUfDA4j8VW/x+sVRbpetupev8//jcpINGNBkSHcZyknKzwrHFzIKs2HwjWODCV8pjnu8Y3msMePuTtjoQHw\
						6Z6GlTAjwrpni5VwUsJ67sZIKqJ15bGteV1zuMAbL+BUct76nFP/YUXUHh/V9yUbGGSIEYIYhJlnjiRZWqXaomQIyXngD39Xzj9A\
						GsUijnjiJMRt0C+Kkk5R4SHpZNFGi3AH7ZLd+m1+7jyvpXeg5wWKV/NaeAOOV6DuNq81bkPVMhydKdMxc1KxpC8Wg6cDeZJJqL6A\
						8ulMrLPDm74iAKX3rvvcBP41eF913bdd133fE/MdnNrenj97sX8NY0swfA6bW9Acl2/O/LGPstw+/t9ZWeHOPwC0UXgblG4USAAA\
						ALJlWElmTU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAAANAAAA\
						cgEyAAIAAAAUAAAAgIdpAAQAAAABAAAAlAAAAAAAAABIAAAAAQAAAEgAAAABR0lNUCAyLjEwLjM2AAAyMDI0OjEwOjEzIDIxOjE1\
						OjQwAAACoAIABAAAAAEAAABIoAMABAAAAAEAAABIAAAAABSewJsAAAAJcEhZcwAACxMAAAsTAQCanBgAAAMCaVRYdFhNTDpjb20u\
						YWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+\
						CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAg\
						IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20v\
						dGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgICAgICAg\
						ICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzI8\
						L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAg\
						ICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4x\
						PC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAg\
						PHhtcDpNb2RpZnlEYXRlPjIwMjQtMTAtMTNUMjE6MTU6NDA8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8eG1wOkNyZWF0b3JU\
						b29sPkdJTVAgMi4xMC4zNjwveG1wOkNyZWF0b3JUb29sPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8\
						L3g6eG1wbWV0YT4KHcuuEAAAAgRJREFUeAHt2bFKxDAcx/GriKKoeCA+gIKIm6BP4ezqqK4+iLvg5ursSyjipLiIg6ugnMKhiPX3\
						h0SOcNecR9KifgOhpkn/aT6macO1WiQEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAIE/IFDkHENZllOKv6W8kKmfR8U9K4qi\
						myl+azxXYBd3Tcd95ZxA94p/6fpLfsgNtORw7nS8SHz3m4q3rGx9/Fog/whfaxBHyinTtIIZkO8jZezvWLlnkO/oXevEsy+kOGp9\
						e08RJxZjLNbgv9cDFJkBAAEUEYhUM4MAighEqplBAEUEItXMoAhQXV/SbX352sY1ZWqnDDYoVm4gvx0wnL1BNzHi+RV3ne9jxDDV\
						l+UGulH358qzyosVt2IbztWg/lblMjjXW7S93YOy9ZEtZd0J67Gy+OvKBlSV7B91GDQ4UPkzOBcWX3TiShvhKsjwmh+VswINeyeC\
						nFBbm2m9aUMD/+g90cTfvMUi6gABFBGIVOd+iw3sXuvOpCrtVw9LtgaFaV5t/BrU1Xr0Fjaoo9wIkAY+o8HtKM+5QfZ71HdV599i\
						HV1zIqRX1762QyNvMQ3WfgY6VR72a/hJbbcFZL+D1ZoamUEaoc2EY2U/g2KD7rhrYu2oRwABBBBAAAEEEEAAAQQQQAABBBBAAAEE\
						EEAAAQQQQKCfwBe7ZUp9Yk7xjAAAAABJRU5ErkJggg==',
				pngalignment: 'center:center',
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.screensOperation,
							options: { screens_choice: 'audience', screens_operation: 'toggle' },
						},
					],
					up: [],
				},
			],
			feedbacks: [
				{
					feedbackId: 'Screens',
					options: {
						screens: 'audience',
					},
					style: {
						bgcolor: combineRgb(0, 102, 0),
						png64:
							'iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABk2lDQ1BJQ0MgUHJvZmlsZQAAKJF9kc0rRGEUhx+DRiILlGRxF1gh\
								ISkbxkKKmgbla+HOnS81c+ftzkjKUtkqSmx8LWytsLSwVUr5KPkDZEVspOu8c2kGcep0nn7v+zv33POC78RUKlnSDik764QGA8bE\
								5JThf8BPLTXU02taGdUfDA4j8VW/x+sVRbpetupev8//jcpINGNBkSHcZyknKzwrHFzIKs2HwjWODCV8pjnu8Y3msMePuTtjoQHw\
								6Z6GlTAjwrpni5VwUsJ67sZIKqJ15bGteV1zuMAbL+BUct76nFP/YUXUHh/V9yUbGGSIEYIYhJlnjiRZWqXaomQIyXngD39Xzj9A\
								GsUijnjiJMRt0C+Kkk5R4SHpZNFGi3AH7ZLd+m1+7jyvpXeg5wWKV/NaeAOOV6DuNq81bkPVMhydKdMxc1KxpC8Wg6cDeZJJqL6A\
								8ulMrLPDm74iAKX3rvvcBP41eF913bdd133fE/MdnNrenj97sX8NY0swfA6bW9Acl2/O/LGPstw+/t9ZWeHOPwCJYXgLMfDrDgAA\
								ALJlWElmTU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAAANAAAA\
								cgEyAAIAAAAUAAAAgIdpAAQAAAABAAAAlAAAAAAAAABIAAAAAQAAAEgAAAABR0lNUCAyLjEwLjMwAAAyMDI0OjExOjAyIDIyOjMx\
								OjM4AAACoAIABAAAAAEAAABIoAMABAAAAAEAAABIAAAAAP0RcVIAAAAJcEhZcwAACxMAAAsTAQCanBgAAAMCaVRYdFhNTDpjb20u\
								YWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+\
								CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAg\
								IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20v\
								dGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgICAgICAg\
								ICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzI8\
								L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAg\
								ICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4x\
								PC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAg\
								PHhtcDpNb2RpZnlEYXRlPjIwMjQtMTEtMDJUMjI6MzE6Mzg8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8eG1wOkNyZWF0b3JU\
								b29sPkdJTVAgMi4xMC4zMDwveG1wOkNyZWF0b3JUb29sPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8\
								L3g6eG1wbWV0YT4KwOmAKgAAAh5JREFUeAHt2U9Kw0AUBvBOamuLf1CoB9CFijvBS4jrunQpbgWPoRfQncu61kMI4lYF8QAWhKq0\
								VpvxezWBMjS8LGZSKl9gaCczeTPzy0uiaanEjQIUoAAFKEABClCAAhSgAAUoQAEKUIACFKAABShAAQpQ4B8ImJBrsNbWEX8PpRFo\
								nDbiXhtjuoHil2ZCBU7ibuHzCCUk0Avi3yXjef8IDbQmOK3H80Y/7g18zr4a1cr7G4cSUsaYWqDhJXzz3Gp82teeT6A5s1IDkFxi\
								QW8ToTNoaGKNtXE8sD6BbGS9xsuaW5TVwP1/AgRSMoFABFIElGZmEIEUAaWZGUQgRUBpZgYpQIX8JR2ZsqlEda8nQ2Iqa/PSHBqo\
								L7PcXW22B/F37GXGSZByVEnBh2P4jD0aK+hZwPugdQx2grIwOuiY7zKPTWf/A+ra/1vv6HOK90FPzrHeqqGBJP42igYkmXzmrOoY\
								dS3rBOgeQBqkEzp/NShQ3mkg06roe+v038HCf5x9hVfT67jwgadlQAIpZ4pAClDox3zm8LjvzKJRfvWQTe5B7raEPuk9qIv70Zfb\
								oYj6RICw8Hks7gBlMVnkuEyWN/LpU6yDYy6B9JH0L+xjIk8xLFZ+BrpCWc650jf0awJIXtIXuk0kg7BCyYQLlDSDtEV3kmO0fmyn\
								AAUoQAEKUIACFKAABShAAQpQgAIUoAAFKEABClCAAhSgwDiBX0NIXYS9FK5QAAAAAElFTkSuQmCC',
						pngalignment: 'center:center',
					},
				},
			],
		},
		['Stage Screens Toggle']: {
			name: 'Stage Screens Toggle',
			category: 'Screens',
			type: 'button',
			style: {
				text: 'Stage\\n\\n\\nScreens',
				size: 'auto',
				color: combineRgb(182, 182, 182),
				bgcolor: combineRgb(72, 72, 72),
				png64:
					'iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABk2lDQ1BJQ0MgUHJvZmlsZQAAKJF9kc0rRGEUhx+DRiILlGRxF1gh\
						ISkbxkKKmgbla+HOnS81c+ftzkjKUtkqSmx8LWytsLSwVUr5KPkDZEVspOu8c2kGcep0nn7v+zv33POC78RUKlnSByk764QGA8bE\
						5JThf8BPLTXU02taGdUfDA4j8VW/x+sVRbpetupev8//jcpINGNBkSHcZyknKzwrHFzIKs2HwjWODCV8pjnu8Y3msMePuTtjoQHw\
						6Z6GlTAjwrpni5VwUsJ67sZIKqJ15bGteV1zuMAbL+BUct76nFP/YUXUHh/V9yUbGGSIEYIYhJlnjiRZWqXaomQIyXngD39Xzj9A\
						GsUijnjiJMRt0C+Kkk5R4SHpZNFGi3AH7ZLd+m1+7jyvpXeg5wWKV/NaeAOOV6DuNq81bkPVMhydKdMxc1KxpC8Wg6cDeZJJqL6A\
						8ulMrLPDm74iAKX3rvvcBP41eF913bdd133fE/MdnNrenj97sX8NY0swfA6bW9Acl2/O/LGPstw+/t9ZWeHOPwC0UXgblG4USAAA\
						ALJlWElmTU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAAANAAAA\
						cgEyAAIAAAAUAAAAgIdpAAQAAAABAAAAlAAAAAAAAABIAAAAAQAAAEgAAAABR0lNUCAyLjEwLjM2AAAyMDI0OjEwOjEzIDIxOjE1\
						OjQwAAACoAIABAAAAAEAAABIoAMABAAAAAEAAABIAAAAABSewJsAAAAJcEhZcwAACxMAAAsTAQCanBgAAAMCaVRYdFhNTDpjb20u\
						YWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+\
						CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAg\
						IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20v\
						dGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgICAgICAg\
						ICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzI8\
						L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAg\
						ICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4x\
						PC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAg\
						PHhtcDpNb2RpZnlEYXRlPjIwMjQtMTAtMTNUMjE6MTU6NDA8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8eG1wOkNyZWF0b3JU\
						b29sPkdJTVAgMi4xMC4zNjwveG1wOkNyZWF0b3JUb29sPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8\
						L3g6eG1wbWV0YT4KHcuuEAAAAgRJREFUeAHt2bFKxDAcx/GriKKoeCA+gIKIm6BP4ezqqK4+iLvg5ursSyjipLiIg6ugnMKhiPX3\
						h0SOcNecR9KifgOhpkn/aT6macO1WiQEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAIE/IFDkHENZllOKv6W8kKmfR8U9K4qi\
						myl+azxXYBd3Tcd95ZxA94p/6fpLfsgNtORw7nS8SHz3m4q3rGx9/Fog/whfaxBHyinTtIIZkO8jZezvWLlnkO/oXevEsy+kOGp9\
						e08RJxZjLNbgv9cDFJkBAAEUEYhUM4MAighEqplBAEUEItXMoAhQXV/SbX352sY1ZWqnDDYoVm4gvx0wnL1BNzHi+RV3ne9jxDDV\
						l+UGulH358qzyosVt2IbztWg/lblMjjXW7S93YOy9ZEtZd0J67Gy+OvKBlSV7B91GDQ4UPkzOBcWX3TiShvhKsjwmh+VswINeyeC\
						nFBbm2m9aUMD/+g90cTfvMUi6gABFBGIVOd+iw3sXuvOpCrtVw9LtgaFaV5t/BrU1Xr0Fjaoo9wIkAY+o8HtKM+5QfZ71HdV599i\
						HV1zIqRX1762QyNvMQ3WfgY6VR72a/hJbbcFZL+D1ZoamUEaoc2EY2U/g2KD7rhrYu2oRwABBBBAAAEEEEAAAQQQQAABBBBAAAEE\
						EEAAAQQQQKCfwBe7ZUp9Yk7xjAAAAABJRU5ErkJggg==',
				pngalignment: 'center:center',
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.screensOperation,
							options: { screens_choice: 'stage', screens_operation: 'toggle' },
						},
					],
					up: [],
				},
			],
			feedbacks: [
				{
					feedbackId: 'Screens',
					options: {
						screens: 'stage',
					},
					style: {
						bgcolor: combineRgb(0, 102, 0),
						png64:
							'iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABk2lDQ1BJQ0MgUHJvZmlsZQAAKJF9kc0rRGEUhx+DRiILlGRxF1gh\
								ISkbxkKKmgbla+HOnS81c+ftzkjKUtkqSmx8LWytsLSwVUr5KPkDZEVspOu8c2kGcep0nn7v+zv33POC78RUKlnSDik764QGA8bE\
								5JThf8BPLTXU02taGdUfDA4j8VW/x+sVRbpetupev8//jcpINGNBkSHcZyknKzwrHFzIKs2HwjWODCV8pjnu8Y3msMePuTtjoQHw\
								6Z6GlTAjwrpni5VwUsJ67sZIKqJ15bGteV1zuMAbL+BUct76nFP/YUXUHh/V9yUbGGSIEYIYhJlnjiRZWqXaomQIyXngD39Xzj9A\
								GsUijnjiJMRt0C+Kkk5R4SHpZNFGi3AH7ZLd+m1+7jyvpXeg5wWKV/NaeAOOV6DuNq81bkPVMhydKdMxc1KxpC8Wg6cDeZJJqL6A\
								8ulMrLPDm74iAKX3rvvcBP41eF913bdd133fE/MdnNrenj97sX8NY0swfA6bW9Acl2/O/LGPstw+/t9ZWeHOPwCJYXgLMfDrDgAA\
								ALJlWElmTU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAAANAAAA\
								cgEyAAIAAAAUAAAAgIdpAAQAAAABAAAAlAAAAAAAAABIAAAAAQAAAEgAAAABR0lNUCAyLjEwLjMwAAAyMDI0OjExOjAyIDIyOjMx\
								OjM4AAACoAIABAAAAAEAAABIoAMABAAAAAEAAABIAAAAAP0RcVIAAAAJcEhZcwAACxMAAAsTAQCanBgAAAMCaVRYdFhNTDpjb20u\
								YWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+\
								CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAg\
								IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20v\
								dGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgICAgICAg\
								ICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzI8\
								L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAg\
								ICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4x\
								PC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAg\
								PHhtcDpNb2RpZnlEYXRlPjIwMjQtMTEtMDJUMjI6MzE6Mzg8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8eG1wOkNyZWF0b3JU\
								b29sPkdJTVAgMi4xMC4zMDwveG1wOkNyZWF0b3JUb29sPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8\
								L3g6eG1wbWV0YT4KwOmAKgAAAh5JREFUeAHt2U9Kw0AUBvBOamuLf1CoB9CFijvBS4jrunQpbgWPoRfQncu61kMI4lYF8QAWhKq0\
								VpvxezWBMjS8LGZSKl9gaCczeTPzy0uiaanEjQIUoAAFKEABClCAAhSgAAUoQAEKUIACFKAABShAAQpQ4B8ImJBrsNbWEX8PpRFo\
								nDbiXhtjuoHil2ZCBU7ibuHzCCUk0Avi3yXjef8IDbQmOK3H80Y/7g18zr4a1cr7G4cSUsaYWqDhJXzz3Gp82teeT6A5s1IDkFxi\
								QW8ToTNoaGKNtXE8sD6BbGS9xsuaW5TVwP1/AgRSMoFABFIElGZmEIEUAaWZGUQgRUBpZgYpQIX8JR2ZsqlEda8nQ2Iqa/PSHBqo\
								L7PcXW22B/F37GXGSZByVEnBh2P4jD0aK+hZwPugdQx2grIwOuiY7zKPTWf/A+ra/1vv6HOK90FPzrHeqqGBJP42igYkmXzmrOoY\
								dS3rBOgeQBqkEzp/NShQ3mkg06roe+v038HCf5x9hVfT67jwgadlQAIpZ4pAClDox3zm8LjvzKJRfvWQTe5B7raEPuk9qIv70Zfb\
								oYj6RICw8Hks7gBlMVnkuEyWN/LpU6yDYy6B9JH0L+xjIk8xLFZ+BrpCWc650jf0awJIXtIXuk0kg7BCyYQLlDSDtEV3kmO0fmyn\
								AAUoQAEKUIACFKAABShAAQpQgAIUoAAFKEABClCAAhSgwDiBX0NIXYS9FK5QAAAAAElFTkSuQmCC',
						pngalignment: 'center:center',
					},
				},
			],
		},
		// **** TIMER *****
		// These are dynamically created below.
		// **** TRANSPORT *****
		['Transport Presentation Layer Play']: {
			name: 'Transport Presentation Layer Play',
			category: 'Transport',
			type: 'button',
			style: {
				text: "Present'n\\n\\n\\nPlay",
				size: 'auto',
				color: combineRgb(220, 150, 235),
				bgcolor: combineRgb(100, 0, 100),
				png64:
					'iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABk2lDQ1BJQ0MgUHJvZmlsZQAAKJF9kc0rRGEUhx+DRiILlGRxF1gh\
						ISkbxkKKmgbla+HOnS81c+ftzkjKUtkqSmx8LWytsLSwVUr5KPkDZEVspOu8c2kGcep0nn7v+zv33POC78RUKlnSByk764QGA8bE\
						5JThf8BPLTXU02taGdUfDA4j8VW/x+sVRbpetupev8//jcpINGNBkSHcZyknKzwrHFzIKs2HwjWODCV8pjnu8Y3msMePuTtjoQHw\
						6Z6GlTAjwrpni5VwUsJ67sZIKqJ15bGteV1zuMAbL+BUct76nFP/YUXUHh/V9yUbGGSIEYIYhJlnjiRZWqXaomQIyXngD39Xzj9A\
						GsUijnjiJMRt0C+Kkk5R4SHpZNFGi3AH7ZLd+m1+7jyvpXeg5wWKV/NaeAOOV6DuNq81bkPVMhydKdMxc1KxpC8Wg6cDeZJJqL6A\
						8ulMrLPDm74iAKX3rvvcBP41eF913bdd133fE/MdnNrenj97sX8NY0swfA6bW9Acl2/O/LGPstw+/t9ZWeHOPwC0UXgblG4USAAA\
						ALJlWElmTU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAAANAAAA\
						cgEyAAIAAAAUAAAAgIdpAAQAAAABAAAAlAAAAAAAAABIAAAAAQAAAEgAAAABR0lNUCAyLjEwLjM2AAAyMDI0OjEwOjIwIDIxOjU5\
						OjU4AAACoAIABAAAAAEAAABIoAMABAAAAAEAAABIAAAAAGCF8t0AAAAJcEhZcwAACxMAAAsTAQCanBgAAAN0aVRYdFhNTDpjb20u\
						YWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+\
						CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAg\
						IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94\
						YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAg\
						IHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5HSU1Q\
						IDIuMTAuMzY8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMjQtMTAtMjBUMjE6NTk6NTg8L3ht\
						cDpNb2RpZnlEYXRlPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAg\
						ICA8dGlmZjpYUmVzb2x1dGlvbj43MjwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzI8L3Rp\
						ZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDxl\
						eGlmOlBpeGVsWERpbWVuc2lvbj4yMDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwv\
						ZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MjY8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgog\
						ICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KNP7W6QAAAfJJREFUeAHt2b1OAkEUhmHW\
						aLwEL4OW1pqSlmvRW1ADrRQUFNBogx09VtppY4OlhSaaGBPX9ySSTEHC/5yDfpN82YX9m3n2bNjRSkVNAhKQgAQkIAEJSEACEpCA\
						BCQgAQlIQAISkIAEJCABCUhAAosLlGV5Qo4WP+Kf7QnOiAxIneztyvCLXB0FZfR7rW+WY9IuimKS6/qrXsfjTto1a6QFWoMcrNr5\
						HMd5VFA6rpIP9+ScanpKN0RZ96igdOx2g6rEqqlJDtONEda9Kyg1sGp6JGfkgYqyz+4tEtAU45OVPumB9DH90mvp/YjNGrc9Zk1i\
						j12VZLuJszqT7eIMdDSrA3O++2L7NelSTa9z9t3K5ogVlA7UXgEaxKqpRrL3N3oFpVj2gjkkHarpJd2wzfXsd2SNwVhf66RNJR2v\
						cZ6lDt0loKUGtqmd9zd1ogznsUfshlzmfMR2BegZmBYZg2NQ2Vp0IPef+chANnm9IHdUjdu0IyKQTTUGxKYa7yxdWyQgq5Jwk9Uo\
						QDYp7ZE+VWMVFKZ5A1nVhP6DmSfQGzhdckXV2K9VyOYBZO8xt6QFzCSkStKp3EA2yeyQIThZX/iSMcdcZYJ5SvSPw5i3R72SgAQk\
						IAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAn9d4AeVfYuYHgEw2wAAAABJRU5ErkJggg==',
				pngalignment: 'center:center',
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.transportLayerOperation,
							options: { transport_layer: 'presentation', transport_operation: 'play' },
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		},
		['Transport Presentation Layer Pause']: {
			name: 'Transport Presentation Layer Pause',
			category: 'Transport',
			type: 'button',
			style: {
				text: "Present'n\\n\\n\\nPause",
				size: 'auto',
				color: combineRgb(220, 150, 235),
				bgcolor: combineRgb(100, 0, 100),
				png64:
					'iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABk2lDQ1BJQ0MgUHJvZmlsZQAAKJF9kc0rRGEUhx+DRiILlGRxF1gh\
						ISkbxkKKmgbla+HOnS81c+ftzkjKUtkqSmx8LWytsLSwVUr5KPkDZEVspOu8c2kGcep0nn7v+zv33POC78RUKlnSByk764QGA8bE\
						5JThf8BPLTXU02taGdUfDA4j8VW/x+sVRbpetupev8//jcpINGNBkSHcZyknKzwrHFzIKs2HwjWODCV8pjnu8Y3msMePuTtjoQHw\
						6Z6GlTAjwrpni5VwUsJ67sZIKqJ15bGteV1zuMAbL+BUct76nFP/YUXUHh/V9yUbGGSIEYIYhJlnjiRZWqXaomQIyXngD39Xzj9A\
						GsUijnjiJMRt0C+Kkk5R4SHpZNFGi3AH7ZLd+m1+7jyvpXeg5wWKV/NaeAOOV6DuNq81bkPVMhydKdMxc1KxpC8Wg6cDeZJJqL6A\
						8ulMrLPDm74iAKX3rvvcBP41eF913bdd133fE/MdnNrenj97sX8NY0swfA6bW9Acl2/O/LGPstw+/t9ZWeHOPwC0UXgblG4USAAA\
						ALJlWElmTU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAAANAAAA\
						cgEyAAIAAAAUAAAAgIdpAAQAAAABAAAAlAAAAAAAAABIAAAAAQAAAEgAAAABR0lNUCAyLjEwLjM2AAAyMDI0OjEwOjIwIDIxOjUx\
						OjA2AAACoAIABAAAAAEAAABIoAMABAAAAAEAAABIAAAAAO2jo4wAAAAJcEhZcwAACxMAAAsTAQCanBgAAAN0aVRYdFhNTDpjb20u\
						YWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+\
						CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAg\
						IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94\
						YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAg\
						IHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5HSU1Q\
						IDIuMTAuMzY8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMjQtMTAtMjBUMjE6NTE6MDY8L3ht\
						cDpNb2RpZnlEYXRlPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAg\
						ICA8dGlmZjpYUmVzb2x1dGlvbj43MjwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzI8L3Rp\
						ZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDxl\
						eGlmOlBpeGVsWERpbWVuc2lvbj4xNzwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwv\
						ZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MjU8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgog\
						ICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KhZI54AAAASBJREFUeAHt2TFOw0AQBdAY\
						pchR6KDMMXKEHC1H4Bh0hAqOQUkqM4OEZK1QvijiAr2VRrb3r+z103S72RgECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQL/QGBa\
						8x/meX6o7z0O3+w9vFe9TNN06azW7erS6+77sWo5zrXudTlxy/vtLV/+y7v7p4/DfAM9Vb1VfQPVtYH2VYeqEehUc6sB3dXHjCsC\
						gK7gdAQIUBAIsQ4CFARCrIMABYEQ6yBAQSDEOghQEAixDgIUBEKsgwAFgRDrIEBBIMQ6CFAQCLEOAhQEQqyDAtDa52Ln2s9p2NPP\
						weHnYr7vn6s+qsZzsX6HQYAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQOAvAl8X3BoJPbYi5wAAAABJRU5ErkJggg==',
				pngalignment: 'center:center',
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.transportLayerOperation,
							options: { transport_layer: 'presentation', transport_operation: 'pause' },
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		},
		['Transport Presentation Layer Play/Pause']: {
			name: 'Transport Presentation Layer Play/Pause',
			category: 'Transport',
			type: 'button',
			style: {
				text: '`${substr($(Propresenter-API:transport_presentation_layer_media_name),0,6)}...\\n\\n\\n${$(Propresenter-API:video_countdown_timer)}`',
				textExpression: true,
				size: 'auto',
				color: combineRgb(220, 150, 235),
				bgcolor: combineRgb(100, 0, 100),
				png64:
					'iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABk2lDQ1BJQ0MgUHJvZmlsZQAAKJF9kc0rRGEUhx+DRiILlGRxF1gh\
						ISkbxkKKmgbla+HOnS81c+ftzkjKUtkqSmx8LWytsLSwVUr5KPkDZEVspOu8c2kGcep0nn7v+zv33POC78RUKlnSByk764QGA8bE\
						5JThf8BPLTXU02taGdUfDA4j8VW/x+sVRbpetupev8//jcpINGNBkSHcZyknKzwrHFzIKs2HwjWODCV8pjnu8Y3msMePuTtjoQHw\
						6Z6GlTAjwrpni5VwUsJ67sZIKqJ15bGteV1zuMAbL+BUct76nFP/YUXUHh/V9yUbGGSIEYIYhJlnjiRZWqXaomQIyXngD39Xzj9A\
						GsUijnjiJMRt0C+Kkk5R4SHpZNFGi3AH7ZLd+m1+7jyvpXeg5wWKV/NaeAOOV6DuNq81bkPVMhydKdMxc1KxpC8Wg6cDeZJJqL6A\
						8ulMrLPDm74iAKX3rvvcBP41eF913bdd133fE/MdnNrenj97sX8NY0swfA6bW9Acl2/O/LGPstw+/t9ZWeHOPwC0UXgblG4USAAA\
						ALJlWElmTU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAAANAAAA\
						cgEyAAIAAAAUAAAAgIdpAAQAAAABAAAAlAAAAAAAAABIAAAAAQAAAEgAAAABR0lNUCAyLjEwLjM2AAAyMDI0OjEwOjIwIDIxOjU5\
						OjU4AAACoAIABAAAAAEAAABIoAMABAAAAAEAAABIAAAAAGCF8t0AAAAJcEhZcwAACxMAAAsTAQCanBgAAAN0aVRYdFhNTDpjb20u\
						YWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+\
						CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAg\
						IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94\
						YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAg\
						IHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5HSU1Q\
						IDIuMTAuMzY8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMjQtMTAtMjBUMjE6NTk6NTg8L3ht\
						cDpNb2RpZnlEYXRlPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAg\
						ICA8dGlmZjpYUmVzb2x1dGlvbj43MjwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzI8L3Rp\
						ZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDxl\
						eGlmOlBpeGVsWERpbWVuc2lvbj4yMDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwv\
						ZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MjY8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgog\
						ICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KNP7W6QAAAfJJREFUeAHt2b1OAkEUhmHW\
						aLwEL4OW1pqSlmvRW1ADrRQUFNBogx09VtppY4OlhSaaGBPX9ySSTEHC/5yDfpN82YX9m3n2bNjRSkVNAhKQgAQkIAEJSEACEpCA\
						BCQgAQlIQAISkIAEJCABCUhAAosLlGV5Qo4WP+Kf7QnOiAxIneztyvCLXB0FZfR7rW+WY9IuimKS6/qrXsfjTto1a6QFWoMcrNr5\
						HMd5VFA6rpIP9+ScanpKN0RZ96igdOx2g6rEqqlJDtONEda9Kyg1sGp6JGfkgYqyz+4tEtAU45OVPumB9DH90mvp/YjNGrc9Zk1i\
						j12VZLuJszqT7eIMdDSrA3O++2L7NelSTa9z9t3K5ogVlA7UXgEaxKqpRrL3N3oFpVj2gjkkHarpJd2wzfXsd2SNwVhf66RNJR2v\
						cZ6lDt0loKUGtqmd9zd1ogznsUfshlzmfMR2BegZmBYZg2NQ2Vp0IPef+chANnm9IHdUjdu0IyKQTTUGxKYa7yxdWyQgq5Jwk9Uo\
						QDYp7ZE+VWMVFKZ5A1nVhP6DmSfQGzhdckXV2K9VyOYBZO8xt6QFzCSkStKp3EA2yeyQIThZX/iSMcdcZYJ5SvSPw5i3R72SgAQk\
						IAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAn9d4AeVfYuYHgEw2wAAAABJRU5ErkJggg==',
				pngalignment: 'center:center',
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.transportLayerOperation,
							options: { transport_layer: 'presentation', transport_operation: 'toggle_play_pause' },
						},
					],
					up: [],
				},
			],
			feedbacks: [
				{
					feedbackId: 'TransportPlaying',
					options: {
						layer: 'presentation',
					},
					style: {
						bgcolor: combineRgb(255, 65, 255),
						color: combineRgb(255, 225, 255),
						png64:
							'iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABk2lDQ1BJQ0MgUHJvZmlsZQAAKJF9kc0rRGEUhx+DRiILlGRxF1gh\
								ISkbxkKKmgbla+HOnS81c+ftzkjKUtkqSmx8LWytsLSwVUr5KPkDZEVspOu8c2kGcep0nn7v+zv33POC78RUKlnSByk764QGA8bE\
								5JThf8BPLTXU02taGdUfDA4j8VW/x+sVRbpetupev8//jcpINGNBkSHcZyknKzwrHFzIKs2HwjWODCV8pjnu8Y3msMePuTtjoQHw\
								6Z6GlTAjwrpni5VwUsJ67sZIKqJ15bGteV1zuMAbL+BUct76nFP/YUXUHh/V9yUbGGSIEYIYhJlnjiRZWqXaomQIyXngD39Xzj9A\
								GsUijnjiJMRt0C+Kkk5R4SHpZNFGi3AH7ZLd+m1+7jyvpXeg5wWKV/NaeAOOV6DuNq81bkPVMhydKdMxc1KxpC8Wg6cDeZJJqL6A\
								8ulMrLPDm74iAKX3rvvcBP41eF913bdd133fE/MdnNrenj97sX8NY0swfA6bW9Acl2/O/LGPstw+/t9ZWeHOPwC0UXgblG4USAAA\
								ALJlWElmTU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAAANAAAA\
								cgEyAAIAAAAUAAAAgIdpAAQAAAABAAAAlAAAAAAAAABIAAAAAQAAAEgAAAABR0lNUCAyLjEwLjM2AAAyMDI0OjEwOjIwIDIxOjUx\
								OjA2AAACoAIABAAAAAEAAABIoAMABAAAAAEAAABIAAAAAO2jo4wAAAAJcEhZcwAACxMAAAsTAQCanBgAAAN0aVRYdFhNTDpjb20u\
								YWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+\
								CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAg\
								IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94\
								YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAg\
								IHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5HSU1Q\
								IDIuMTAuMzY8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMjQtMTAtMjBUMjE6NTE6MDY8L3ht\
								cDpNb2RpZnlEYXRlPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAg\
								ICA8dGlmZjpYUmVzb2x1dGlvbj43MjwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzI8L3Rp\
								ZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDxl\
								eGlmOlBpeGVsWERpbWVuc2lvbj4xNzwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwv\
								ZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MjU8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgog\
								ICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KhZI54AAAASBJREFUeAHt2TFOw0AQBdAY\
								pchR6KDMMXKEHC1H4Bh0hAqOQUkqM4OEZK1QvijiAr2VRrb3r+z103S72RgECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQL/QGBa\
								8x/meX6o7z0O3+w9vFe9TNN06azW7erS6+77sWo5zrXudTlxy/vtLV/+y7v7p4/DfAM9Vb1VfQPVtYH2VYeqEehUc6sB3dXHjCsC\
								gK7gdAQIUBAIsQ4CFARCrIMABYEQ6yBAQSDEOghQEAixDgIUBEKsgwAFgRDrIEBBIMQ6CFAQCLEOAhQEQqyDAtDa52Ln2s9p2NPP\
								weHnYr7vn6s+qsZzsX6HQYAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQOAvAl8X3BoJPbYi5wAAAABJRU5ErkJggg==',
						pngalignment: 'center:center',
					},
				},
			],
		},
		// **** TRIGGER *****
		['Trigger Previous Slide']: {
			name: 'Trigger Previous Slide',
			category: 'Trigger Next/Previous',
			type: 'button',
			style: {
				text: 'Previous\\n\\n\\nSlide',
				size: 'auto',
				color: combineRgb(255, 223, 192),
				bgcolor: combineRgb(255, 100, 0),
				png64:
					'iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABk2lDQ1BJQ0MgUHJvZmlsZQAAKJF9kc0rRGEUhx+DRiILlGRxF1gh\
						ISkbxkKKmgbla+HOnS81c+ftzkjKUtkqSmx8LWytsLSwVUr5KPkDZEVspOu8c2kGcep0nn7v+zv33POC78RUKlnSByk764QGA8bE\
						5JThf8BPLTXU02taGdUfDA4j8VW/x+sVRbpetupev8//jcpINGNBkSHcZyknKzwrHFzIKs2HwjWODCV8pjnu8Y3msMePuTtjoQHw\
						6Z6GlTAjwrpni5VwUsJ67sZIKqJ15bGteV1zuMAbL+BUct76nFP/YUXUHh/V9yUbGGSIEYIYhJlnjiRZWqXaomQIyXngD39Xzj9A\
						GsUijnjiJMRt0C+Kkk5R4SHpZNFGi3AH7ZLd+m1+7jyvpXeg5wWKV/NaeAOOV6DuNq81bkPVMhydKdMxc1KxpC8Wg6cDeZJJqL6A\
						8ulMrLPDm74iAKX3rvvcBP41eF913bdd133fE/MdnNrenj97sX8NY0swfA6bW9Acl2/O/LGPstw+/t9ZWeHOPwC0UXgblG4USAAA\
						ALJlWElmTU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAAANAAAA\
						cgEyAAIAAAAUAAAAgIdpAAQAAAABAAAAlAAAAAAAAABIAAAAAQAAAEgAAAABR0lNUCAyLjEwLjM2AAAyMDI0OjEwOjEzIDIyOjI5\
						OjQ3AAACoAIABAAAAAEAAABIoAMABAAAAAEAAABIAAAAAMfcWzAAAAAJcEhZcwAACxMAAAsTAQCanBgAAAN0aVRYdFhNTDpjb20u\
						YWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+\
						CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAg\
						IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94\
						YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAg\
						IHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5HSU1Q\
						IDIuMTAuMzY8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMjQtMTAtMTNUMjI6Mjk6NDc8L3ht\
						cDpNb2RpZnlEYXRlPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAg\
						ICA8dGlmZjpYUmVzb2x1dGlvbj43MjwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzI8L3Rp\
						ZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDxl\
						eGlmOlBpeGVsWERpbWVuc2lvbj4zMjwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwv\
						ZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MjU8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgog\
						ICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4K0txKfAAAAulJREFUeAHtmUtrFEEURtNq\
						xCe+gmhAiYK4UTcqJMEXEV+gv8d/JYKIC5duxFXEhaIL3WgwCCrRmJjE8XzSnYUzPdN2VXdq8LtwmEpPvfpM1e2ayciIwwZswAZs\
						wAZswAZswAZswAZswAZswAZswAZswAZswAZswAZswAbCDXQ6nc2wH46pHN5j3B62xO3u33pDiMYfh4uwCnOwBsnEpo2YCWIy2MrY\
						x+EO3IKDkEFS0foKkhwMSM5JuAHTsA20vf5vQbkcyTgDN+Es7IIVSDJaW0G5HMk4B5JzCnZA0tGKIOQo1+0BbSdtqxOglZR8NC4I\
						OcotB+ASXIcJGIWhiEYFIUf9H4KrOYd5LRtTq2yUNkHysiyLms/KJstc6wc3qaeR+j4KWjVXQKuo7CCo+hJ5Hn5C3VDbp3Ub92oX\
						/bGay9FjXHmmeIzvpawVUhYd3vgM8/CrrFKF699YQXcr1KtcpYkVJDmnQU8qrYjdMOiD0Pv7QIk8JL6ENO7VtglBRxjoNkjOdhgk\
						hyp/QvXKtmBeZeBLaPuuAfot+67KFS9ouxRUbJJutSZW0Htu9yEol+hQqMNhlQ9C9SU2JKJ/0Y0uiCS5RKJ+wV3+gO9wAZRb+kmS\
						nK/wEUKS9ALto0Z0QZodkpaR9JriEkjUZRiDshwhKW/gMSxD3dBPJlGjEUGaoQ5sSHpH8QEswgyMQ68xJUir5xlIaN0I3aJd4/aa\
						bFeluheQtIakD7R/BJJ0DSZA4/79dJOkVYnlNZnolxeiTJIb1o1/Am2f+/AKdOKN/mnTZ/RoXJBmnEtSEn4C92AWlJ+Sl9ToFkPA\
						eiBJMhbYckWeUa7RMWDneqUEC60JKu4dUYtIes7fEqS8NAU6cScZrQuSBSTprPSSYiFpkrJyVXKxIYJkAUk6BrylqGOAvmTqDBP9\
						JEyfwx1ISvofh8Nt17O3ARuwARuwARuwARuwARuwARuwARuwARuwARuwARuwARuwARvIDfwGhye0t1U/FGEAAAAASUVORK5CYII=',
				pngalignment: 'center:center',
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.triggerOperation,
							options: { trigger_target: 'presentation', trigger_next_previous: 'previous' },
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		},
		['Trigger Next Slide']: {
			name: 'Trigger Next Slide',
			category: 'Trigger Next/Previous',
			type: 'button',
			style: {
				text: 'Next\\n\\n\\nSlide',
				size: 'auto',
				color: combineRgb(255, 223, 192),
				bgcolor: combineRgb(255, 100, 0),
				png64:
					'iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABk2lDQ1BJQ0MgUHJvZmlsZQAAKJF9kc0rRGEUhx+DRiILlGRxF1gh\
						ISkbxkKKmgbla+HOnS81c+ftzkjKUtkqSmx8LWytsLSwVUr5KPkDZEVspOu8c2kGcep0nn7v+zv33POC78RUKlnSByk764QGA8bE\
						5JThf8BPLTXU02taGdUfDA4j8VW/x+sVRbpetupev8//jcpINGNBkSHcZyknKzwrHFzIKs2HwjWODCV8pjnu8Y3msMePuTtjoQHw\
						6Z6GlTAjwrpni5VwUsJ67sZIKqJ15bGteV1zuMAbL+BUct76nFP/YUXUHh/V9yUbGGSIEYIYhJlnjiRZWqXaomQIyXngD39Xzj9A\
						GsUijnjiJMRt0C+Kkk5R4SHpZNFGi3AH7ZLd+m1+7jyvpXeg5wWKV/NaeAOOV6DuNq81bkPVMhydKdMxc1KxpC8Wg6cDeZJJqL6A\
						8ulMrLPDm74iAKX3rvvcBP41eF913bdd133fE/MdnNrenj97sX8NY0swfA6bW9Acl2/O/LGPstw+/t9ZWeHOPwC0UXgblG4USAAA\
						ALJlWElmTU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAAANAAAA\
						cgEyAAIAAAAUAAAAgIdpAAQAAAABAAAAlAAAAAAAAABIAAAAAQAAAEgAAAABR0lNUCAyLjEwLjM2AAAyMDI0OjEwOjEzIDIyOjI4\
						OjUzAAACoAIABAAAAAEAAABIoAMABAAAAAEAAABIAAAAAE86xiEAAAAJcEhZcwAACxMAAAsTAQCanBgAAAN0aVRYdFhNTDpjb20u\
						YWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+\
						CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAg\
						IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94\
						YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAg\
						IHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5HSU1Q\
						IDIuMTAuMzY8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMjQtMTAtMTNUMjI6Mjg6NTM8L3ht\
						cDpNb2RpZnlEYXRlPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAg\
						ICA8dGlmZjpYUmVzb2x1dGlvbj43MjwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzI8L3Rp\
						ZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDxl\
						eGlmOlBpeGVsWERpbWVuc2lvbj4zMjwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwv\
						ZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MjU8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgog\
						ICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4Ko/Y/kwAAAoJJREFUeAHtmU1LW0EUho0V\
						XBgrKNSNuDN0VxduVAQXpRvdWHBRWvR/+RtiI+pCF2K7Ed2VQjdqFqWhq1IKpVBpafqc0mC+zM0kM5N75b3wkjszZ+aceTJz7txk\
						aEiXCIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIQhUK1WH6PxMKO7jTriZh7Nesk8AWk/l8t9iea1jaO0Apok\
						1lU0BqQ9IH1qE3uUquEoXtydVOkyhtbQSyAVUM59mP57pBVQbWaj3DxFW+gJkKLHG91hbeYOnw+wtZy0jRaBFDUtRHXmAKXZ1LbX\
						PLJtlwfSG/LSTbNRiHIWVlD9vAsUXqF1IOXrG0LdZw2QJe8Z9AI9B5I97YJe3rcYQS97iHg6YYwp2jeRbTc7BnxOsO+52fujk4B3\
						eo7mtqMBenhbvPPO8tAJKqEyoGyFeb28ryCim/MaYefB7BjwDFk+KvLlfADSn85d3FqzloPazc6+5BVkZ6XZdgb91N0HQDZ/21re\
						04UNHGKL2bgxr184O0dF9NG34xCArjwE+YgxJroY5yc2p2iX3FPuwt7ZxPuyJFH++6nCOZLGDhsUFxqrWkrfqTlGpZCPee8riGDP\
						WqbiWAHkxYQu9hvRITrA39cE276avQPqK5ruOlcw20NHwPnRXZferbIEyJ5U12gXRXtZzQogO/y9/w/nnJXzm/soVxYAGYwLZCvn\
						HXC8v050Ip12QPau9dbgAOay00RCtaUZkCXgI2Rv65VQAJLGTSugbwT+Gg38b58kgANp5xyUmj8OBwJATkVABERABERABERABERA\
						BERABERABERABERABERABERABERABHwT+AuN5HtfVId3uQAAAABJRU5ErkJggg==',
				pngalignment: 'center:center',
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.triggerOperation,
							options: { trigger_target: 'presentation', trigger_next_previous: 'next' },
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		},
		// **** TIMER *****
		// These are dynamically added in code below.
		// **** VIDEO INPUT *****
		// TODO: These are dynamically added in code below.
	}

	// *** DYNAMICALLY GENERATED PRESETS ***

	// Dynamically create LookTrigger presets for each lookChoice in propresenterStateStore...
	instance.propresenterStateStore.looksChoices.forEach((lookChoice) => {
		const lookID: string = lookChoice.label as string
		presets[lookID] = {
			name: lookID + ' Look',
			category: 'Looks',
			type: 'button',
			style: {
				text: 'Look\\n\\n\\n' + lookID, // lookID.slice(0,7)
				size: 'auto',
				color: combineRgb(218, 218, 218),
				bgcolor: combineRgb(110, 110, 110),
				png64:
					'iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABk2lDQ1BJQ0MgUHJvZmlsZQAAKJF9kc0rRGEUhx+DRiILlGRxF1gh\
						ISkbxkKKmgbla+HOnS81c+ftzkjKUtkqSmx8LWytsLSwVUr5KPkDZEVspOu8c2kGcep0nn7v+zv33POC78RUKlnSByk764QGA8bE\
						5JThf8BPLTXU02taGdUfDA4j8VW/x+sVRbpetupev8//jcpINGNBkSHcZyknKzwrHFzIKs2HwjWODCV8pjnu8Y3msMePuTtjoQHw\
						6Z6GlTAjwrpni5VwUsJ67sZIKqJ15bGteV1zuMAbL+BUct76nFP/YUXUHh/V9yUbGGSIEYIYhJlnjiRZWqXaomQIyXngD39Xzj9A\
						GsUijnjiJMRt0C+Kkk5R4SHpZNFGi3AH7ZLd+m1+7jyvpXeg5wWKV/NaeAOOV6DuNq81bkPVMhydKdMxc1KxpC8Wg6cDeZJJqL6A\
						8ulMrLPDm74iAKX3rvvcBP41eF913bdd133fE/MdnNrenj97sX8NY0swfA6bW9Acl2/O/LGPstw+/t9ZWeHOPwC0UXgblG4USAAA\
						ALJlWElmTU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAAANAAAA\
						cgEyAAIAAAAUAAAAgIdpAAQAAAABAAAAlAAAAAAAAABIAAAAAQAAAEgAAAABR0lNUCAyLjEwLjM2AAAyMDI0OjEwOjEzIDIxOjEy\
						OjE1AAACoAIABAAAAAEAAABIoAMABAAAAAEAAABIAAAAAHq/YZ8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAMCaVRYdFhNTDpjb20u\
						YWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+\
						CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAg\
						IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20v\
						dGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgICAgICAg\
						ICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzI8\
						L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAg\
						ICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4x\
						PC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAg\
						PHhtcDpNb2RpZnlEYXRlPjIwMjQtMTAtMTNUMjE6MTI6MTU8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8eG1wOkNyZWF0b3JU\
						b29sPkdJTVAgMi4xMC4zNjwveG1wOkNyZWF0b3JUb29sPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8\
						L3g6eG1wbWV0YT4KO/sCrwAABPNJREFUeAHtmcmPVUUUh7sVBRxAkBmiCIlRcQAhtguUkBgUcYUIutCNiZr4P7jgn2ChG6cVCQGC\
						AkEjJBglhBZppIkhMiiTYguK0iDy/L7OrcdroPENt57GnJN8XXVv3VO36ndPTa87OsJCgVAgFAgFQoFQIBQIBUKBUCAUCAVCgVAg\
						FAgFQoFQIBQIBUKBUCAUCAX+Bwp0trMPlUplHO+bAiOgH451dnaeIh3S8BlP4WTQ5xwcxaePtC3WFoHo5Eh6Mx8ehkECcf01bKfT\
						ClY1fG7h4gl4CAYJxLU+n+NznjSrZReIjg6nB0thCSjOX/Ab3A43wlH4CNbQ4QukHfgYLcvgWZgEF+EsjIIb4AhsgLX4WJbNhmWr\
						+XLFXWSXw2jwy3fDr2Bn54JRtQLQpaIIFRgD+twGPq+fPnfAPJgFL8L3sAOyWVaB6LD1LwPFOQDvwh6++iXKjIQeeBNmwkuQhowR\
						pDi9oM9efBRQn72gz3R4nns7rY98FvOFOW0sld9XvGAjHdmdOmPqNWWbi3IjSoH+BIef9jHP9IBR1VH47CL7qdeY81N6duBG2X/a\
						IVCK0v1DNN4oSeZclATz3r5UcEWafJzfHHbZLLdAv9e0/M6afG023TdKtsMXNYXjavK12eTj0DpXW1B2PrdAP9HgY0WjFzNfDOpw\
						cf1MUe5z7omOg37aEp5xwq4a1xO4WFTcOELaVy3MkEnhn6HqgTmjnw5toPJXYR68zPVXpKfBofEozAWX/vXMMc5B53nGofYKdIE+\
						rmJnQLF8fja4vK/DJ+sy3459kBP1a7AQ3Pf41e2sK9tdoDhOum/T2V9IXe+NtNdhARjlhyEt8/q4X9oC7+Dj/WyWXSBbToenkjiU\
						HoG0k3bucFgZHZvoqPmq4aMQT4P7JH2Ggz5uLHeDPidIs1pbBLIHdNjjxv1gZ80ngfbR0UHHDMoGDB+PG8lnBPk/QIF68XE4hv3b\
						CrQtglJHiQoj4QGYDObrMaPN1c3IuWa01VNJM8+0TSCE8V2zoAvcATcikKIo0B7YAQ7Lgd01+axWikB0/l5a+QONdo64yoq5ZD4F\
						T4FLdLPbC48hTuqfgD+RXO990yj/ludasmYbeuVLn+PGSYTwvFXduBVRM4OyJ0FxjJpW7Cac3U+5Kk6l/m2kB3lnNZq45y57MYyH\
						/4xArijLbRQNdCP4I9wMd4Mbu8fAZbosU2jfZ/3dvPMQqdE1AebAQtgMLVtZQ8w9y0qYBochCTSd/Bio107yoFFtFNRrRqzvvAAT\
						wbb4O9FbRJZpS1aKQLaAr7iI5A3wCNGsfYjjSFjabAX4nYZViLOlhTqqrmXNQVb4GRgtL8BYaNScLzaB84zD5B5o1H7GYTVsbdRx\
						qOc955RifDHngHXwAexvsFKff486/I/FIfNwAOo1J+leeB88wNqWUqy0IZZaw1DzQOrE/Di433EiHSpS097G6POnUzvqcPXD6b8A\
						PIs5t1zLFML5pwe+hG7q8PBbmpUuUGoZnfS0/iDMgEkwCtw5XwR/SPM3n4Pgb9QnSK8y6pjCTUV2uHnCvxUUux/OgH7fwTfU4XXp\
						lk2g1NIiGlyVFMyl3i98Fk7RKTv6j0YdTtxJICPUbYWTcR91XCINCwVCgVAgFAgFQoFQIBQIBUKBUCAUCAVCgVAgFAgFQoFQIBQI\
						BUKBUCAUCAWup8DfRqNmietQJ4YAAAAASUVORK5CYII=',
				pngalignment: 'center:center',
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.lookIdTrigger,
							options: { look_id_dropdown: lookID },
						},
					],
					up: [],
				},
			],
			feedbacks: [
				{
					feedbackId: 'ActiveLook',
					options: { active_look_dropdown: lookID },
					style: {
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
								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',
					},
				},
			],
		}
	})

	// Dynamically create MacroTrigger presets for each macroChoice in propresenterStateStore...
	instance.propresenterStateStore.proMacros.forEach((proMacro) => {
		const macroID: string = proMacro.id.uuid as string
		const macroLabel: string = proMacro.id.name as string
		presets[macroID] = {
			name: macroLabel + ' Macro',
			category: 'Macros',
			type: 'button',
			style: {
				text: 'Macro\\n\\n\\n' + macroLabel, // macroLabel.slice(0,7)
				size: 'auto',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(
					proMacro.color.red * 255,
					proMacro.color.green * 255,
					proMacro.color.blue * 255,
					proMacro.color.alpha * 255
				), //combineRgb(153, 153, 0),
				png64:
					'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',
				pngalignment: 'center:center',
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.marcoIdTrigger,
							options: { macro_id_dropdown: macroID },
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		}
	})

	// Dynamically create Message presets for each messageChoice in propresenterStateStore...
	instance.propresenterStateStore.messageChoices.forEach((message) => {
		const messageID: string = message.id as string
		const messageLabel: string = message.label as string
		presets[messageID] = {
			name: messageLabel + ' Message',
			category: 'Messages',
			type: 'button',
			style: {
				text: 'Message\\n\\n\\n' + messageLabel,
				size: 'auto',
				color: combineRgb(255, 223, 192),
				bgcolor: combineRgb(204, 101, 0),
				png64:
					'iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABk2lDQ1BJQ0MgUHJvZmlsZQAAKJF9kc0rRGEUhx+DRiILlGRxF1gh\
						ISkbxkKKmgbla+HOnS81c+ftzkjKUtkqSmx8LWytsLSwVUr5KPkDZEVspOu8c2kGcep0nn7v+zv33POC78RUKlnSByk764QGA8bE\
						5JThf8BPLTXU02taGdUfDA4j8VW/x+sVRbpetupev8//jcpINGNBkSHcZyknKzwrHFzIKs2HwjWODCV8pjnu8Y3msMePuTtjoQHw\
						6Z6GlTAjwrpni5VwUsJ67sZIKqJ15bGteV1zuMAbL+BUct76nFP/YUXUHh/V9yUbGGSIEYIYhJlnjiRZWqXaomQIyXngD39Xzj9A\
						GsUijnjiJMRt0C+Kkk5R4SHpZNFGi3AH7ZLd+m1+7jyvpXeg5wWKV/NaeAOOV6DuNq81bkPVMhydKdMxc1KxpC8Wg6cDeZJJqL6A\
						8ulMrLPDm74iAKX3rvvcBP41eF913bdd133fE/MdnNrenj97sX8NY0swfA6bW9Acl2/O/LGPstw+/t9ZWeHOPwC0UXgblG4USAAA\
						ADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAASKADAAQAAAABAAAASAAAAACz+WTVAAADLUlEQVR4\
						Ae2Y2WoUQRRAM+5RMSiCiCvEXUQF/QFfffBjffFBfBRBBddEjRKMu3ENSjTqtOeELmiGMXnQqm71Xjipqp7JdNWZW7e7Z2QkIgyE\
						gTAQBsJAGAgDYSAMhIEwEAbCQBgIA2EgDISBMBAGwkAYCANh4B8w0Ptb11BV1RrmvhkWer3e+1zrWJXrg3N8LlL8QsdgHxyGCi7D\
						/y0IMauRsB2UcgiOwF64CB8hW3Q6gxCziZWPg1KUI4pyez2DCXgH2aJzgpDinLbBQVCI2aIk602zZt5jPEH9cZtli84IQsxGVrkH\
						FJK20Q7668Do16yknYO7YBZljVYFIcXFboWULWbMAdgCKyDFWzrfweP+z0OYJHsWaLNGK4IQM8qqdkPKFsU4Xg/N+MFgGmbB7FKO\
						Uqw9SsoexQQhxYwwA8wQhbiNxAxy4YPxhQO3QRG+3/f5Gc/B2pP16sU5FiO7IMRYQ6wlKVtszQZrzq/CxV8BBR2D/eCVqwKzxwJd\
						JLIKQo4STsAZOAlenZY75yvecwmuw3E4DRvA8JKuoJcOSsRyk/3dOfiNu1VmwEu0dWYXeH/jdmlGn8E0XICrkMS6LVNM0XF7WbCL\
						RFZBLOQzq7hGJt2ktYYoSNxiqe9x5XnZPg8pc87Sd2ummKdj9iixWGQVlFaBqG/0XwiyzA4zaCckWc7jBtyCo3AOxqEZZqHZo/Ri\
						UURQczUssM/4Q80dhI3S91nrK1iMlaOk5hb0fybhPhSN5iSKnjidDGHzMFePT9FalNem1+v2Na3ba3bgePZh64IaKzRLrEXD5vSA\
						424v31M0hk2m6ATSyVi8deoxWKua8YmB2fOkebBUvzOC6gXP0CqpGV61zB6vYsWja4LMHiWZTYb3OxbnKQdtRKcEkSVewt1Kb2oZ\
						3jG7vbL+KFafa2jTKUH1DN1iZpHhM5fbq1octfCni4Ke4kFB/hBv9vj03lp0UZA3kWaRjxxmT/YfxZayX/xOeqnJ+BpC+txdP6Lr\
						TaG/BUUMGkDQGPi8FhEGwkAYCANhIAyEgTAQBsJAGAgDYSAMhIEwEAbCQBgIA2EgDISBMBAG/oSBnxb6uCGFgSchAAAAAElFTkSu\
						QmCC',
				pngalignment: 'center:center',
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.messageOperation,
							options: {
								message_operation: 'show',
								message_id_dropdown: messageID,
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		}
	})

	// Dynamically create PropToggle presets for each propChoice in propresenterStateStore...
	instance.propresenterStateStore.propChoices.forEach((propChoice) => {
		const propID: string = propChoice.id as string
		const propLabel: string = propChoice.label as string
		presets[propID] = {
			name: propLabel + ' Prop',
			category: 'Props',
			type: 'button',
			style: {
				text: 'Prop\\n\\n\\n' + propLabel, // propLabel.slice(0,8)
				size: 'auto',
				color: combineRgb(100, 190, 205),
				bgcolor: combineRgb(0, 100, 100),
				png64:
					'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',
				pngalignment: 'center:center',
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.propOperation,
							options: {
								prop_operation: 'toggle',
								prop_id_dropdown: propID,
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [
				{
					feedbackId: 'PropActive',
					options: { prop_id_dropdown: propID },
					style: {
						bgcolor: combineRgb(0, 165, 225),
						color: combineRgb(255, 255, 255),
					},
				},
			],
		}
	})

	// Dynamically create Group presets for each proGroup in propresenterStateStore...
	instance.propresenterStateStore.proGroups.forEach((proGroup) => {
		const proGroupID: string = proGroup.id.name as string // Using Name since UUID does NOT work with current API (bug)
		const proGroupLabel: string = proGroup.id.name as string
		// Default to black if a group has no color
		let groupBGColor: { red: number; green: number; blue: number } = { red: 0, green: 0, blue: 0 }
		if (proGroup.color) {
			groupBGColor = {
				red: proGroup.color.red * 255,
				green: proGroup.color.green * 255,
				blue: proGroup.color.blue * 255,
			}
		}
		presets[proGroupID] = {
			name: proGroupLabel + ' Group',
			category: 'Groups',
			type: 'button',
			style: {
				text: 'Group\\n\\n\\n' + proGroupLabel, // proGroupLabel.slice(0,8)
				size: 'auto',
				color: combineRgb(255, 255, 255),
				bgcolor: combineRgb(groupBGColor.red, groupBGColor.green, groupBGColor.blue),
				png64:
					'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\
						pFzSMdNv5pqZfdJoaa0MkU2VNcoN4J/SNoWT4gtFZ0FgQXXBq1mpsw4V6haKC9uKnIsWFz0qDi/eMRufzZ3dUmJdsqCkcw5rzta5\
						yNwZc1vm2c4rm9c1P2L+rgWaC3IX/FjKKF1Z+sfCtIXNZRZl88sefhHxxZ5yWrm0/OYi/0VbvsS/FH55cfHYxesXv6vgVfxQyais\
						qny7hLvkh688vlr31fulWUsvLvNetnk5cbl4+Y0VQSt2rdRdWbzy4aqJqxpW01dXrP5jzfQ156vGVW1Zq7lWsbZjXcy6xvV265ev\
						f7tBsKG9ekL1vo3mGxdvfLmJt+nq5uDN9VsstlRuefO18OtbWyO2NtQ41FRtI24r2PbL9tTtrTuYO+pqzWora//cKd7ZsStx15k6\
						n7q63ea7l+1B9yj29OydsvfyN6HfNNa71W/dZ7Svcj/Yr9j/+EDmgRsHow+2HGIeqv/W/tuNh/UPVzQgDUUNfUcERzoa0xuvNEU1\
						tTT7Nx/+zv27nUetj1YfMzy27Ljm8bLj708Un+g/KTnZeyr71MOW6S13T086ff1MwpmLZ6PPnvs+/PvTrazWE+cCzh0973e+6Qfm\
						D0cueF9oaPNqO/yj14+HL3pfbLjkc6nxsu/l5ivjrxy/GnT11LXQa99fZ1+/0B7bfuVGyo1bN6fc7LjFu9V9W3T72Z2COwN358OL\
						fcV9nftVD8wf1Pxr9L/2dXh3HOsM7Wz7Kemnuw+5D5/8LPv5bVfZL9Rfqh5ZParr9uw+2hPec/nx5MddTyRPBnrLf9X9deNTp6ff\
						/hb8W1vfpL6uZ9Jn739f8tz0+c4/xv3R0h/f/+BF3ouBlxWvTF/tes183fom7c2jgVlvSW/X/Tn6z+Z30e/uvc97//7fCQ/4Yk7k\
						YoUAAACyZVhJZk1NACoAAAAIAAcBEgADAAAAAQABAAABGgAFAAAAAQAAAGIBGwAFAAAAAQAAAGoBKAADAAAAAQACAAABMQACAAAA\
						DQAAAHIBMgACAAAAFAAAAICHaQAEAAAAAQAAAJQAAAAAAAAASAAAAAEAAABIAAAAAUdJTVAgMi4xMC4zNgAAMjAyNDoxMTowMyAy\
						Mjo1MjoyNwAAAqACAAQAAAABAAAASKADAAQAAAABAAAASAAAAADnxDnjAAAACXBIWXMAAAsTAAALEwEAmpwYAAADRmlUWHRYTUw6\
						Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4w\
						LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgog\
						ICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5j\
						b20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAg\
						ICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+\
						R0lNUCAyLjEwLjM2PC94bXA6Q3JlYXRvclRvb2w+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDI0LTExLTAzVDIyOjUyOjI3\
						PC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAg\
						ICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzI8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjcy\
						PC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAg\
						ICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MzA8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1l\
						bnNpb24+Mjc8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6\
						eG1wbWV0YT4K/1wDYgAAAdpJREFUaAXtlz1PwlAUhs/lQxIFV5U/4Kw/wV1CwuZoXF0cNA5sEhPdWDXEgeiiEwOLcdJVZ/6AGnUk\
						Dn709ba0SXttocdWU5PTJpDz9tyXt8+9/YBINiEgBISAEBACQkAICAEhIASEwD8kgHU0MJOh4GhZL+igmplIKKGJJ3RRyU6ksqY0\
						RJ8bSXHOQJtXKR97xDTt0wqd0pZ6jj2G14ia9QzmptdSnfMrPEILtERTHHvd+0a36pE5RtrHEGBMGbaDPurArrFhqMeO2jDUi2Ad\
						XXECIWijnLEYGOqiXaNnqKvBOpVKX15HKLr7Jdx4GKCNgru3vXjoYQ95d980442LUxh38NsxS72PNC+OXQG5j5FqwQcc6tPttUbf\
						8T5z8dr+ritzgXhTlkPRZeWbG6XgufhUUvAeMqyT9ltMmBf/urFbf+cq885tQhjn8E5o02GoehKqipgCAcYa0neceVr+wdP+Tj2k\
						kDTMAnX9dsPc9BtULcwrSuMsaqIb1ac1uqJdeo0yNHV9v743tRRrVNDXb8otlFM0TWalI3X1/4kmSsl8UhyNKjp6LbVStExmBYU5\
						nOE6mUvUaN6idlwUMKRzmo2yFF0ICAEhIASEgBAQAkJACAgBIZBlAl9ePPiqJ7rnJQAAAABJRU5ErkJggg==',
				pngalignment: 'center:center',
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.activePresentationOperation,
							options: {
								active_presentation_operation: 'group',
								group_id_dropdown: proGroupID,
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		}
	})

	// Dynamically create Stage Layout presets for each stage-screen and stage-layout...
	instance.propresenterStateStore.stageScreenChoices.forEach((stageScreen, index) => {
		instance.propresenterStateStore.stageScreenLayoutChoices.forEach((stageLayout) => {
			const stage_screen_id: string = stageScreen.id as string
			const stage_screen_label: string = stageScreen.label as string
			const stage_layout_id: string = stageLayout.id as string
			const stage_layout_label: string = stageLayout.label as string

			presets[stage_screen_id + stage_layout_id] = {
				name: stage_screen_label + ' - ' + stage_layout_label,
				category: 'Stage Layouts',
				type: 'button',
				style: {
					text: stage_screen_label.slice(0, 6) + '\\n\\n\\n' + stage_layout_label,
					size: 'auto',
					color: combineRgb(225, 225, 225),
					bgcolor: combineRgb(0 + (index % 2) * 70, 0 + (index % 2) * 70, 0 + (index % 2) * 70), // Make the background for the layout buttons, a slightly different shade of black for each screen for every second stage screen (to help seperate them visually by screen)
					png64:
						'iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABk2lDQ1BJQ0MgUHJvZmlsZQAAKJF9kc0rRGEUhx+DRiILlGRxF1gh\
							ISkbxkKKmgbla+HOnS81c+ftzkjKUtkqSmx8LWytsLSwVUr5KPkDZEVspOu8c2kGcep0nn7v+zv33POC78RUKlnSByk764QGA8bE\
							5JThf8BPLTXU02taGdUfDA4j8VW/x+sVRbpetupev8//jcpINGNBkSHcZyknKzwrHFzIKs2HwjWODCV8pjnu8Y3msMePuTtjoQHw\
							6Z6GlTAjwrpni5VwUsJ67sZIKqJ15bGteV1zuMAbL+BUct76nFP/YUXUHh/V9yUbGGSIEYIYhJlnjiRZWqXaomQIyXngD39Xzj9A\
							GsUijnjiJMRt0C+Kkk5R4SHpZNFGi3AH7ZLd+m1+7jyvpXeg5wWKV/NaeAOOV6DuNq81bkPVMhydKdMxc1KxpC8Wg6cDeZJJqL6A\
							8ulMrLPDm74iAKX3rvvcBP41eF913bdd133fE/MdnNrenj97sX8NY0swfA6bW9Acl2/O/LGPstw+/t9ZWeHOPwC0UXgblG4USAAA\
							ADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAASKADAAQAAAABAAAASAAAAACz+WTVAAAB4ElEQVR4\
							Ae3XoUsEQRTH8Vs1idFiVLCciO2K/h1azAbBYjfZLYLBbBEMgv+AQYvIgaDZaLkiiMHg+hvYNCxvd+7GmfX8LizHvPd2dt6Hvdm7\
							Xo8DAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEBgCgSKLvRQluWi1rGvc7Naz70+z4qiGFXjbB/ZgYSzoO4vdC55Cm8a7wrp\
							w4snHc4kvVv9zbYV9nFcpYu5XNajC0ArhoCVMy6Ll+oC0LvRjpUzLouX6gLQjdr5rmnJxVwu65EVSBv0qrrv63ypUXCxflVTk04T\
							yvIWU9Pzau9Y51bLNu9Ud6Q32mfL+mhluYBO1cEgsIsHAR0EXjNxefKvmJ6e9TFwXKOD6tqJmw6ZYC6kOFLtrOa5HnMudy0HAn9I\
							INkmrf3jXC4bkWyetGHvRZrLnCblJv1sriQsGXMu884pgR7NlYQlY85l3jk10Je5mnZJN8f0AWnPcI0N2xmYVcNqLrMoVjL176Ar\
							LXxUs/hlxda8uPsv9urF3PC2JvZroWRvMasDveF2lD/0ak70pFx6seTDlHtQ8uZi3BCgBkWAAGoQaEjzBAHUIEAaAQQQQAABBBBA\
							AAEEEEAAAQQQQAABBBBAAAEEEEDgPwj8APF7RgezoXMhAAAAAElFTkSuQmCC',
					pngalignment: 'center:center',
				},
				steps: [
					{
						down: [
							{
								actionId: ActionId.stageDisplayOperation,
								options: {
									stagedisplay_operation: 'set_layout',
									stagescreen_id_dropdown: stage_screen_id,
									stagescreenlayout_id_dropdown: stage_layout_id,
								},
							},
						],
						up: [],
					},
				],
				feedbacks: [
					{
						feedbackId: 'StageLayouts',
						options: {
							stagescreen_id_dropdown: stage_screen_id,
							stagescreenlayout_id_dropdown: stage_layout_id,
						},
						style: {
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
					},
				],
			}
		})
	})

	// Dynamically create Timer presets for each configured Timer...
	instance.propresenterStateStore.proTimers.forEach((proTimer, index) => {
		const timer_id: string = proTimer.id.uuid as string
		const timer_label: string = proTimer.id.name as string

		presets[timer_id + ' Show/Toggle'] = {
			name: 'Timer' + timer_label + ' Show/Toggle',
			category: 'Timers',
			type: 'button',
			style: {
				text: `$(Propresenter-API:timer_${timer_id.replaceAll('-', '')}_custom)` + '\\n\\n\\n' + timer_label,
				size: 'auto',
				color: combineRgb(0, 205, 0),
				bgcolor: combineRgb(0, 102 - (index % 2) * 30, 0), // Make the background for the buttons, a slightly different shade for every second timer
				png64:
					'iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABk2lDQ1BJQ0MgUHJvZmlsZQAAKJF9kc0rRGEUhx+DRiILlGRxF1gh\
						ISkbxkKKmgbla+HOnS81c+ftzkjKUtkqSmx8LWytsLSwVUr5KPkDZEVspOu8c2kGcep0nn7v+zv33POC78RUKlnSByk764QGA8bE\
						5JThf8BPLTXU02taGdUfDA4j8VW/x+sVRbpetupev8//jcpINGNBkSHcZyknKzwrHFzIKs2HwjWODCV8pjnu8Y3msMePuTtjoQHw\
						6Z6GlTAjwrpni5VwUsJ67sZIKqJ15bGteV1zuMAbL+BUct76nFP/YUXUHh/V9yUbGGSIEYIYhJlnjiRZWqXaomQIyXngD39Xzj9A\
						GsUijnjiJMRt0C+Kkk5R4SHpZNFGi3AH7ZLd+m1+7jyvpXeg5wWKV/NaeAOOV6DuNq81bkPVMhydKdMxc1KxpC8Wg6cDeZJJqL6A\
						8ulMrLPDm74iAKX3rvvcBP41eF913bdd133fE/MdnNrenj97sX8NY0swfA6bW9Acl2/O/LGPstw+/t9ZWeHOPwC0UXgblG4USAAA\
						ALJlWElmTU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAAANAAAA\
						cgEyAAIAAAAUAAAAgIdpAAQAAAABAAAAlAAAAAAAAABIAAAAAQAAAEgAAAABR0lNUCAyLjEwLjM2AAAyMDI0OjEwOjIwIDIxOjU5\
						OjU4AAACoAIABAAAAAEAAABIoAMABAAAAAEAAABIAAAAAGCF8t0AAAAJcEhZcwAACxMAAAsTAQCanBgAAAN0aVRYdFhNTDpjb20u\
						YWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+\
						CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAg\
						IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94\
						YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAg\
						IHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5HSU1Q\
						IDIuMTAuMzY8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMjQtMTAtMjBUMjE6NTk6NTg8L3ht\
						cDpNb2RpZnlEYXRlPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAg\
						ICA8dGlmZjpYUmVzb2x1dGlvbj43MjwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzI8L3Rp\
						ZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDxl\
						eGlmOlBpeGVsWERpbWVuc2lvbj4yMDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwv\
						ZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MjY8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgog\
						ICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KNP7W6QAAAfJJREFUeAHt2b1OAkEUhmHW\
						aLwEL4OW1pqSlmvRW1ADrRQUFNBogx09VtppY4OlhSaaGBPX9ySSTEHC/5yDfpN82YX9m3n2bNjRSkVNAhKQgAQkIAEJSEACEpCA\
						BCQgAQlIQAISkIAEJCABCUhAAosLlGV5Qo4WP+Kf7QnOiAxIneztyvCLXB0FZfR7rW+WY9IuimKS6/qrXsfjTto1a6QFWoMcrNr5\
						HMd5VFA6rpIP9+ScanpKN0RZ96igdOx2g6rEqqlJDtONEda9Kyg1sGp6JGfkgYqyz+4tEtAU45OVPumB9DH90mvp/YjNGrc9Zk1i\
						j12VZLuJszqT7eIMdDSrA3O++2L7NelSTa9z9t3K5ogVlA7UXgEaxKqpRrL3N3oFpVj2gjkkHarpJd2wzfXsd2SNwVhf66RNJR2v\
						cZ6lDt0loKUGtqmd9zd1ogznsUfshlzmfMR2BegZmBYZg2NQ2Vp0IPef+chANnm9IHdUjdu0IyKQTTUGxKYa7yxdWyQgq5Jwk9Uo\
						QDYp7ZE+VWMVFKZ5A1nVhP6DmSfQGzhdckXV2K9VyOYBZO8xt6QFzCSkStKp3EA2yeyQIThZX/iSMcdcZYJ5SvSPw5i3R72SgAQk\
						IAEJSEACEpCABCQgAQlIQAISkIAEJCABCUhAAn9d4AeVfYuYHgEw2wAAAABJRU5ErkJggg==',
				pngalignment: 'center:center',
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.timerOperation,
							options: { timer_id_dropdown: timer_id, timer_operation: 'toggle' },
						},
					],
					up: [],
				},
			],
			feedbacks: [
				{
					feedbackId: 'TimerState',
					options: {
						timer_id_dropdown: timer_id,
						timer_state: 'running',
					},
					style: {
						png64:
							'iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABk2lDQ1BJQ0MgUHJvZmlsZQAAKJF9kc0rRGEUhx+DRiILlGRxF1gh\
								ISkbxkKKmgbla+HOnS81c+ftzkjKUtkqSmx8LWytsLSwVUr5KPkDZEVspOu8c2kGcep0nn7v+zv33POC78RUKlnSByk764QGA8bE\
								5JThf8BPLTXU02taGdUfDA4j8VW/x+sVRbpetupev8//jcpINGNBkSHcZyknKzwrHFzIKs2HwjWODCV8pjnu8Y3msMePuTtjoQHw\
								6Z6GlTAjwrpni5VwUsJ67sZIKqJ15bGteV1zuMAbL+BUct76nFP/YUXUHh/V9yUbGGSIEYIYhJlnjiRZWqXaomQIyXngD39Xzj9A\
								GsUijnjiJMRt0C+Kkk5R4SHpZNFGi3AH7ZLd+m1+7jyvpXeg5wWKV/NaeAOOV6DuNq81bkPVMhydKdMxc1KxpC8Wg6cDeZJJqL6A\
								8ulMrLPDm74iAKX3rvvcBP41eF913bdd133fE/MdnNrenj97sX8NY0swfA6bW9Acl2/O/LGPstw+/t9ZWeHOPwC0UXgblG4USAAA\
								ALJlWElmTU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAAANAAAA\
								cgEyAAIAAAAUAAAAgIdpAAQAAAABAAAAlAAAAAAAAABIAAAAAQAAAEgAAAABR0lNUCAyLjEwLjM2AAAyMDI0OjEwOjIwIDIxOjUx\
								OjA2AAACoAIABAAAAAEAAABIoAMABAAAAAEAAABIAAAAAO2jo4wAAAAJcEhZcwAACxMAAAsTAQCanBgAAAN0aVRYdFhNTDpjb20u\
								YWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+\
								CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAg\
								IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94\
								YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAg\
								IHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5HSU1Q\
								IDIuMTAuMzY8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMjQtMTAtMjBUMjE6NTE6MDY8L3ht\
								cDpNb2RpZnlEYXRlPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAg\
								ICA8dGlmZjpYUmVzb2x1dGlvbj43MjwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzI8L3Rp\
								ZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDxl\
								eGlmOlBpeGVsWERpbWVuc2lvbj4xNzwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwv\
								ZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MjU8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgog\
								ICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KhZI54AAAASBJREFUeAHt2TFOw0AQBdAY\
								pchR6KDMMXKEHC1H4Bh0hAqOQUkqM4OEZK1QvijiAr2VRrb3r+z103S72RgECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQL/QGBa\
								8x/meX6o7z0O3+w9vFe9TNN06azW7erS6+77sWo5zrXudTlxy/vtLV/+y7v7p4/DfAM9Vb1VfQPVtYH2VYeqEehUc6sB3dXHjCsC\
								gK7gdAQIUBAIsQ4CFARCrIMABYEQ6yBAQSDEOghQEAixDgIUBEKsgwAFgRDrIEBBIMQ6CFAQCLEOAhQEQqyDAtDa52Ln2s9p2NPP\
								weHnYr7vn6s+qsZzsX6HQYAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQOAvAl8X3BoJPbYi5wAAAABJRU5ErkJggg==',
					},
				},
			],
		}

		presets[timer_id + ' 30m CountDown'] = {
			name: 'Timer' + timer_label + ' 30m CountDown',
			category: 'Timers',
			type: 'button',
			style: {
				text: '30m CtDn\\n\\n\\n' + timer_label,
				size: 'auto',
				color: combineRgb(0, 205, 0),
				bgcolor: combineRgb(0, 102 - (index % 2) * 30, 0), // Make the background for the buttons, a slightly different shade for every second timer
				png64:
					'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',
				pngalignment: 'center:center',
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.timerOperation,
							options: {
								timer_id_dropdown: timer_id,
								timer_operation: 'set',
								timer_type: 'countdown',
								timer_duration: '00:30:00',
								timer_allows_overrun: true,
								timer_optional_operation: 'start',
								timer_time_of_day: '',
								timer_start_time: '',
								timer_end_time: '',
								timer_timeperiod: 'am',
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		}

		presets[timer_id + ' CountDown to 9:00am'] = {
			name: 'Timer' + timer_label + ' CountDown to 9:00am',
			category: 'Timers',
			type: 'button',
			style: {
				text: '9:00AM\\n\\n\\n' + timer_label,
				size: 'auto',
				color: combineRgb(0, 205, 0),
				bgcolor: combineRgb(0, 102 - (index % 2) * 30, 0), // Make the background for the buttons, a slightly different shade for every second timer
				png64:
					'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',
				pngalignment: 'center:center',
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.timerOperation,
							options: {
								timer_id_dropdown: timer_id,
								timer_operation: 'set',
								timer_type: 'countdownto',
								timer_duration: '',
								timer_allows_overrun: true,
								timer_optional_operation: 'start',
								timer_time_of_day: '09:00:00',
								timer_start_time: '',
								timer_end_time: '',
								timer_timeperiod: 'am',
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		}

		presets[timer_id + ' Elapsed'] = {
			name: 'Timer' + timer_label + ' Elapsed',
			category: 'Timers',
			type: 'button',
			style: {
				text: 'Elapsed\\n\\n\\n' + timer_label,
				size: 'auto',
				color: combineRgb(0, 205, 0),
				bgcolor: combineRgb(0, 102 - (index % 2) * 30, 0), // Make the background for the buttons, a slightly different shade for every second timer
				png64:
					'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',
				pngalignment: 'center:center',
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.timerOperation,
							options: {
								timer_id_dropdown: timer_id,
								timer_operation: 'set',
								timer_type: 'elapsed',
								timer_duration: '',
								timer_allows_overrun: true,
								timer_optional_operation: 'start',
								timer_time_of_day: '',
								timer_start_time: '00:00:00',
								timer_end_time: '',
								timer_timeperiod: 'am',
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		}

		presets[timer_id + ' Add 1 Min'] = {
			name: 'Timer' + timer_label + ' Add 1 Min',
			category: 'Timers',
			type: 'button',
			style: {
				text: '+1 Min\\n\\n\\n' + timer_label,
				size: 'auto',
				color: combineRgb(0, 205, 0),
				bgcolor: combineRgb(0, 102 - (index % 2) * 30, 0), // Make the background for the buttons, a slightly different shade for every second timer
				png64:
					'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\
						rkJggg==',
				pngalignment: 'center:center',
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.timerOperation,
							options: {
								timer_id_dropdown: timer_id,
								timer_operation: 'increment',
								timer_increment_value: '60',
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		}

		presets[timer_id + ' Subtract 1 Min'] = {
			name: 'Timer' + timer_label + ' Subtract 1 Min',
			category: 'Timers',
			type: 'button',
			style: {
				text: '-1 Min\\n\\n\\n' + timer_label,
				size: 'auto',
				color: combineRgb(0, 205, 0),
				bgcolor: combineRgb(0, 102 - (index % 2) * 30, 0), // Make the background for the buttons, a slightly different shade for every second timer
				png64:
					'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',
				pngalignment: 'center:center',
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.timerOperation,
							options: {
								timer_id_dropdown: timer_id,
								timer_operation: 'increment',
								timer_increment_value: '-60',
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		}
	})

	// Dynamically create Video Input presets for each videoInputChoice in propresenterStateStore...
	instance.propresenterStateStore.videoInputChoices.forEach((videoInput) => {
		const videoInputID: string = videoInput.id as string
		const videoInputLabel: string = videoInput.label as string
		presets[videoInputID] = {
			name: videoInputLabel + ' Video Input',
			category: 'Video Inputs',
			type: 'button',
			style: {
				text: 'Video In\\n\\n\\n' + videoInputLabel,
				size: 'auto',
				color: combineRgb(255, 230, 255),
				bgcolor: combineRgb(223, 40, 133),
				png64:
					'iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAABk2lDQ1BJQ0MgUHJvZmlsZQAAKJF9kc0rRGEUhx+DRiILlGRxF1gh\
						ISkbxkKKmgbla+HOnS81c+ftzkjKUtkqSmx8LWytsLSwVUr5KPkDZEVspOu8c2kGcep0nn7v+zv33POC78RUKlnSDik764QGA8bE\
						5JThf8BPLTXU02taGdUfDA4j8VW/x+sVRbpetupev8//jcpINGNBkSHcZyknKzwrHFzIKs2HwjWODCV8pjnu8Y3msMePuTtjoQHw\
						6Z6GlTAjwrpni5VwUsJ67sZIKqJ15bGteV1zuMAbL+BUct76nFP/YUXUHh/V9yUbGGSIEYIYhJlnjiRZWqXaomQIyXngD39Xzj9A\
						GsUijnjiJMRt0C+Kkk5R4SHpZNFGi3AH7ZLd+m1+7jyvpXeg5wWKV/NaeAOOV6DuNq81bkPVMhydKdMxc1KxpC8Wg6cDeZJJqL6A\
						8ulMrLPDm74iAKX3rvvcBP41eF913bdd133fE/MdnNrenj97sX8NY0swfA6bW9Acl2/O/LGPstw+/t9ZWeHOPwCJYXgLMfDrDgAA\
						ALJlWElmTU0AKgAAAAgABwESAAMAAAABAAEAAAEaAAUAAAABAAAAYgEbAAUAAAABAAAAagEoAAMAAAABAAIAAAExAAIAAAANAAAA\
						cgEyAAIAAAAUAAAAgIdpAAQAAAABAAAAlAAAAAAAAABIAAAAAQAAAEgAAAABR0lNUCAyLjEwLjMwAAAyMDI1OjAxOjI5IDIyOjA2\
						OjQ0AAACoAIABAAAAAEAAABIoAMABAAAAAEAAABIAAAAABUnvKoAAAAJcEhZcwAACxMAAAsTAQCanBgAAAMCaVRYdFhNTDpjb20u\
						YWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+\
						CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAg\
						IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20v\
						dGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgICAgICAg\
						ICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzI8\
						L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAg\
						ICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4x\
						PC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAg\
						PHhtcDpNb2RpZnlEYXRlPjIwMjUtMDEtMjlUMjI6MDY6NDQ8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8eG1wOkNyZWF0b3JU\
						b29sPkdJTVAgMi4xMC4zMDwveG1wOkNyZWF0b3JUb29sPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8\
						L3g6eG1wbWV0YT4KtTxdiwAAAhRJREFUeAHt2E1LAkEcx3GVhYo6hV0qCGFTPIhBQdDDQXwB0Rvo0vsIeke9gfAQ0aUg8CQr6iGj\
						U8cMdN1+KyyhoIvs7NLGd2HYh9mZ//w/O8ruZDJsCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIRBLIRmo9p3Gr\
						1bocj8eVXC5npH/P8waWZd3btv0yG1J12V6vtzIcDreLxWJntj7quRW1gzntb3S96g9+Tv2ylwej0WhLjaaAut3uarvd3lGcY9XV\
						Va6X7Tjs/liANHuqWW1hwZeoX9O9+8H9jUbDyufze5o1B7pWV7wzIZV1nA4gwziBywTccZxd13UPdbGm/an2ZcVbN/s8gpCZTCwz\
						6Ld780eaLRfCuNKMsbXfNB9husfUAQnmXCkcqeSmU4nnLJEghofu/x8lNu7EAhlGSqw7gEKoAQIoRCCkmhn034D07jNQGYfkZaw6\
						jTPoQe9CzxL4NKawoKPUvSgqlzuVN60U1AR1ouOy9hsLcoxUFQuQ/xPQoE3PTs/PtFQq9dX3h77JmvrseFCsusrkmyySxJzGsQAp\
						gaYGXTGI9KXxO0EO6tvVcUfLHe9aBnnVR+ujzv3lDuNbLEBK4FZP1/iC2Wz2hULhWw+howWzvpY+nmbrOUcAAQQQQAABBBBAAAEE\
						EEAAAQQQQAABBBBAAAEEEEAAAQQQQOAPCPwAWPqYdenI7D4AAAAASUVORK5CYII=',
				pngalignment: 'center:center',
			},
			steps: [
				{
					down: [
						{
							actionId: ActionId.videoInputsIdTrigger,
							options: {
								video_input_id_dropdown: videoInputID,
							},
						},
					],
					up: [],
				},
			],
			feedbacks: [],
		}
	})

	return presets
}
