
const p__common = require('./common')


const string_six = 'fedcba'
const string_ten = '9876543210'

const pairs_six = p__common.brace(string_six.length)
const pairs_ten = p__common.brace(string_ten.length)

const limit_six = pairs_six.length
const limit_ten = pairs_ten.length

const limit = limit_ten + limit_six


module.exports = function () {
	const array_six = string_six.split('')
	const array_ten = string_ten.split('')
	this.digest = (digest) => {
		return [...array_six, ...array_ten].join('')
	}
	this.update = (string) => {
		p__common.decompose(limit, string).forEach((value) => {
			if (value < limit_six) {
				p__common.swap(array_six, ...pairs_six[value % limit_six])
			} else {
				value -= limit_six
				p__common.swap(array_ten, ...pairs_ten[value % limit_ten])
			}
		})
	}
}
