var data = require('../data');

var UserAPI = function () {
    UserAPI.prototype.getAll = function (req, res, next) {
        data.userData.getAll(function (err, users) {
            return res.send({
                code: 200,
                data: users
            });
        });
    };
    UserAPI.prototype.addUser = function (req, res, next) {
        data.userData.addUser(req.body.name, req.body.desc, function (err, user) {
            return res.send({
                code: 200,
                data: user
            });
        });
    };


};
exports = module.exports = UserAPI;