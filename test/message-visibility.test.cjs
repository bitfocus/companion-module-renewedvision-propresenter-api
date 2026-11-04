const assert = require('node:assert/strict')
const { test } = require('node:test')
const Module = require('node:module')
const vm = require('node:vm')

// Capture the real module class without starting Companion IPC or opening MIDI devices.
const originalLoad = Module._load
let ModuleInstance
Module._load = function (id, ...args) {
	if (id === '@companion-module/base') {
		return {
			...originalLoad.call(this, id, ...args),
			InstanceBase: class {
				log() {}
			},
			runEntrypoint: (constructor) => {
				ModuleInstance = constructor
			},
		}
	}
	if (id === '@julusian/midi') return { Input: class {} }
	return originalLoad.call(this, id, ...args)
}
try {
	require('../dist/main.js')
} finally {
	Module._load = originalLoad
}

function fields() {
	const instance = new ModuleInstance({})
	instance.initActions = () => {}
	instance.messagesUpdated({
		data: [
			{ id: { uuid: 'message-a', name: 'First' }, tokens: [{ name: 'Person', text: { text: 'Alice' } }] },
			{ id: { uuid: 'message-b', name: 'Second' }, tokens: [{ name: 'Person', text: { text: 'Bob' } }] },
		],
	})
	return instance.propresenterStateStore.messageTokenInputs
}

test('message token visibility survives host serialization and isolates the selected message', () => {
	for (const field of fields()) {
		assert.equal(typeof field.isVisibleData, 'object')
		const data = JSON.parse(JSON.stringify(field.isVisibleData))
		// Host callbacks run outside the module scope, with JSON-serialized data.
		const callback = vm.runInNewContext(`(${field.isVisible.toString()})`)
		for (const selected of ['message-a', 'message-b', '']) {
			for (const operation of ['show', 'hide']) {
				assert.equal(
					callback({ message_id_dropdown: selected, message_operation: operation }, data),
					selected === data.messageUUID && operation === 'show',
				)
			}
		}
	}
})

test('message token option IDs and variable support are preserved', () => {
	const inputs = fields()
	assert.deepEqual(
		inputs.map((field) => field.id),
		['message-a__txt__Person', 'message-b__txt__Person'],
	)
	assert.ok(inputs.every((field) => field.type === 'textinput' && field.useVariables === true))
})
