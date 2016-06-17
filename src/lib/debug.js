import {curry} from 'ramda'

// Debug
export const log = something => {
	console.log(something)
	return something
}

export const logBy = curry((fn, something) => {
    log(fn(something))
    return something
})

export default { log, logBy }