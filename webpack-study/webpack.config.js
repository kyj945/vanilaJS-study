const path = require('path');
module.exports = {
    mode: 'development',
    entry: {
        main: './src/app.js'
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].js'
    },
    // 모든 js 파일에 대해서 my-webpack-loader가 실행됨.
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    path.resolve('./my-webpack-loader.js')
                ]
            }
        ]
    }
}