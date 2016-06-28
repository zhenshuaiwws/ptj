var models = require("./model");

function User() {
    this.model = models.user;

}
User.prototype.getAll = function () {
    console.log('---data');

    models.user.findOne({desc: ''}, function (err, users) {
        console.log(21);
        console.log(users);
    });
};
User.prototype.addUser = function (name, desc) {
    var _user = this.model({
        name: name,
        desc: desc
    });
    _user.save(function (err) {
        if (err) {
            console.log('保存失败')
        } else {
            console.log('保存成功: ' + name)
        }
    });
};

exports = module.exports = User;