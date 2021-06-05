const express =  require('express');
const path = require('path');
const Mailchimp = require('mailchimp-api-v3');
require('dotenv').config({ path: __dirname + "/variables.env"});

const mc_api_key = process.env.MAILCHIMP_API_KEY;
const list_id = process.env.LIST_ID;

const app = express();
const mailchimp = new Mailchimp(mc_api_key);

// API endpoint
app.get("/api/memberAdd", (req, res) => {
    mailchimp
        .post(`/lists/${list_id}/members/`, {
            emil_address: req.query.email,
            status: "subscribed"
        })
        .them(result => {
            res.send(result);
        })
        .catch(err => {
            res.send(err);
        })
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/V30-GECKOS-TEAM-03/space-project/public/index.html'));

})

const port = process.env.PORT || 9001;
app.listen(port);

console.log("Express is listening on port");