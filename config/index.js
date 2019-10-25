const webpackConfig = require('../webpack/webpack.base.config')
const webpackDev = require('../webpack/webpack.dev.config')
const webpackProd = require('../webpack/webpack.prod.config')
const { getEntry } = require('../lib/pages')
const { setResolve, setPlugins, setDevServer, setTest } = require('../lib/webpack')
module.exports = async (config = {}) => {
    // return l_deepAssign(webpackConfig,webpackDev)
    let params = Object.assign(webpackConfig, true ? webpackDev : webpackProd)
    params.entry = await getEntry(config)
    params = setResolve(params)
    params = setPlugins(params)
    params = setDevServer(params)
    params = setTest(params)
    return params
}