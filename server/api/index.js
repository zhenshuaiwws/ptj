var userAPI = require('./user');

module.exports = {
    user: new userAPI()
};

exports = module.exports;