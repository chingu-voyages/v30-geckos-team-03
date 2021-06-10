// const { string } = require("assert-plus");
const mongoose = require("mongoose");

const userSchema = {
    fullName: String,
    email: String,
    comment: String
}

const User = mongoose.model("User", userSchema);

module.exports = User;
