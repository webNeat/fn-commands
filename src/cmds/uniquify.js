/**
 * Removes duplicated lines from a text file
 * Removes also trailing spaces on each line by the way :P
 */

import commander from 'commander'
import {pipe, __} from 'ramda'
import {all} from '../lib'
import all from '../lib'

commander
	.version('0.0.1')
	.arguments('<filename>')
	.action((filename) => {
		console.log(`uniquifying ${filename} ...`)
		pipe(
			read, 				// read the content of the file
			split("\n"), 		// split it into array of lines
			map(trim), 			// remove trailing spaces from each line
			uniquify, 			// remove duplicates
			join("\n"),			// concatenating lines into one string
			write(filename, __) // writing it to the file
		)(filename)
		console.log(`Done`)
	})

export const run = () => commander.parse(process.argv)
