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
            /*
            {
                test: /\.js$/,
                use: [
                    path.resolve('./my-webpack-loader.js')
                ]
            }
            */
           // loader 실행순서는 밑 -> 앞 (css-loader -> style-loader)
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader',
                options: {
                    publicPath: './dist/',
                    name: '[name].[ext]?[hash]',
                    // 2kb 이하는 문자열, 이상은 file로 변환
                    limit: 20000 //20kb
                }
            }
        ]
    }
}