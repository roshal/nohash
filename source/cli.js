
import * as m__sequence from './sequence'


module.exports = (array) => {
	array.forEach((value) => {
		const instance = new m__sequence.hex()
		instance.update(value)
		const digest = instance.digest()
		console.log(digest)
	})
}
