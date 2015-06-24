import express from 'express';

import {config} from '../configs';

import render from './render';

var server = express();

server.use('/assets', express.static(config.static.path));

server.use((request, response, next) => {
    request.assets = {
        scripts: [].concat(config.scripts),
        styles: [].concat(config.styles)
    };
    next();
});

if (process.env.NODE_ENV !== 'production') {
    var devServer = require('./devserver.js');
    server.use(devServer());
}

server.use('/', render());

server.listen(3000, () => {
    console.log('Application is listening at http://localhost:3000');
});
