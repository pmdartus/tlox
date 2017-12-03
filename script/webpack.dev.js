const path = require('path');
const merge = require('webpack-merge');

const common = require('./webpack.common.js');

const DIST_DIR = path.resolve(__dirname, '..', 'dist');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    
    devServer: {
        contentBase: path.resolve(DIST_DIR, 'playground'),
        overlay: {
            warnings: false,
            errors: true
        }
    },
});
