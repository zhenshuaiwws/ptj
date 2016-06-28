var data = require('../data');

var UserAPI = function () {
    UserAPI.prototype.getAll = function (req, res, next) {
        console.log('---api');
        data.userData.getAll(function (err, code, user) {

        });
    };
    UserAPI.prototype.addUser = function (req, res, next) {
        data.userData.addUser(req.body.name, req.body.desc, function (user) {
            res.send({
                code: 200
            });
        });
    };


};
exports = module.exports = UserAPI;