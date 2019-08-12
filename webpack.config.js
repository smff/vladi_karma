'use strict';
var path = require('path');
var webpack = require('webpack');
var ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    mode: 'development',
    context: path.join(__dirname),
    module: {
        rules: [].concat([])
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ForkTsCheckerWebpackPlugin(),
    ],
    stats: {children: false},
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.css']
    },
    output: {
        path: path.join(__dirname, '/docs'),
        filename: '[name].js',
        libraryTarget: 'umd',
        pathinfo: true
    },
    externals: {
        'react': 'react-16',
        'react-dom': 'react-dom-16',
        'moment': true,
        'lodash': true
    }
};
