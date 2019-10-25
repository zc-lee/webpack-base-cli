const dir = require(path.resolve(__dirname, '../config/vue.config.js')).pageUrl
const pageUrl = path.resolve(process.cwd(), dir)
const { pages, outputDir } = require('../config/vue.config')
const inquirer = require('inquirer');

let getPageUrl = (config) => {
    if (!fs.existsSync(pageUrl))
        fs.mkdirSync(pageUrl)
    return pageUrl
}

let getPages = () => {
    return fs.readdirSync(pageUrl)
}

let getEntry = async (params) => {
    let entrys = {}
    if (pages)
        for (let [key, val] of Object.entries(pages)) {
            entrys[pages ? key : val] = pages ? val.entry : path.resolve(pageUrl, val)
        }
    else {
        let arr = await getPages().filter(v => params[v] === true)
        if (arr.length === 0) {
            await inquirer.prompt([{
                type: 'confirm',
                name: 'res',
                message: `build/serve all page?`,
                default: false
            }]).then(async (e) => {
                if (e.res)
                    arr = await getPages()
                else
                    throwError(`请输入页面名称！  例：build/serve --[name]`)
            })
        }
        for (let val of arr) {
            entrys[val] = path.resolve(pageUrl, val, 'index.js')
        }
    }
    return entrys
    // return path.resolve(pageUrl,'test/index.js')
}

let getOutput = () => {
    return {
        path: path.resolve(process.cwd(), outputDir),
        filename: './[name]/index.[hash:4].bundle.js',
        publicPath: '',
        // chunkFilename: 'chunk.[chunkhash:8].chunk.min.js',
        // hashDigestLength: 8 // 默认长度是20 or [hash:4]
    }
}

Object.assign(module.exports, {
    getPageUrl,
    getPages,
    getEntry,
    getOutput
})