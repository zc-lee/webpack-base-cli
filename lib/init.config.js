const fileUrl = path.resolve(__dirname, '../config/default.config.js')
const configUrl = path.resolve(process.cwd(), './vue.config.js')
module.exports = (config) => {
    fs.copyFileSync(fileUrl,configUrl)
}