/**
 * Removes duplicated lines from a text file
 * Removes also trailing spaces on each line by the way :P
 */

import {pipe, __} from 'ramda'
import {read, write, split, trim, log, join, map, uniquify} from '../lib'

export const run = filename => {
	pipe(
		read, 				// read the content of the file
		split("\n"), 		// split it into array of lines
		map(trim), 			// remove trailing spaces from each line
		uniquify, 			// remove duplicates
		join("\n"),			// concatenating lines into one string
		write(filename) 	// writing it to the file
	)(filename)
}