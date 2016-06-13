import path from 'path'
import {replace, split, pipe, map, join} from 'ramda'
import {log} from '../lib/debug'
import {render} from '../lib/template'
import {snakeToCamelCase} from '../lib/string'
import {BIN_PATH, SRC_CMDS_PATH} from '../lib/constants'

const syntaxToArgs = pipe(replace(/[<>\[\]]/g, ''), split(' '), map(snakeToCamelCase), join(', '))

export const run = (cmdName, syntax) => {
	render('cmds/cmd', {cmdName, camelCmdName: snakeToCamelCase(cmdName), syntax}, path.join(BIN_PATH, cmdName))
	render('cmds/cmd.bat', {cmdName}, path.join(BIN_PATH, `${cmdName}.bat`))
	render('cmds/cmd.js', {cmdName, args: syntaxToArgs(syntax)}, path.join(SRC_CMDS_PATH, `${cmdName}.js`))
}