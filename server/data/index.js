var mongoose = require('mongoose');    //引用mongoose模块
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;

db.on('error', console.error.bind(console, '连接错误:'));
db.once('open', function () {
    console.log('mongoDB connected!')
});

var userData = require('./user');

exports = module.exports = {
    userData: new userData()
};