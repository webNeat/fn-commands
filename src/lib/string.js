import {curry, pipe, toLower, split, map, join, toUpper, head, tail} from 'ramda'
import {mapTail} from './array'

export const capitalize = word => toUpper(head(word)) + tail(word)

export const snakeToCamelCase = pipe(toLower, split('-'), mapTail(capitalize), join(''))

export default { snakeToCamelCase }
