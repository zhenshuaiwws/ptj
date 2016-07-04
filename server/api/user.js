var data = require('../data');

var UserAPI = function () {
    UserAPI.prototype.getAll = function (req, res, next) {
        data.userData.getAll(function (err, users) {
            if (err) {
                return next(err);
            }
            return res.send({
                code: 200,
                data: users
            });
        });
    };
    UserAPI.prototype.addUser = function (req, res, next) {
        data.userData.addUser(req.body.name, req.body.desc, function (err, user) {
            if (err) {
                return next(err);
            }
            return res.send({
                code: 200,
                data: user
            });
        });
    };
    UserAPI.prototype.delUser = function (req, res, next) {
        data.userData.delUser(req.params.id, function (err, user) {
            if (err) {
                return next(err);
            }
            return res.send({
                code: 200,
                data: user
            })
        })
    };


};
exports = module.exports = UserAPI;