
const table = new Map()


export const algorithm = (string) => {
	return function () {
		const array = string.split('')
		const pairs = brace(array.length)
		const limit = pairs.length
		this.digest = (digest) => {
			return array.join('')
		}
		this.update = (string) => {
			decompose(limit, string).forEach((value) => {
				swap(array, ...pairs[value])
			})
		}
	}
}

export const alternate = (step, one, two) => {
	const array = []
	const limit = one.length + two.length
	const array_one = [...one]
	const array_two = [...two]
	while (array.length < limit) {
		array.push(array.length % step ? array_one.shift() : array_two.shift())
	}
	return array
}

export const brace = (limit) => {
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

export const decompose = (limit, string) => {
	const queue = recompose(limit, string)
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

export const recompose = (limit, string) => {
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

export const swap = (array, one, two) => {
	const zone = array[one]
	array[one] = array[two]
	array[two] = zone
}
