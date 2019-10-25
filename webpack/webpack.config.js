const { resolve, babel } = require('../config/config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: '',
    output: {
        path: '',
        filename: 'js/',
        // 组件懒加载时的文件名称及存储
        chunkFilename: "[id]-[name]-[hash].js"
    },
    module: {
        rules: [
            {
                test: /\.m?jsx?$/,
                use: [{
                    loader: 'babel-loader',
                    options: babel
                }]

            }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }, {
                test: /\.(jpe?g|png|gif|ttf|woff|eot|svg)$/,
                use: ["url-loader"]
            }, {
                test: /\.html$/,
                use: ["html-loader"]
            }
        ]
    },
    resolve,
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: '',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            },
        }),
        new ExtractTextPlugin({
            filename: 'css/[name].css',
            allChunks: true
        })
    ]
}