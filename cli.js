
require = require('esm')(module)

const m__sequence = require('./source/sequence')


const array = process.argv

array.slice(2).forEach((value) => {
	const instance = new m__sequence.hex()
	instance.update(value)
	const digest = instance.digest()
	console.log(digest)
})
