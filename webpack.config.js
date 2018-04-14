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
    serve: {
        "content": "./"
    },
    plugins: [
        new TimeFixPlugin(),
        new HtmlWebpackPlugin(),
        new AngularCompilerPlugin.AngularCompilerPlugin({
            tsConfigPath: './playground/tsconfig.json',
            entryModule: './playground/app/app.module#PlayGroundModule',
            sourceMap: true
        })
    ]
};