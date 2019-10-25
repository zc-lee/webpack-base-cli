const rules = require('./webpack.rules')
const plugins = require('./webpack.plugins')
const devServer = require('./devServer');
const { getOutput } = require('../lib/pages')
module.exports = {
    // entry: ['babel-polyfill','./src'],
    output: getOutput(),
    resolve: {
        alias: {
            // '@/': path.join(process.cwd(), '/'),
            // '@src': path.join(process.cwd(), '/src')
        },
        modules: ['node_modules'],
        extensions: ['.js', '.jsx', '.json', '.vue']
    },
    module: {
        rules
    },
    plugins,
    devServer
}