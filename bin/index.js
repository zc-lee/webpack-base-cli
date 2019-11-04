#!/usr/bin/env node
require('lzc-node')

const args = require('minimist')(process.argv.slice(2))
const commands = require('../lib/commands')('../commands')
// console.log(commands)

const command = args._[0]

if (!command) {
    echo.info(`Please input commands : ${Object.keys(commands)}`)
    process.exit(0)
}

if (!commands[command] && command) {
    echo.err(`command ${command} does not exist.`)
    process.exit(1)
}

delete args._
// process.env._args = JSON.stringify(args)
require(commands[command])(args)