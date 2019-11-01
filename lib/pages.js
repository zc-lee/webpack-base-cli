const { base: { baseUrl, pagesDir, entry, outputDir, outputFileName } } = require('../webpack/webpack.config')
const pageUrl = path.resolve(process.cwd(), pagesDir)

let getPageUrl = (config) => {
    if (!fs.existsSync(pageUrl))
        fs.mkdirSync(pageUrl)
    return pageUrl
}

let getPages = () => {
    return fs.readdirSync(pageUrl)
}

let getEntry = (key) => {
    return path.resolve(pageUrl, key, entry)
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

let getOutput = (key) => {
    return {
        path: path.resolve(process.cwd(), outputDir, key),
        filename: baseUrl + 'js/' + outputFileName,
        // 组件懒加载时的文件名称及存储
        chunkFilename: "[id]-[name]-[hash].js"
    }
}

Object.assign(module.exports, {
    pageUrl,
    getPageUrl,
    getPages,
    getEntry,
    getEntrys,
    getOutput
})