import {curry, pipe, map, split, trim} from 'ramda'
import fs from 'fs'

// File Read/Write
export const read = filename => fs.readFileSync(filename, 'utf-8')
export const write = curry((filename, content) => fs.writeFileSync(filename, content))
export const transform = curry((operation, filename) => pipe(read, operation, write(filename))(filename))
export const lines = pipe(read, split("\n"), map(trim))

export default { read, write, transform, lines }
