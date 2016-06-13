import {curry, pipe} from 'ramda'
import fs from 'fs'

// File Read/Write
export const read = filename => fs.readFileSync(filename, 'utf-8')
export const write = curry((filename, content) => fs.writeFileSync(filename, content))

export default { read, write }
