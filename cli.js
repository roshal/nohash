#!/usr/bin/env node

require = require('esm')(module)

const cli = require('./source/cli')

const array = process.argv.slice(2)

cli(array)
