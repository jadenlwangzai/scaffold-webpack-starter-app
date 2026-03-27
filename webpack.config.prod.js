/**
 * webpack config production
 * @auther:jaden_wong@icloud.com
 * @update:2019-5-12
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCSSExtractPlugin = require('mini-css-extract-plugin');

const webpackProdConfig = {
  mode: 'production',
  target: 'web',
  entry: {
    home: ['./src/page/home/index.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    // contenthash ensures cache busting only when file content changes
    filename: 'assets/js/[name].[contenthash].js',
    clean: true,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        // Pack shared business logic into a common chunk
        common: {
          name: 'common',
          chunks: 'all',
          minSize: 1,
          priority: 0,
        },
        // Pack node_modules into a vendor chunk (higher priority)
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: 10,
        },
      },
    },
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
          // mini-css-extract-plugin.loader extracts CSS into separate files (prod only)
          // Do NOT use style-loader and mini-css-extract-plugin together
          { loader: miniCSSExtractPlugin.loader },
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
      filename: './assets/css/[name].[contenthash].css',
      chunkFilename: './assets/css/[id].[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      filename: 'page/home/index.html',
      template: './src/page/home/index.ejs',
      inject: true,
      chunks: ['home'],
      minify: true,
      cdn: {
        js: ['https://cdn.bootcss.com/vConsole/3.3.0/vconsole.min.js'],
      },
    }),
  ],
};

module.exports = webpackProdConfig;
