#!/usr/bin/env node

const ResetExt = require('../src/index')

const isVersion = process.argv.indexOf('-v') > -1
if (isVersion) {
  console.log('version  @1.0.1')
} else {
  new ResetExt().replaceFilename(
    process.argv[2],
    process.argv[3],
    process.argv[4]
  )
}
