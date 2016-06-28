var data = require("../data");

function User() {
    User.prototype.getAll = function () {
        console.log('---server');
        console.log(data.userData)
        data.userData.getAll();
    };
}

exports = module.exports = new User();