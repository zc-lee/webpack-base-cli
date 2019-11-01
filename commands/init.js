function initConfig(params) {
    // TODO: config by page
    // console.log(params)
    const { initConfigUrl } = require('../config')
    const defaultConfigUrl = path.resolve(__dirname, '../webpack/webpack.default.js')
    const configUrl = path.resolve(process.cwd(), initConfigUrl)
    fs.copyFileSync(defaultConfigUrl, configUrl)
}

module.exports = async (config) => {
    // init config
    initConfig(config.config)
    // init pages 
    await require('../lib/pages.js').getPageUrl()
}