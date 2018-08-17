var path = require('path');
// var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname,'Up_and_Running');
const APP_PATH = path.resolve(ROOT_PATH, 'src');
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');

const htmlwebpackplugin = new HtmlWebpackPlugin({
    template: path.resolve(APP_PATH,'index.html'),
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

    devServer:{
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.jsx?$|\.js?$/,
                loader: ['babel-loader'],
                include: [APP_PATH],
                exclude: /node_modules/
            }
            // {
            //     test: /\.jsx$|\.js?$/,
            //     loader: ['eslint-loader'],
            //     enforce: "pre"
            // }
        ]
    },
    plugins:[
        htmlwebpackplugin
    ]
};