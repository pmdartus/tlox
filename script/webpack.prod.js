const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const MinifyPlugin = require('babel-minify-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
    output: {
        filename: '[name].[hash].js',
    },

    devtool: 'source-map',

    plugins: [
        new MinifyPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
    ],
});
