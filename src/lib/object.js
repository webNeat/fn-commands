import {curry, pipe} from 'ramda'

// Object operations
export const getAttr = curry((name, obj) => obj[name])
export const setAttr = curry((name, obj, value) => obj[name] = value)

export default { getAttr, setAttr }