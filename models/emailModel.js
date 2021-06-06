const { string } = require("assert-plus");
const mongoose = require("mongoose");

const emailSchema = {
    fullName: String,
    email: String
}

const Email = mongoose.model("Email", emailSchema);

module.exports = Email;
