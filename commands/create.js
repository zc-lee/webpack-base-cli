const fileUrl = path.resolve(__dirname, '../template')
const inquirer = require('inquirer');
const { getPageUrl, getPages } = require('../lib/pages.js')
module.exports = async (config) => {
    if (!Object.values(config).some(v => v === true))
        return echo.info(`请输入页面名称！  例：create --[name]`)
    let pageUrl = await getPageUrl()
    function createDemo(key) {
        fs_extra.copy(fileUrl, path.resolve(pageUrl, key), (err) => {
            if (err) throwError(err)
            echo.succ(`${key} 创建成功`)
        })
    }
    for (let [key, val] of Object.entries(config)) {
        if (val === true) {
            if (getPages().some(v => v === key))
                await inquirer.prompt([{
                    type: 'confirm',
                    name: 'res',
                    message: `${key}已存在，是否覆盖?`,
                    default: false
                }]).then((e) => {
                    if (e.res)
                        createDemo(key)
                    else
                        echo.info(`取消创建${key}`)
                })
            else
                createDemo(key)
        }
    }
}