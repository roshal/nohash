
import * as m__common from './common'

const string_six = 'abcdef'
const string_ten = '0123456789'

const pairs_six = m__common.build(string_six.length)
const pairs_ten = m__common.build(string_ten.length)

const limit_six = pairs_six.length
const limit_ten = pairs_ten.length

const limit = limit_six + limit_ten

export default function () {
	const array_six = string_six.split('')
	const array_ten = string_ten.split('')
	this.digest = (digest) => {
		return m__common.alternate(3, array_ten, array_six).join('')
	}
	this.update = (string) => {
		m__common.decompose(limit, string).forEach((value) => {
			if (value < limit_six) {
				m__common.swap(array_six, ...pairs_six[value % limit_six])
			} else {
				value -= limit_six
				m__common.swap(array_ten, ...pairs_ten[value % limit_ten])
			}
		})
	}
}
