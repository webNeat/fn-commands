import arr from './lib/array'
import debug from './lib/debug'
import io from './lib/io'
import math from './lib/math'
import obj from './lib/object'
import str from './lib/string'
import template from './lib/template'

import {mergeAll} from 'ramda'

// Math
export const and = math.and
export const or = math.or
export const not = math.not
export const equal = math.equal
export const different = math.different
export const lessThen = math.lessThen
export const greaterThen = math.greaterThen

// String
export const snakeToCamelCase = str.snakeToCamelCase

// Array
export const size = arr.size
export const join = arr.join
export const map = arr.map
export const filter = arr.filter
export const reduce = arr.reduce
export const contains = arr.contains
export const append = arr.append
export const occurencesOf = arr.occurencesOf
export const occurencesIn = arr.occurencesIn
export const uniquify = arr.uniquify

// Object
export const getAttr = obj.getAttr
export const setAttr = obj.setAttr

// IO
export const read = io.read
export const write = io.write
export const chmod = io.chmod
export const transform = io.transform
export const lines = io.lines

// Debug
export const log = debug.log

// Template
export const render = template.render

const lib = mergeAll([
	arr,
	debug,
	io,
	math,
	obj,
	str,
	template
])

export default lib
