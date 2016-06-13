import arr from './lib/array'
import debug from './lib/debug'
import io from './lib/io'
import math from './lib/math'
import obj from './lib/object'
import str from './lib/string'
import template from './lib/template'

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

// Debug
export const log = debug.log

// Template
export const render = template.render