
const m__nohash = require('nohash')


const array = process.argv

array.slice(2).forEach((value) => {
	const instance = new m__nohash.sequence.hex()
	instance.update(value)
	const digest = instance.digest()
	console.log(digest)
})
