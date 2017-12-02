const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const SRC_DIR = path.resolve(__dirname, '..', 'src');
const DIST_DIR = path.resolve(__dirname, '..', 'dist');

const __IS_PROD__ = process.env.NODE_ENV === 'production';

module.exports = {
    entry: path.resolve(SRC_DIR, 'playground', 'index.ts'),

    output: {
        filename: '[name].js',
        path: path.resolve(DIST_DIR, 'playground'),
    },

    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(DIST_DIR, 'playground'),
        overlay: {
            warnings: false,
            errors: true
        }
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },

    resolve: {
        extensions: [ '.ts', '.js' ]
    },

    plugins: [
        new CleanWebpackPlugin([path.resolve(DIST_DIR, 'playground')], {
            allowExternal: true,
        }),
        new CopyWebpackPlugin([{
            from: path.dirname(
                require.resolve(`monaco-editor/${ __IS_PROD__ ? 'min' : 'dev' }/vs/loader`)
            ),
            to: 'monaco-editor',
        }]),
        new HtmlWebpackPlugin({
            title: 'tlox',
            template: path.resolve(SRC_DIR, 'playground', 'index.html'),
        }),
    ],

    stats: {
        excludeAssets: /^monaco-editor\//
    }
};
