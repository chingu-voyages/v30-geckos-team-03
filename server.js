const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

//connect to mongoose
mongoose.connect("mongodb+srv://jackie-admin:asteroid123@cluster0.mma4u.mongodb.net/asteroidDB")

//require route
app.use("/", require("./routes/emailRoute"));

app.get("/", function(req, res) {
    res.send("Express here!");
})

app.listen(3001, function() {
    console.log("express server is running on port 3001")
})