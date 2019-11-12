/**
 * webpack config development
 * @auther:jaden_wong@icloud.com
 * @update:2019-5-12
 */

const webpack = require('webpack');

const path = require('path');
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const miniCSSExtractPlugin = require('mini-css-extract-plugin');

const webpackProdConfig = {
  mode: 'production',
  target: 'web',
  entry: {
    home: ['./src/page/home/index.js'],
  },

  // optimization: {
  //     splitChunks: {
  //         cacheGroups: {
  //             // 注意: priority属性
  //             // 其次: 打包业务中公共代码
  //             common: {
  //                 name: 'common',
  //                 chunks: 'all',
  //                 minSize: 1,
  //                 priority: 0,
  //             },
  //             // 首先: 打包node_modules中的文件
  //             vendor: {
  //                 name: 'vendor',
  //                 test: /[\\/]node_modules[\\/]/,
  //                 chunks: 'all',
  //                 priority: 10,
  //             },
  //         },
  //     },
  // },
  module: {
    rules: [
      {
        test: /\.(less|css)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: miniCSSExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
          { loader: 'less-loader' },
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/, // 要排除node_modules,bower_components下的JS文件
        loader: 'babel-loader',
      },
    ],
  },

  plugins: [
    new miniCSSExtractPlugin({
      filename: './assets/css/[name].[hash].css',
      chunkFilename: './assets/css/[id].[hash].css',
    }),
    new HtmlWebpackPlugin({
      filename: 'page/home/index.html',
      template: './src/page/home/index.ejs',
      inject: true,
      chunks: ['home'],
      minify: true,
      cdn: {
        js: [`https://cdn.bootcss.com/vConsole/3.3.0/vconsole.min.js`],
      },
    }),
  ],
};

module.exports = webpackProdConfig;
