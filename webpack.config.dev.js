const merge = require('webpack-merge');
const common = require('./webpack.config.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer:{
    historyApiFallback: true,
    compress: true,
    contentBase: process.env.CONTENT_PATH
  },
});