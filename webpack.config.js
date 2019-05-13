/**
 * webpack config development
 * @auther:jaden_wong@icloud.com
 * @update:2019-5-12
 */

const path = require('path')
const HtmlWebpackPlugin = require(`html-webpack-plugin`)
const webpackDevConfig = {
    mode: 'development',
    target: 'web',
    entry: './demo/index.js',
    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
        library: 'template',
        libraryTarget: 'umd',
    },
    devtool: 'inline-soure-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        inline: true,
        hot: true,
        port: 3000,
        quiet: false,
    },
    resolve: {
        extensions: ['.js'],
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/, //要排除node_modules,bower_components下的JS文件
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './demo/index.html',
            head: true,
            inject: true,
        }),
    ],
    watch: true,
}

module.exports = webpackDevConfig
