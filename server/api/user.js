var server = require('../domain');

function UserAPI() {
}
UserAPI.prototype.getAll = function (req, res, next) {
    console.log('api')
    console.log(server.user)
};
exports = module.exports = UserAPI;