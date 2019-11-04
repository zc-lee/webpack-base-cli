function initConfig(page = '') {
    const { pagesDir } = require('../config/common.config')
    page = page === true || page === '' ? page = '' : pagesDir + '/' + page
    const { initConfigUrl } = require('../config/cli.config')
    const defaultConfigUrl = path.resolve(__dirname, page ? '../config/page.config.js' : '../config/common.config.js')
    const configUrl = path.resolve(process.cwd(), String(page), initConfigUrl)
    fs.copyFileSync(defaultConfigUrl, configUrl)
}

module.exports = (config) => {
    // init config
    initConfig(config.config)
    // init pages 
    require('../lib/pages.js').getPageUrl()
}