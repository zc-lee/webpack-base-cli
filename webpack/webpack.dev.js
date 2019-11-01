const merge = require('webpack-merge')
const config = require('./webpack.base')
const { pageUrl } = require('../lib/pages.js')
const { dev: { host, port, browserOpen, devtool, proxy, before } } = require('./webpack.config')
module.exports = merge(config, {
    mode: 'development',
    devtool,
    devServer: {
        //网站的根目录为 根目录/dist，如果配置不对，会报Cannot GET /错误
        contentBase: pageUrl,
        //如果指定的host，这样同局域网的电脑或手机可以访问该网站,host的值在dos下使用ipconfig获取 
        host,
        //端口
        port,
        // 与HtmlWebpackPlugin中配置filename一样
        // index: 'index.html',
        // watchContentBase: false,
        // hot: false,
        // 默认为true, 意思是，在打包时会注入一段代码到最后的js文件中，用来监视页面的改动而自动刷新页面,当为false时，网页自动刷新的模式是iframe，也就是将模板页放在一个frame中
        // inline: false,
        // 自动打开浏览器
        open: browserOpen,
        before,
        proxy,
        // historyApiFallback: true,
        //压缩
        // compress: true
    }
})