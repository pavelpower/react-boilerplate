import React from 'react';

class Page extends React.Component {

    render() {
        return (
            <html>
                <head>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0, user-scalable=no" />

                    <title>{this.props.title}</title>

                    {this.props.styles.map((style, key) => <link rel="stylesheet" href={style} key={key} /> )}
                </head>
                <body>
                    <div
                        id="application"
                        dangerouslySetInnerHTML={{__html: this.props.body}} />

                    {this.props.scripts.map((script, key) => <script src={script} key={key} /> )}
                </body>
            </html>
        );
    }

}

Page.defaultProps = {
    title: 'Добавление заказа'
}

export default Page;
