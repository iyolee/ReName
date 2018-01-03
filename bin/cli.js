#!/usr/bin/env node

const ReName = require('../src/index')

const isVersion = process.argv.indexOf('-v') > -1
if (isVersion) {
	console.log('version 1.0.0')
} else {
	new ReName().replaceFilename(
		process.argv[2],
		process.argv[3],
		process.argv[4]
	)
}
