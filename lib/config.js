const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge')

const { pageUrl, getEntry, getOutput } = require('../lib/pages.js')
const { base: { templatePath, htmlMinify } } = require('../webpack/webpack.config')

module.exports = (key, isProd = true) => {
    let config = require(`../webpack/webpack.${isProd ? 'prod' : 'dev'}`)
    process.env.NODE_ENV = config.mode
    return merge(config, {
        entry: getEntry(key),
        output: getOutput(key),
        plugins: [
            new HtmlWebpackPlugin({
                // html5文件中<title>部分
                // title: 'test',
                // 默认是index.html，服务器中设置的首页是index.html，如果这里改成其它名字，那么devServer.index改为和它一样
                filename: 'index.html',
                // 如果觉得插件默认生成的hmtl5文件不合要求，可以指定一个模板，模板文件如果不存在，会报错，默认是在项目根目录下找模板文件，才模板为样板，将打包的js文件注入到body结尾处
                template: path.resolve(pageUrl, key, templatePath),
                // true|body|head|false，四种值，默认为true,true和body相同,是将js注入到body结束标签前,head将打包的js文件放在head结束前,false是不注入，这时得要手工在html中加js
                // inject: 'body',
                // minify: htmlMinify,
            })
        ]
    })
}