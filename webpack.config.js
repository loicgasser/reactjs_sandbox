const path = require('path')


module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, '/public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                exclude: /node_modules/,
                test: /\.js$/
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, '/public'),
        compress: false,
        port: 9000
    }
}