const merge = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = require('./webpack.base')
const { build: { devtool } } = require('./webpack.config')
module.exports = merge(config, {
    mode: 'production',
    devtool,
    plugins:[
        new CleanWebpackPlugin()
    ]
})