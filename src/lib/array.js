import {curry, pipe, prepend, tail, head} from 'ramda'

// Array operations
export const size = elements => elements.length
export const join = curry((glue, elements) => elements.join(glue))
export const map = curry((operation, elements) => elements.map(operation))
export const mapTail = curry((operation, elements) => prepend(head(elements), map(operation, tail(elements))))
export const filter = curry((condition, elements) => elements.filter(condition))
export const reduce = curry((operation, initial, elements) => elements.reduce(operation, initial))
export const contains = curry((item, elements) => elements.indexOf(item) != -1)
export const append = curry((item, elements) => elements.concat(item))

export const occurencesOf = curry((item, elements) => pipe(filter(equal(item)), size) (elements))
export const occurencesIn = curry((elements, item) => pipe(filter(equal(item)), size) (elements))

export const uniquify = reduce((elements, item) => (contains(item, elements)) ? elements : append(item, elements), [])

export default { size, join, map, filter, reduce, contains, append, occurencesOf, occurencesIn, uniquify }