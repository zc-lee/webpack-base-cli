module.exports = (dir = '') => {
    // echo.info('commands')
    let url = path.resolve(__dirname, dir),
        commands = {};
    fs.readdirSync(url).map(v => path.parse(path.join(url, v)).name).forEach(v => {
        commands[v] = path.join(url, v)
    });
    return commands
}