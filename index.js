const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const app = express();
const port = process.env.PORT || 5000
const db = require('./config/db');
db.authenticate()
    .then(() => {
        console.log('db connected');

    })
    .catch((err) => {
        console.log(err);

    })

app.get('/', (req, res) => {
    res.send('index')
})
app.listen(port, (err) => {
    if (err) {
        console.log(`server failed ${err}`);

    } else {
        console.log(`connected on port ${port}`);

    }
})