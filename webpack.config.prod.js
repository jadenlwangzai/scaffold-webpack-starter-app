import path from 'node:path';
import { fileURLToPath } from 'node:url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  mode: 'production',
  target: 'web',
  entry: {
    home: ['./src/page/home/index.tsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'assets/js/[name].[contenthash:8].js',
    publicPath: '/',
    clean: true,
  },
  optimization: {
    minimizer: [
      '...', // extend webpack's default TerserPlugin for JS
      new CssMinimizerPlugin(),
    ],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        // node_modules → vendor chunk (higher priority)
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: 10,
        },
        // shared business code → common chunk
        common: {
          name: 'common',
          chunks: 'all',
          minSize: 1,
          minChunks: 2,
          priority: 0,
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
      // JS/TS: use SWC (20-70x faster than Babel)
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: { loader: 'swc-loader' },
      },
      // CSS Modules (*.module.css / *.module.less)
      {
        test: /\.module\.(less|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[hash:base64:8]',
              },
            },
          },
          'postcss-loader',
          'less-loader',
        ],
      },
      // Global CSS / LESS (non-module)
      {
        test: /\.(less|css)$/,
        exclude: /\.module\.(less|css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader'],
      },
      // Images: inline ≤8kb as base64, otherwise emit as file
      {
        test: /\.(png|jpe?g|gif|svg|ico|webp)$/i,
        type: 'asset',
        parser: { dataUrlCondition: { maxSize: 8 * 1024 } },
        generator: { filename: 'assets/images/[name].[contenthash:8][ext]' },
      },
      // Fonts
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: { filename: 'assets/fonts/[name].[contenthash:8][ext]' },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[contenthash:8].css',
      chunkFilename: 'assets/css/[id].[contenthash:8].css',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/page/home/index.html',
      inject: true,
      chunks: ['home'],
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
  ],
};
