var mode = process.env.NODE_ENV || 'development';

export var config = require(`./${mode}/application.config`);
export var webpackConfig = require(`./${mode}/webpack.config`);
