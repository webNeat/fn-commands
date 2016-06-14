import {pipe, split, join, difference, append} from 'ramda'
import {log, lines} from '../lib'

export const run = (file1, file2) => {
	let lines1 = lines(file1),
		lines2 = lines(file2),
		onlyInFile1 = difference(lines1, lines2),
		onlyInFile2 = difference(lines2, lines1)
	
	log(
		file1 
		+ "\n-------\n"
		+ join("\n", onlyInFile1)
		+ "\n=======\n"
		+ file2 
		+ "\n-------\n"
		+ join("\n", onlyInFile2)
	)
}