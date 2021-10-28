const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    username : String,
    password : String
})

const UserModel = model("Users", userSchema);

module.exports = UserModel;   
