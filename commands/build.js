
const webpack = require("webpack")
const config = require('../webpack/webpack.prod')

function run() {
    webpack(config, (err, stats) => {
        if (err) {
            loading.fail(`${command} fail!!!`)
            throw err
        }
        loading.success(`${command} success!!!`)
    })
}

module.exports = async (params) => {
    let loading = require('lzc-doing')({ text: command }).start(`${command} start...`)
    run()
}