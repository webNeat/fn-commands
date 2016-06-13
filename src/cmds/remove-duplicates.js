import commander from 'commander'
import {pipe, __} from 'ramda'
import {read, write, split, trim, map, uniquify, join, log} from '../lib'

/**
 * Removes duplicate lines from a text file
 * Removes also trailing spaces on each line by the way :P
 */
commander
	.version('0.0.1')
	.arguments('<filename>')
	.action((filename) => {
		log(`removing duplicate lines from ${filename} ...`)
		pipe(
			read, 				// read the content of the file
			split("\n"), 		// split it into array of lines
			map(trim), 			// remove trailing spaces from each line
			uniquify, 			// remove duplicates
			join("\n"),			// concatenating lines into one string
			write(filename)     // writing it to the file
		)(filename)
		log(`Done`)
	})

export const run = () => commander.parse(process.argv)
