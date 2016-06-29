var express = require('express'),
    expressLayouts = require("express-ejs-layouts"),
    ejs = require('ejs'),
    fs = require('fs'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    router = require('./server/router'),
    app = express();


// view engine setup
app.use(express.static(path.join(__dirname, '/www/static'), {maxAge: 0}));
app.set('views', path.join(__dirname, '/www/view'));
app.set('view engine', 'html');
app.engine('html', ejs.__express);
app.set('layout', 'layout.html');
app.use(expressLayouts);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


router(app);

app.listen('5000', '0.0.0.0', function () {
    console.log('------------------------------------------------------')
    console.log('server online! port:5000  ---  ' + (new Date).toGMTString());
});

module.exports = exports = app;
