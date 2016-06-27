var server = require('../domain');

var UserAPI = function () {
    UserAPI.prototype.getAll = function () {
        server.user.getAll()
    }
};

exports = module.exports = UserAPI;