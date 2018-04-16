const HtmlWebpackPlugin = require('html-webpack-plugin');
const TimeFixPlugin = require('time-fix-plugin');
const AngularCompilerPlugin = require('@ngtools/webpack');
//import {AngularCompilerPlugin} from '@ngtools/webpack'

module.exports = {
    entry: {
        'app': './playground/app/main.browser.ts',
    },
    output: {
        path: __dirname + '/dist/',
        filename: '[name].[hash].js'
    },
    mode: 'development',
    stats: {
        errorDetails: true
    },
    devtool: "inline-source-map",
    resolve: {
        extensions: ['.ts', '.js'],
        enforceExtension: false
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: '@ngtools/webpack'
            }
        ]
    },
    plugins: [
        new TimeFixPlugin(),
        new HtmlWebpackPlugin(),
        new AngularCompilerPlugin.AngularCompilerPlugin({
            tsConfigPath: __dirname + '/playground/tsconfig.json',
            entryModule: __dirname + '/playground/app/app.module#PlayGroundModule',
            sourceMap: true,
            skipCodeGeneration: true
        })
    ]
};