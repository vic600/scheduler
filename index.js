const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const app = express();
const port = process.env.PORT || 3000
const db = require('./config/db');
const session = require('express-session')
const passport = require('passport')
require('./config/passport')(passport);
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

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
// For Passport

//app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret

app.use(passport.initialize());

//app.use(passport.session()); // persistent login sessions
app.use('/personnel',require('./routes/auth'))
app.use('/tasks', passport.authenticate('jwt', { session: false }), require('./routes/tasks'))
app.listen(port, (err) => {
    if (err) {
        console.log(`server failed ${err}`);

    } else {
        console.log(`connected on port ${port}`);

    }
})

module.exports = app;