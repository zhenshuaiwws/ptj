var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String
});

module.exports.userSchema = mongoose.model("User", UserSchema);