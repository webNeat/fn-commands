/**
 * Creates a structure of directories and files based on text file
 * Text file syntax:
 * -------
 * 	src/
 *  	js/
 *  	css/
 *  	index.jade
 *  build/
 */

import {pipe, __} from 'ramda'
import {read, write, split, trim, log, join, map, uniquify} from '../lib'

const lineToNode = line => {
	let level = 0, type = 'file'
	
	while(line.charAt(level) === "\t")
		level ++
	line = line.trim()

	if(line.endsWith("/")) {
		type = 'dir'
		line = line.substring(0, line.length - 1)
	}

	return {
		type: type,
		level: level,
		name: line
	};
}

const nodeToFile = (node, index, list) => {
	if (item.level > 0) {
		let i = index;
		while (list[i].level >= item.level) 
			i --;
		list[index].name = list[i].name + '/' + list[index].name;
	}
	
	return {
		type: item.type,
		path: list[index].name
	};
}

const create = file => {
	switch(file.type) {
		case 'file':
			if (!fs.existsSync(file.path)){
				fs.closeSync(fs.openSync(file.path, 'w'));
			}
		break;
		case 'dir':
			if (!fs.existsSync(file.path)){
			    fs.mkdirSync(file.path);
			}
		break;
		default:
			console.error('Unknown file type "' + file.type + '"');
	}
}

export const run = (filename) => {
	// log(`Creating files and directories ...`)
	// pipe(
	// 	read, 				// read the content of the file
	// 	split("\n"), 		// split it into array of lines
	// 	map(trim), 			// remove trailing spaces from each line
	// 	uniquify, 			// remove duplicates
	// 	join("\n"),			// concatenating lines into one string
	// 	write(filename) 	// writing it to the file
	// )(filename)
	// log(`Done`)
	log('Not implemented Baaka !')
}