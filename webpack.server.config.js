var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './server/server.js'
    ],
    output: {
        path: path.resolve(__dirname, 'build/'),
        filename: 'server.js',
        libraryTarget: 'commonjs2'
    },
    target: 'node',
    externals: /^[a-z][a-z\.\-0-9]*$/,
    module: {
        loaders: [
            {
                test: /\.js$/,
                excude: /node_modules/,
                loaders: ['babel-loader']
            },
            {
                test: /\.css$/,
                loader: 'empty-loader'
            }
        ]
    },
}
