

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