var models = require("./model");

function User() {
    var model = models.user.userSchema;

    User.prototype.getAll = function (callback) {
        model.find({}, function (err, users) {
            callback(err, users);
        });
    };
    User.prototype.addUser = function (name, desc, callback) {
        var _user = model({
            name: name,
            desc: desc
        });
        _user.save(function (err, user) {
            if (err) {
                console.log('保存失败')
            } else {
                callback(err, user);
                console.log('保存成功: ' + name)
            }
        });
    };
}

exports = module.exports = User;