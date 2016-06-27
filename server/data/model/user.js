var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    _id : String,
    name: String,
    age : Number
});

exports.userSchema = mongoose.model("drive_page", UserSchema);