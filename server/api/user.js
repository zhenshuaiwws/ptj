var server = require('../domain');
var data = require('../data');

var UserAPI = function () {
    UserAPI.prototype.getAll = function (req, res, next) {
        console.log('---api');
        data.userData.getAll(function (err, code, user) {

        });
    };
};
exports = module.exports = UserAPI;