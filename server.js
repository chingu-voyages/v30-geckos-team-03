const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3001

//connect to mongoose
mongoose.connect("mongodb+srv://jackie-admin:asteroid123@cluster0.mma4u.mongodb.net/asteroidDB")

//require route
app.use("/", require("./routes/userRoute"));

if (process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname, '/space-project/build')))

    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, 'space-project','build','index.html'));

});}
else{
app.get("/", function(req, res) {
    res.send("Express here!");
});}

app.listen(port, function() {
    console.log("express server is running on port", port);
})