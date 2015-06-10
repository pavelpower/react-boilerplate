var less = require('less');
var fs = require('fs');
var path = require('path');

var source = fs.readFileSync(path.join(__dirname, './client/components/StateContorls/StateControls.less'), 'utf8');

var options = {
    paths: '/Users/benjamin/VezetVsem/boilerplate/node_modules/bootstrap/less',
    relativeUrls: true,
    compress: false
}

less.render(source, options, function(error, result) {
    console.log(source)
    console.log(error)
    console.log('=--===============')
    console.log(result.css)
});
