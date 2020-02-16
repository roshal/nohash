
import * as m__sequence from './sequence'


const array = process.argv

array.slice(2).forEach((value) => {
	const instance = new m__sequence.hex()
	instance.update(value)
	const digest = instance.digest()
	console.log(digest)
})
