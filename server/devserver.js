import url from 'url';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import {config, webpackConfig} from '../configs';

var assetsPromise = new Promise((resolve) => {
    webpackConfig.plugins.push(function() {
        this.plugin('done', (stats) => {
            var assets = stats.toJson().assetsByChunkName;
            resolve(assets);
        });
    });
});

var webpackCompiler = webpack(webpackConfig);
var webpackDevServer = new WebpackDevServer(webpackCompiler, {
    contentBase: config.static.source,
    publicPath: 'http://localhost:3001/assets/',
    hot: true,
    quiet: true,
    noInfo: true
});

webpackDevServer.listen(3001, 'localhost', () => {
    console.log('Webpack Dev Server is listening at http://localhost:3001');
});

function devServer() {
    return (request, response, next) => {
        var scripts = request.assets.scripts || [];
        var styles = request.assets.styles || [];
        assetsPromise
            .then((assets) => {
                Object.keys(assets).forEach((name) => {
                    var bundle = assets[name];
                    if (!Array.isArray(bundle)) {
                        bundle = [bundle];
                    }
                    for (let chunk of bundle) {
                        if (chunk.match(/\.js$/)) {
                            scripts.push(url.resolve(config.static.url, chunk));
                        } else if ( chunk.match(/\.css$/)) {
                            styles.push(url.resolve(config.static.url, chunk));
                        }
                    }
                });
                request.assets = {scripts, styles};
                next();
            })
            .catch((error) => {
                console.log(error.stack);
            });
    }
}

export default devServer;
