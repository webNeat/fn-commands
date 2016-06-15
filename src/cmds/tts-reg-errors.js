import {env} from 'jsdom'
import jquery from 'jquery'
import {log} from '../lib/debug'
import {read} from '../lib/io'
import {join, split, toLower, last, pipe} from 'ramda'

export const run = (resultFile) => {
	env(resultFile, (err, window) => {
		const $ = require('jquery')(window)
		let errors = []
    	$('case').each(() => {
    		let $error = $(this).children('error')
    		if($error.length > 0) {
    			let path = $(this).children('path').html()
    			let extension = pipe(split('.'), last, toLower)(path)
    			if(extension == 'edi')
	    			errors.push(path)
    		}
    	})
    	pipe(join("\n"), log)(errors)
	})
}