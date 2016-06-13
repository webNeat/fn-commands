import {env} from 'jsdom'
import jquery from 'jquery'
import {log} from '../lib/debug'
import {read} from '../lib/io'

export const run = (resultFile) => {
	env(resultFile, function (errors, window) {
		const $ = require('jquery')(window)
    	log($('case').length)
	})
}