module.exports = async (config) => {
    await require('../lib/init.config.js')()
    await require('../lib/pages.js').getPageUrl()
}