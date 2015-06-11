import fs from 'fs';
import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

var cwd = process.cwd();

export default {
    devtool: 'eval-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:3001',
        'webpack/hot/only-dev-server',
        './client/'
    ],
    resolve: {
        root: [
            path.join(cwd, 'client'),
            path.join(cwd, 'node_modules/bootstrap/less/')
        ]
    },
    // externals: [
    //     {
    //         'react': 'var React',
    //         'react/addons': 'var React.addons',
    //         'react/lib/keyMirror': 'var React.addons.keyMirror'
    //     }
    // ],
    output: {
        filename: '[name].js',
        path: path.resolve(cwd, 'build/assets'),
        publicPath: 'http://localhost:3001/assets/'
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
                loaders: ['react-hot', 'babel']
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            },
            {
                test: /\.less$/,
                loaders: ['style', 'css', `less?root=${path.resolve(cwd, './node_modules/bootstrap/less/')}`]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.ProgressPlugin(function(percentage, message) {
            var MOVE_LEFT = new Buffer("1b5b3130303044", "hex").toString();
            var CLEAR_LINE = new Buffer("1b5b304b", "hex").toString();
            process.stdout.write(CLEAR_LINE + Math.round(percentage * 100) + "% :" + message + MOVE_LEFT);
        }),
        function () {
            this.plugin("done", function (stats) {
                // var ws = fs.openSync(path.join(cwd, 'webpack-stats.json'), 'w+');
                // fs.writeSync(ws, JSON.stringify(stats.toJson()));
                // fs.closeSync(ws);

                console.log(stats.toString({
                    chunks: false,
                    colors: true
                }));
            });
        }
    ]
};
