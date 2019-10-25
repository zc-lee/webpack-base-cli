
const webpack = require("webpack")
module.exports = async (params) => {
    let command = params._[0]
    const config = await require('../config')(params)
    // return;
    let loading = require('lzc-doing')({ text: command }).start(`${command} start...`)
    webpack(config, (err, stats) => {
        if (err) {
            loading.fail(`${command} fail!!!`)
            throw err
        }
        loading.success(`${command} success!!!`)
    })
}