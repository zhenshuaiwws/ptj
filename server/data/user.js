var models = require("./model");

function User() {
    var model = models.user;

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
            callback(err, user);
        });
    };
    User.prototype.delUser = function (id, callback) {
        model.remove({_id: id}, function (err) {
            callback(err);
        });
    }
}

exports = module.exports = User;