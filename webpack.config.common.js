const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname,'TodoList');
const APP_PATH = path.resolve(ROOT_PATH, 'src');
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');
const CONTENT_PATH = path.resolve(ROOT_PATH, 'contents');

// Clean the build folder before each building
const cleanwebpackplugin = new CleanWebpackPlugin([BUILD_PATH]);

const htmlwebpackplugin = new HtmlWebpackPlugin({
  template: path.resolve(APP_PATH, 'index.html'),
});

const globalvar = new webpack.NodeEnvironmentPlugin({
  ROOT_PATH,
  APP_PATH,
  BUILD_PATH,
  CONTENT_PATH
});

module.exports = {
  entry: path.resolve(APP_PATH, 'app.jsx'),

  output: {
    path: BUILD_PATH,
    filename: "bundle.js"
  },

  resolve: {
    extensions: [' ', '.jsx', '.js']
  },

  module: {
    rules: [
      //CSS Loaders
      {
        test: /\.(css|scss)$/,
        use: ['style-loader','css-loader']
      },
      //JS and JSX Loaders
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        include: APP_PATH,
        exclude: /node_modules/
      },

      {
        test:/\.(gif|png|jpe?g|svg)$/i,
        use:[
          {
            loader: 'file-loader',
            options:{
              name: '[path]-[name]-[hash:4].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options:{
              bypassOnDebug: true,
              disable: true
            }
          }
        ]
      },

      {
        test: /\.(pdf|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options:{
              name: '[path]-[name]-[hash:4].[ext]'
            }
          }
        ]
      },
      // {
      //     test: /\.jsx?$/,
      //     use: [
      //       {loader: 'eslint-loader'}
      //       ],
      //     enforce: "pre"
      // }
    ]
  },

  plugins: [
    cleanwebpackplugin,
    htmlwebpackplugin,
    globalvar
  ]
};
