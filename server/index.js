import express from 'express';

import {config} from '../configs';

import devServer from './devserver.js';
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

server.use (devServer());

server.use('/', render());

server.listen(3000, () => {
    console.log('Application is listening at http://localhost:3000');
});
