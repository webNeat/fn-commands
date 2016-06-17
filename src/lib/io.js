import {curry, pipe, map, split, trim} from 'ramda'
import fs from 'fs'
import {dirname} from 'path'
import {sync as mkdir} from 'mkdirp'

// File Read/Write
export const read = filename => fs.readFileSync(filename, 'utf-8')
export const write = curry((filename, content) => {
    const dir = dirname(filename)
    if (! fs.statSync(dir) || ! fs.statSync(dir).isDirectory())
        mkdir(dir)
    fs.writeFileSync(filename, content)
})
export const chmod = curry((mode, filename) => fs.chmodSync(filename, mode))
export const lines = pipe(read, split("\n"), map(trim))
export const transform = curry((operation, filename) => pipe(read, operation, write(filename))(filename))

export default { read, write, chmod, transform, lines }
