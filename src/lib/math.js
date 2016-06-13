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

export default { and, or, not, equal, different, lessThen, greaterThen}
