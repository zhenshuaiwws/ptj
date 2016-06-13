var mongoose = require('mongoose');    //引用mongoose模块
var db = mongoose.createConnection('localhost', 'test'); //创建一个数据库连接

db.on('error', console.error.bind(console, '连接错误:'));
db.once('open', function () {
    //一次打开记录
});

var PersonSchema = new mongoose.Schema({
    name: String   //定义一个属性name，类型为String
});
var PersonModel = db.model('Person', PersonSchema);
var personEntity = new PersonModel({name: 'Krouky'});
console.log(personEntity);

personEntity.save();


exports = module.exports = function () {

};