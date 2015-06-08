import React from 'react';
import Page from './components/Page';

function render() {
    return function (request, response) {
        var html =
            '<!doctype html>' +
            React.renderToStaticMarkup(
                <Page
                    title="Hello, World!"
                    scripts={request.assets.scripts}
                    styles={request.assets.styles} />
            );

        response.setHeader('Content-Type', 'text/html');
        response.end(html);
    }
}

export default render;
