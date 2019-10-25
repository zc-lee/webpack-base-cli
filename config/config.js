module.exports = {
    base: {
        entry: '',
        output
    },
    dev: {
        host: "localhost",
        port: 8080,
    },
    build: {

    },
    babel: {
        preset: [],
        plugins: []
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
        {
            test: /\.vue$/,
            use: [{
                loader: "vue-loader",
                options: {
                    loaders: {
                        js: [
                            {
                                loader: 'babel-loader',
                                options: this.babel
                            }
                        ]
                    }
                }
            }]
        }
    ],
    plugins: []
}