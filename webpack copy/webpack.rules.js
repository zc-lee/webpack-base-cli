module.exports = [{
    test: /\.(png|jpe?g|gif|webp)$/,
    use: [
        {
            loader: 'url-loader',
            options: {
                limit: 4096,
                fallback: {
                    loader: 'file-loader',
                    options: {
                        name: 'static/img/[name].[hash:8].[ext]'
                    }
                }
            }
            // loader: 'file-loader',
            // options: {
            //     limit: 4096,
            //     //name: '[path][name].[ext]',
            //     name: '[name].[ext]', //最后生成的文件名是 output.path+ outputPaht+ name，[name],[ext],[path]表示原来的文件名字，扩展名，路径
            //     //useRelativePath:true,
            //     outputPath: 'img/' // 后面的/不能少
            // }
        }
    ]
},
// {
//     // test: /\.m?jsx?$/,
//     test: /\.js$/,
//     exclude: /(node_modules|bower_components)/,
//     use: [
//         {
//             loader: 'babel-loader',
//             options: {
//                 //使用env预设来处理es6语法的js文件
//                 presets: ['@babel/preset-env'],
//             }
//         }
//     ]
// }
]