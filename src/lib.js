import {curry, pipe} from 'ramda'

// Logic operators
export const and = curry((a, b) => a && b)
export const or = curry((a, b) => a || b)
export const not = a => !a

// Comparaison operators
export const equal = curry((a, b) => a == b)
export const different = curry((a, b) => a != b)
export const lessThen = curry((a, b) => b < a)
export const greaterThen = curry((a, b) => b > a)

// String operations
export const split = curry((separator, text) => text.split(separator))
export const match = curry((pattern, text) => text.match(pattern))
export const trim = text => text.trim()

// Array operations
export const size = elements => elements.length
export const join = curry((glue, elements) => elements.join(glue))
export const map = curry((operation, elements) => elements.map(operation))
export const filter = curry((condition, elements) => elements.filter(condition))
export const reduce = curry((operation, initial, elements) => elements.reduce(operation, initial))
export const contains = curry((item, elements) => elements.indexOf(item) != -1)
export const append = curry((item, elements) => elements.concat(item))

export const occurencesOf = curry((item, elements) => pipe(filter(equal(item)), size) (elements))
export const occurencesIn = curry((elements, item) => pipe(filter(equal(item)), size) (elements))

export const uniquify = reduce((elements, item) => (contains(item, elements)) ? elements : append(item, elements), [])

// Object operations
export const attr = curry((name, obj) => obj[name])

// File Read/Write
import fs from 'fs'
export const read = filename => fs.readFileSync(filename, 'utf-8')
export const write = (filename, content) => fs.writeFileSync(filename, content)

// Debug
export const log = something => {
	console.log(something)
	return something
}

export const all = {
	and,
	or,
	not,
	equal,
	different,
	lessThen,
	greaterThen,
	split,
	match,
	trim,
	size,
	join,
	map,
	filter,
	reduce,
	contains,
	append,
	occurencesOf,
	occurencesIn,
	uniquify,
	attr,
	read,
	write,
	log
}