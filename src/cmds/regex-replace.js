import {pipe, replace} from 'ramda'
import {log, transform} from '../lib'

export const run = (pattern, replacement, filename) => 
	transform(replace(new RegExp(pattern, 'g'), replacement), filename)