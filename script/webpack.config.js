const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const SRC_DIR = path.resolve(__dirname, '..', 'src');
const DIST_DIR = path.resolve(__dirname, '..', 'dist');

module.exports = {
    entry: path.resolve(SRC_DIR, 'playground', 'index.js'),

    output: {
        filename: '[name].js',
        path: path.resolve(DIST_DIR, 'playground'),
    },
    
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(DIST_DIR, 'playground'),
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'tlox',
            template: path.resolve(SRC_DIR, 'playground', 'index.html')
        }),
    ],
    
};
