var data = require("../data");
function UserService() {

}
UserService.prototype.getAll = function () {
    console.log('server')
    data.userModels.getAll()
};
exports = module.exports = {
    UserService: UserService
};