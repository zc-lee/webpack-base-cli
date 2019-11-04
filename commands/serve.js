const webpack = require("webpack")
const WebpackDevServer = require('webpack-dev-server');
const config = require('../config')

function runBuild(name) {
    let compiler = config(name, false,false)
    let server = new WebpackDevServer(webpack(compiler), compiler.devServer)
    server.listen(compiler.devServer.port, compiler.devServer.host)
}

module.exports = (params) => {
    require('../lib/pages').getEntrys(params).forEach(v => {
        runBuild(v)
    })
}