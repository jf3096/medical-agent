var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use("/app/libs/", express.static(__dirname + '/app/libs/'));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, '127.0.0.1', function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Listening at http://127.0.0.1:3000');
});