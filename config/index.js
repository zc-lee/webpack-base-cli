const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const webpack = require("webpack")
const merge = require('webpack-merge')

// vue
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const { pageUrl } = require('../lib/pages.js')
let { initConfigUrl } = require('./cli.config'),
    commonUrl = path.resolve(process.cwd(), initConfigUrl),
    url = fs.existsSync(commonUrl) ? commonUrl : './common.config'

module.exports = (key, isProd = true, isBuild = true) => {
    let pageConfigUrl = path.resolve(pageUrl, key, initConfigUrl)
    fs.existsSync(pageConfigUrl) ? url = pageConfigUrl : '';

    let { base: { baseUrl, entry, outputDir, outputFileName, templatePath, htmlMinify }, dev: { host, port, browserOpen, devtool, proxy, before }, build, babel } = require(url)

    isBuild ? devtool = build.devtool : ''
    let base = {
        entry: ["@babel/polyfill", path.resolve(pageUrl, key, entry)],
        output: {
            path: path.resolve(process.cwd(), outputDir, key),
            filename: baseUrl + 'js/' + outputFileName,
            // 组件懒加载时的文件名称及存储
            chunkFilename: "[id]-[name]-[hash].js"
        },
        resolve: {
            extensions: ['.js', '.jsx', '.json', '.vue'],
            alias: {
                '@': path.join(process.cwd(), '/'),
                'vue': 'vue/dist/vue.js'
            },
            modules: ['node_modules'],
        },
        module: {
            rules: [
                {
                    test: /\.m?jsx?$/,
                    exclude: /node_modules/,
                    use: [
                        { loader: 'cache-loader' },
                        {
                            loader: 'babel-loader',
                            options: babel
                        }]
                },
                {
                    test: /\.vue$/,
                    use: [
                        { loader: 'cache-loader' },
                        {
                            loader: "vue-loader",
                            options: {
                                loaders: {
                                    js: [
                                        {
                                            loader: 'babel-loader',
                                            options: babel
                                        }
                                    ]
                                }
                            }
                        }]
                },
                {
                    test: /\.css$/,
                    // use: [
                    //     { loader: 'style-loader' },
                    //     {
                    //         loader: 'css-loader',
                    //         options: {
                    //             modules: true
                    //         }
                    //     }
                    // ]
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: [
                            { loader: 'css-loader' }
                        ]
                    })
                },
                // {
                //     test: /\.(jpe?g|png|gif|webp|ttf|woff|eot|svg)$/,
                //     use: [
                //         {
                //             loader: 'file-loader',
                //             options: {
                //                 //name: '[path][name].[ext]',
                //                 name: '[name]-[hash:8].[ext]', //最后生成的文件名是 output.path+ outputPaht+ name，[name],[ext],[path]表示原来的文件名字，扩展名，路径
                //                 //useRelativePath:true,
                //                 outputPath: 'img/' // 后面的/不能少
                //             }
                //         }
                //     ]
                // },
                {
                    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 4096,
                                fallback: {
                                    loader: 'file-loader',
                                    options: {
                                        name: 'fonts/[name].[hash:8].[ext]'
                                    }
                                }
                            }
                        }
                    ]
                },
                {
                    test: /\.(jpe?g|png|gif|webp)$/,
                    use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 4096,
                            fallback: {
                                loader: 'file-loader',
                                options: {
                                    // name: 'static/img/[name].[hash:8].[ext]',
                                    name: 'img/[name].[hash:8].[ext]',
                                    // outputPath: 'img/' // 后面的/不能少
                                }
                            }
                        }
                    }]
                },
                {
                    test: /\.(svg)(\?.*)?$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: 'img/[name].[hash:8].[ext]'
                            }
                        }
                    ]
                },
                {
                    test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 4096,
                                fallback: {
                                    loader: 'file-loader',
                                    options: {
                                        name: 'media/[name].[hash:8].[ext]'
                                    }
                                }
                            }
                        }
                    ]
                },
                {
                    test: /\.html$/,
                    use: ["html-loader"]
                }
            ]
        },
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
            }),
            // new CopyWebpackPlugin([{
            //     from: path.resolve(__dirname, '../public'), // 不打包直接输出的文件
            //     to: './', // 打包后静态文件放置位置
            //     ignore: ['.*'] // 忽略规则。（这种写法表示将该文件夹下的所有文件都复制）
            // }]),
            new VueLoaderPlugin(),
            new ExtractTextPlugin({
                filename: baseUrl + 'css/[name]-[hash:8].css',
                allChunks: true
            }),
            new OptimizeCssAssetsPlugin({
                cssProcessor: require('cssnano'),
                cssProcessorPluginOptions: {
                    preset: ['default', { discardComments: { removeAll: true } }],
                },
                canPrint: true
            })
        ]
    },
        dev = {
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
        },
        prod = {
            // mode: 'production',
            mode: 'development',
            devtool,
            plugins: [
                new CleanWebpackPlugin()
            ]
        }
    let config = merge(base, isProd ? prod : dev)

    config.plugins.push(new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify(config.mode),
            BASE_URL: '""'
        }
    }))

    return config
}