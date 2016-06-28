var models = require("./model");

var user = function () {

    user.prototype.getAll = function () {
        console.log('---data');
        console.log(models.user.find)

        // models.user.find({}, function (err, users) {
        //     console.log(21);
        //     console.log(users);
        // });
    };
};

exports = module.exports = user;