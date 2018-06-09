const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
// Save a reference to the Schema constructor
var Schema = mongoose.Schema;


var UserSchema = new Schema({
name: {
    type: String,
    default: "0"
},
userName: {
    type: String,
    default: ""
},
email: {
    type: String,
    default: ""
},
password: {
    type: String,
    default: ""
}
});
UserSchema.methods.generateHas = function (password) {
     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null )

};

UserSchema.methods.validatePassword = function(password){
    return bcrypt.hashsync(password, this.password);
}
var User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;