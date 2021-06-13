const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3001

dotenv.config();

//connect to mongoose
const mongo=process.env.MONGODB_URI
mongoose.connect(mongo, {useNewUrlParser: true})

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

app.listen(port, '0.0.0.0', function() {
    console.log("express server is running on port", port);
})