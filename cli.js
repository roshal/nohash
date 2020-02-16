
import * as m__sequence_hex from './source/sequence-hex'


const array = process.argv

array.map((value) => {
	const instance = new m__sequence_hex()
	instance.update(value)
	const digest = instance.digest()
	console.log(digest)
});
