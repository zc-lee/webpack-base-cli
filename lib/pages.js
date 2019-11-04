const { initConfigUrl } = require('../config/cli.config')
let url = path.resolve(process.cwd(), initConfigUrl)
const { pagesDir } = require(fs.existsSync(url) ? url : '../config/common.config')

const pageUrl = path.resolve(process.cwd(), pagesDir)

let getPageUrl = (config) => {
    if (!fs.existsSync(pageUrl))
        fs.mkdirSync(pageUrl)
    return pageUrl
}

let getPages = () => {
    return fs.readdirSync(pageUrl)
}

let getEntrys = (params) => {
    let pages = Object.keys(params),
        pros = getPages(),
        entrys = []
    if (pages.length === 0) {
        echo.err(`请输入页面名称！  例：build/serve --[name]`)
        echo.info(`Pages:`, pros)
        process.exit(1)
    }
    pages.forEach(page => {
        if (pros.some(v => v === page)) {
            entrys.push(page)
        } else {
            echo.err(`${page} don\`t exist!`)
            echo.info(`Pages:`, pros)
            process.exit(1)
        }
    });
    return entrys
}


Object.assign(module.exports, {
    pageUrl,
    getPageUrl,
    getPages,
    getEntrys
})