
const table = new Map()


exports.algorithm = (string) => {
	return function () {
		const array = string.split('')
		const pairs = exports.brace(array.length)
		const limit = pairs.length
		this.digest = (digest) => {
			return array.join('')
		}
		this.update = (string) => {
			exports.decompose(limit, string).forEach((value) => {
				exports.swap(array, ...pairs[value])
			})
		}
	}
}

exports.alternate = (step, one, two) => {
	const array = []
	const limit = one.length + two.length
	const array_one = [...one]
	const array_two = [...two]
	while (array.length < limit) {
		array.push(array.length % step ? array_one.shift() : array_two.shift())
	}
	return array
}

exports.brace = (limit) => {
	if (table.has(limit)) {
		return table.get(limit)
	}
	const array = []
	let one = limit
	while (one) {
		let two = --one
		while (two) {
			array.push([one, --two])
		}
	}
	table.set(limit, array)
	return array
}

exports.decompose = (limit, string) => {
	const queue = exports.recompose(limit, string)
	const array = []
	let value = 0
	queue.forEach((byte) => {
		value += byte
		while (limit < value) {
			array.push(value % limit)
			value = value / limit ^ 0
		}
	})
	if (value) {
		array.push(value)
	}
	return array
}

exports.recompose = (limit, string) => {
	const buffer = Buffer.from(string)
	limit = limit >> 8
	if (limit) {
		limit += 1
		return buffer.reduce((accumulator, value, index) => {
			if (index % limit) {
				accumulator[index / limit ^ 0] += value
			} else {
				accumulator.push(value)
			}
			return accumulator
		}, [])
	}
	return buffer
}

exports.swap = (array, one, two) => {
	const zone = array[one]
	array[one] = array[two]
	array[two] = zone
}
