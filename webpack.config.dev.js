/**
 * webpack config development
 * @auther:jaden_wong@icloud.com
 * @update:2019-5-12
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCSSExtractPlugin = require('mini-css-extract-plugin');

const webpackDevConfig = {
  mode: 'development',
  target: 'web',
  entry: {
    home: ['./src/page/home/index.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/js/[name].[hash].js',
  },
  // eval-cheap-module-source-map: faster rebuild, preserves original source lines
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
    port: 1314,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(less|css)$/,
        use: [
          // style-loader injects CSS into the DOM via <style> tags (dev only)
          // Do NOT use style-loader and mini-css-extract-plugin together
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          { loader: 'less-loader' },
        ],
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new miniCSSExtractPlugin({
      filename: './assets/css/[name].css',
      chunkFilename: './assets/css/[id].css',
    }),
    new HtmlWebpackPlugin({
      filename: 'page/home/index.html',
      template: './src/page/home/index.ejs',
      inject: true,
      chunks: ['home'],
      minify: false,
      cdn: {
        js: ['https://cdn.bootcss.com/vConsole/3.3.0/vconsole.min.js'],
      },
    }),
  ],
};

console.log(
  '============================webpack env begin=============================='
);
console.log('webpack env：', process.env.NODE_ENV);
console.log(
  '============================webpack env end================================'
);

module.exports = webpackDevConfig;
