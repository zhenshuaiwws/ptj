var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String
});

exports.userSchema = mongoose.model("User", UserSchema);