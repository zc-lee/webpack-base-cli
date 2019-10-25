const { pages, outputDir } = require('../config/vue.config')
const { getPages, getPageUrl } = require('./pages')
const pageUrl = getPageUrl()

let setResolve = (params) => {
    return params
}

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

let setPlugins = (params) => {
    let plugins = [],
        arr = Object.keys(pages ? pages : params.entry)
    if (pages) {
        for (let [key, val] of Object.entries(pages)) {
            plugins.push(new HtmlWebpackPlugin({
                title: val.title
            }))
        }
    } else {
        for (let key of arr) {
            plugins.push(new HtmlWebpackPlugin({
                title: key,
                // filename: `index.html`,
                filename: `${key}.html`,
                template: path.resolve(pageUrl, key, 'index.html'),
                inject: 'body'
            }))
        }
    }
    params.plugins.push(...plugins)
    return params
}

let setDevServer = (params) => {
    return params
}

const { test } = require('../config/vue.config')

let setTest = (params) => {
    // 速度测量
    if (test.speed === true) {
        const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
        const smp = new SpeedMeasurePlugin();
        params = smp.wrap(params)
    }
    // 体积分析
    if (test.size === true) {
        const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
        params.plugins.push(new BundleAnalyzerPlugin())
    }
    return params
}

Object.assign(module.exports, {
    setResolve,
    setPlugins,
    setDevServer,
    setTest
})