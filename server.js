"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const fccTesting = require("./freeCodeCamp/fcctesting.js");
const bcrypt = require("bcrypt");
const app = express();
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = "sUperpassw0rd!";
const someOtherPlaintextPassword = "pass123";

// START_ASYNC
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
    console.log('Async hash: ' + hash);

    bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
        console.log('Async result: ' +res);
    })
});
// END_ASYNC

// START_SYNC
let hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
console.log('Sync hash: ' + hash);

let res = bcrypt.compareSync(myPlaintextPassword, hash);
console.log('Sync result: ' + res);
// END_SYNC

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT);
});
