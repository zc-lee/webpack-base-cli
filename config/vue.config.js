const configPath = path.resolve(process.cwd(), 'vue.config.js')
const defineConfig = fs.existsSync(configPath) ? require(configPath) : {}
const defaultConfig = require('./default.config.js')
module.exports = Object.assign(defaultConfig, defineConfig)