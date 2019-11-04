module.exports = {
    pagesDir: './pages',
    base: {
        baseUrl:'./',
        entry: 'index.js',
        outputDir: 'build',
        outputFileName: "[id]-[name]-[hash:8].js",
        templatePath: "index.html",
        htmlMinify: {
            // 注释
            removeComments: true,
            // 空格
            collapsWhitespace: true,
            // 属性的引导
            removeAttributeQuotes: true,
            // 空属性
            removeEmptyAttributes: true
        }
    },
    dev: {
        host: "localhost",
        // host: "127.0.0.1",
        port: 8080,
        browserOpen: true,
        devtool: "cheap-module-eval-source-map",
        proxy: {
            "/apis": {
                target: "http://localhost:3000",
                pathRewrite: { "^/apis": "/api" },
                secure: false
            }
        },
        before: () => {
            console.log('dev before')
        }
    },
    build: {
        uglifyJsSourceMap: false,
        devtool: false,
    },
    babel: {
        presets: [
            ['@babel/preset-env']
            // ["env", { modules: false }]
        ],
        plugins: [
            // 避免多次编译出helper函数
            "@babel/plugin-transform-runtime"
        ]
        // plugins: ["syntax-dynamic-import", "transform-object-reset-spread"]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.vue'],
        alias: {
            '@': path.join(process.cwd(), '/'),
            'vue': 'vue/dist/vue.js'
        },
        modules: ['node_modules'],
    },
    rules: [
    ],
    plugins: [
    ]
}