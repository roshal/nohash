
const m__sequence_hex = require('./source/sequence-hex')


const array = process.argv

array.slice(2).forEach((value) => {
	const instance = new m__sequence_hex()
	instance.update(value)
	const digest = instance.digest()
	console.log(digest)
});
