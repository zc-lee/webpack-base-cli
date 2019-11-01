const { initConfigUrl } = require('../config/index')
let url = path.resolve(process.cwd(), initConfigUrl)
console.log('webpack.config')
module.exports = require(fs.existsSync(url) ? url : `./webpack.default`)