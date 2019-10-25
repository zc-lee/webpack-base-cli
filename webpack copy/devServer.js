module.exports = {
    //网站的根目录为 根目录/dist，如果配置不对，会报Cannot GET /错误
    contentBase: 'dist',
    //端口
    port: 8080,
    // 与HtmlWebpackPlugin中配置filename一样
    index: 'index.html',
    //如果指定的host，这样同局域网的电脑或手机可以访问该网站,host的值在dos下使用ipconfig获取 
    // host: '192.168.5.55',
    // host:'127.0.0.1',
    // host:'localhost',
    // 自动打开浏览器
    open: true,
    // 默认为true, 意思是，在打包时会注入一段代码到最后的js文件中，用来监视页面的改动而自动刷新页面,当为false时，网页自动刷新的模式是iframe，也就是将模板页放在一个frame中
    inline: true,
    hot: false,
    //压缩
    // compress: true
}