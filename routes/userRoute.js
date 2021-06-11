const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.route("/Signup").post((req, res) => {
    const fullName = req.body.fullName;
    const email = req.body.email;
    const comment = req.body.comment;

    const newUser = new User({
        fullName,
        email, 
        comment
    });

    newUser.save();
});

router.route("/Comments").get((req, res) => {
    User.find()
        .then(foundUsers => res.json(foundUsers))
})

module.exports = router;
