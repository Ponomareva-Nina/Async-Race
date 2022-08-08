/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const sass = require('sass');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: './modules/app.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../public'),
    assetModuleFilename: './assets/[name][ext]',
  },

  resolve: {
    alias: {
      '@fonts': path.resolve(__dirname, 'src/assets/fonts'),
      '@img': path.resolve(__dirname, 'src/assets/img'),
    },
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  // loaders:
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /\.(jpg|JPG|jpeg|png|svg|gif)$/,
        type: 'asset/resource',
      },

      {
        test: /\.(ttf|woff|woff2|eot)$/,
        type: 'asset/resource',
      },

      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
