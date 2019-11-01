const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin')

const { babel, base: { entry, outputPath, outputFileName,templatePath, htmlMinify } } = require('./webpack.config')

module.exports = {
    entry,
    output: {
        path: outputPath,
        filename: 'js/' + outputFileName,
        // 组件懒加载时的文件名称及存储
        chunkFilename: "[id]-[name]-[hash].js"
    },
    module: {
        rules: [
            // {
            //     test: /\.m?jsx?$/,
            //     use: [{
            //         loader: 'babel-loader',
            //         options: babel
            //     }]
            // }, 
            // {
            //     test: /\.vue$/,
            //     use: [{
            //         loader: "vue-loader",
            //         options: {
            //             loaders: {
            //                 js: [
            //                     {
            //                         loader: 'babel-loader',
            //                         options: babel
            //                     }
            //                 ]
            //             }
            //         }
            //     }]
            // }, {
            //     test: /\.css$/,
            //     use: ExtractTextPlugin.extract({
            //         fallback: "style-loader",
            //         use: "css-loader"
            //     })
            // }, {
            //     test: /\.(jpe?g|png|gif|webp|ttf|woff|eot|svg)$/,
            //     use: ["url-loader"]
            // },
            // {
            //     test: /\.html$/,
            //     use: ["html-loader"]
            // }
            // {
            //     loader: 'url-loader',
            //     options: {
            //         limit: 4096,
            //         fallback: {
            //             loader: 'file-loader',
            //             options: {
            //                 name: 'static/img/[name].[hash:8].[ext]'
            //             }
            //         }
            //     }
            //     // loader: 'file-loader',
            //     // options: {
            //     //     limit: 4096,
            //     //     //name: '[path][name].[ext]',
            //     //     name: '[name].[ext]', //最后生成的文件名是 output.path+ outputPaht+ name，[name],[ext],[path]表示原来的文件名字，扩展名，路径
            //     //     //useRelativePath:true,
            //     //     outputPath: 'img/' // 后面的/不能少
            //     // }
            // }
            // {
            //     test: /\.(jpg|jpeg|png|gif)$/,
            //     use: [
            //         {
            //             loader: 'file-loader',
            //             options: {
            //                 //name: '[path][name].[ext]',
            //                 name: '[name].[ext]', //最后生成的文件名是 output.path+ outputPaht+ name，[name],[ext],[path]表示原来的文件名字，扩展名，路径
            //                 //useRelativePath:true,
            //                 outputPath: 'img/' // 后面的/不能少
            //             }
            //         }
            //     ]
            // },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.vue'],
        alias: {
            '@': path.join(process.cwd(), '/'),
            'vue': 'vue/dist/vue.js'
        },
        modules: ['node_modules'],
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     // html5文件中<title>部分
        //     //     title: 'test',
        //     // 默认是index.html，服务器中设置的首页是index.html，如果这里改成其它名字，那么devServer.index改为和它一样
        //     // filename: 'index.html',
        //     // 如果觉得插件默认生成的hmtl5文件不合要求，可以指定一个模板，模板文件如果不存在，会报错，默认是在项目根目录下找模板文件，才模板为样板，将打包的js文件注入到body结尾处
        //     // template: templatePath,
        //     // true|body|head|false，四种值，默认为true,true和body相同,是将js注入到body结束标签前,head将打包的js文件放在head结束前,false是不注入，这时得要手工在html中加js
        //     // inject: 'body',
        //     minify: htmlMinify,
        // }),
        // new CopyWebpackPlugin([{
        //     from: path.resolve(__dirname, '../public'), // 不打包直接输出的文件
        //     to: './', // 打包后静态文件放置位置
        //     ignore: ['.*'] // 忽略规则。（这种写法表示将该文件夹下的所有文件都复制）
        // }]),
        // new ExtractTextPlugin({
        //     filename: 'css/[name].css',
        //     allChunks: true
        // })
    ]
}