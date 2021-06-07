const express = require("express");
const router = express.Router();
const Email = require("../models/emailModel");

router.route("/Signup").post((req, res) => {
    const fullName = req.body.fullName;
    const email = req.body.email;
    const newEmail = new Email({
        fullName,
        email
    });

    newEmail.save();
})

module.exports = router;
