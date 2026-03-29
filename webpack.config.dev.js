import path from 'node:path';
import { fileURLToPath } from 'node:url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  mode: 'development',
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
  // eval-cheap-module-source-map: fast rebuilds + readable original sources
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    hot: true,
    port: 1314,
    open: true,
    historyApiFallback: true,
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
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
            },
          },
          'postcss-loader',
          'less-loader',
        ],
      },
      // Global CSS / LESS (non-module) — style-loader injects into DOM (dev only)
      {
        test: /\.(less|css)$/,
        exclude: /\.module\.(less|css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
      },
      // Images: inline ≤8kb as base64, otherwise emit as file
      {
        test: /\.(png|jpe?g|gif|svg|ico|webp)$/i,
        type: 'asset',
        parser: { dataUrlCondition: { maxSize: 8 * 1024 } },
        generator: { filename: 'assets/images/[name][ext]' },
      },
      // Fonts
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: { filename: 'assets/fonts/[name][ext]' },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/page/home/index.html',
      inject: true,
      chunks: ['home'],
      minify: false,
    }),
  ],
};
