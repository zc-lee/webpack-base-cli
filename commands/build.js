
const webpack = require("webpack")
const config = require('../config')

function runBuild(name) {
    let command = `build ${name}`
    let compiler = config(name)
    let loading = require('lzc-doing')({ text: command }).start(`${command} start...`)
    webpack(compiler, (err, stats) => {
        if (err) {
            loading.fail(`${command} fail!!!`)
            throw err
        }
        loading.success(`${command} success!!!`)
    })
}

module.exports = async (params) => {
    require('../lib/pages').getEntrys(params).forEach(v => {
        runBuild(v)
    })
}