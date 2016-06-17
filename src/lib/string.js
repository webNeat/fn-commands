import {curry, pipe, toLower, split, map, join, toUpper, head, tail, length, equals} from 'ramda'
import {mapTail} from './array'

export const capitalize = word => toUpper(head(word)) + tail(word)

export const snakeToCamelCase = pipe(toLower, split('-'), mapTail(capitalize), join(''))

export const indexOf = curry((token, txt) => txt.indexOf(token))

export const lastIndexOf = curry((token, txt) => txt.lastIndexOf(token))

export const substring = curry((begin, end, txt) => txt.substring(begin, end))

export const after = curry((token, txt) => 
    substring(indexOf(token, txt) + length(token), undefined, txt))

export const afterLast = curry((token, txt) => 
    substring(lastIndexOf(token, txt) + length(token), undefined, txt))

export const before = curry((token, txt) => 
    substring(0, indexOf(token, txt), txt))

export const beforeLast = curry((token, txt) => 
    substring(0, lastIndexOf(token, txt), txt))

export const between = curry((start, end) => pipe(after(start), beforeLast(end)))

export const betweenFirst = curry((start, end) => pipe(after(start), before(end)))

export const betweenLast = curry((start, end) => pipe(beforeLast(end), afterLast(start)))

export const occurences = curry((token, txt) => pipe(split(token), length)(txt) - 1)

export const startsWith = curry((token, txt) => token == substring(0, length(token), txt))
export const endsWith = curry((token, txt) => token == substring(length(txt) - length(token), undefined, txt))

export default { 
    snakeToCamelCase, 
    indexOf,
    lastIndexOf,
    substring,
    after,
    afterLast,
    before,
    beforeLast,
    between,
    betweenFirst,
    betweenLast,
    occurences,
    startsWith,
    endsWith
}
