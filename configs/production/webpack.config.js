import fs from 'fs';
import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

var cwd = process.cwd();

export default {
    entry: [
        './client/'
    ],
    output: {
        filename: '[name].js',
        path: path.join(cwd, 'build/assets'),
        publicPath: '/assets/'
    },
    module: {
        loaders: [
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: 'file'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: 'babel'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin()
    ]
};
