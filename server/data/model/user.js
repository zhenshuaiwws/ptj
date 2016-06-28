var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {type: String},
    desc: {type: String, default: ''}
});

exports.userSchema = mongoose.model("user", UserSchema);