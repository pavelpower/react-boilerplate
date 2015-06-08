var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var config = require('./configs/development');

var ExtractTextPlugin = require("extract-text-webpack-plugin");

function writeStats(stats) {
    var publicPath = this.options.output.publicPath;
    var assets = stats.toJson().assetsByChunkName;
    fs.writeFileSync(config.webpackStats.path, JSON.stringify(assets));
}

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:3001',
        'webpack/hot/only-dev-server',
        './client/'
    ],
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'build/assets'),
        publicPath: 'http://localhost:3001/assets/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                excude: /node_modules/,
                loaders: ['react-hot', 'babel']
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        function() {
            this.plugin('done', writeStats);
        }
    ]
}
