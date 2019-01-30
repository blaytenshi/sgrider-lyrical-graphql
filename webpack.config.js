const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'client', 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        port: 4000,
        proxy: {
            '/graphql': 'http://localhost:4000',
        }
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                use: ['style-loader', 'css-loader'],
                test: /\.css$/
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: 'client/index.html'
        }),
    ]
};
