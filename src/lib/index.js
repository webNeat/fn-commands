import arr from './array'
import debug from './debug'
import io from './io'
import math from './math'
import obj from './object'
import str from './string'
import template from './template'
import args from './args'

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
export const indexOf = str.indexOf
export const lastIndexOf = str.lastIndexOf
export const substring = str.substring
export const after = str.after
export const afterLast = str.afterLast
export const before = str.before
export const beforeLast = str.beforeLast
export const between = str.between
export const betweenFirst = str.betweenFirst
export const betweenLast = str.betweenLast
export const occurences = str.occurences
export const startsWith = str.startsWith
export const endsWith = str.endsWith

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
export const logBy = debug.logBy

// Template
export const render = template.render

// Arguments
export const parse = args.parse

const lib = mergeAll([
    arr,
    debug,
    io,
    math,
    obj,
    str,
    template,
    args
])
export default lib
