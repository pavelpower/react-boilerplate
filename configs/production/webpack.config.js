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
    resolve: {
        root: [
            path.join(cwd, 'client')
        ]
    },
    externals: [
        {
            'react': 'var React'
        }
    ],
    module: {
        loaders: [
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: 'file'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel']
            },
            {
                test: /\.less$/,
                //loaders: ['style', 'css', 'less']
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),

        new ExtractTextPlugin('[name].css'),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false
			}
		}),

        new webpack.ProgressPlugin(function(percentage, message) {
            var MOVE_LEFT = new Buffer("1b5b3130303044", "hex").toString();
            var CLEAR_LINE = new Buffer("1b5b304b", "hex").toString();
            process.stdout.write(CLEAR_LINE + Math.round(percentage * 100) + "% :" + message + MOVE_LEFT);
        }),
        // 
        // function () {
        //     this.plugin("done", function (stats) {
        //         var ws = fs.openSync(path.join(cwd, 'webpack-stats.json'), 'w+');
        //         fs.writeSync(ws, JSON.stringify(stats.toJson()));
        //         fs.closeSync(ws);
        //
        //         console.log(stats.toString({
        //             chunks: false,
        //             colors: true
        //         }));
        //     });
        // }
    ]
};
