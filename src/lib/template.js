import {curry, pipe, reduce, toPairs, replace} from 'ramda'
import {read, write} from './io'
import {TEMPLATES_PATH} from './constants'
import path from 'path'

const bindOne = (text, data) => replace(new RegExp(`{{${data[0]}}}`, 'g'), data[1], text)

const bind = curry((data, text) => reduce(bindOne, text, toPairs(data)))

const prependPath = filename => path.join(TEMPLATES_PATH, filename)

export const render = curry((template, data, output) => pipe(read, bind(data), write(output))(prependPath(template)))

export default { render }
