var express = require('express'),
    expressLayouts = require("express-ejs-layouts"),
    ejs = require('ejs'),
    fs = require('fs'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    router = require('./server/router.js'),
    app = express();


// view engine setup
app.use(express.static(path.join(__dirname, '/www/page'), {maxAge: 1000 * 60 * 60 * 24 * 7}));
app.set('views', path.join(__dirname, '/www/layout'));
app.set('view engine', 'html');
app.engine('html', ejs.__express);
app.set('layout', 'layout.html');
app.use(expressLayouts);

app.get('/', function (req, res) {
    res.render('index', {
        title : 'Part-time Job'
    });
});

app.listen('5000', '0.0.0.0', function () {
    console.log('server online! port:5000');

});

module.exports = exports = app;
