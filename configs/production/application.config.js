import path from 'path';

export default {
    static: {
        path: path.resolve(process.cwd(), 'build/assets'),
        url: '/assets/'
    },
    scripts: [
        'http://yastatic.net/jquery/2.1.3/jquery.min.js',
        'http://yastatic.net/bootstrap/3.3.1/js/bootstrap.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/react/0.13.3/react-with-addons.min.js',
        '/assets/main.js'
    ],
    styles: [
        'http://yastatic.net/bootstrap/3.3.1/css/bootstrap.min.css',
        '/assets/main.css'
    ]
};
