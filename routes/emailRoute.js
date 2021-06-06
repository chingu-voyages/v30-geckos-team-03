const express = require("express");
const router = express.Router();
const Email = require("../models/emailModel");

router.route("/").post((req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const newEmail = new Email({
        fullName,
        email
    });

    newEmail.save();
})

module.exports = router;
