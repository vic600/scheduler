const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;
const sequelize = require('sequelize');
const user = require('../models/user')
const config = require('../config/jwt')
module.exports = function (passport) {

    passport.use(new LocalStrategy({ usernameField: 'phone' }, (phone, password, done) => {

        user.findOne({ where: { phone: phone } }).then((user) => {
            if (!user) {
                return done('Account not found ', null)
            }

            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err) {
                    return done(err)
                }
                if (isMatch) {
                    return done(null, user)
                } else {
                    return done({ password: 'You have entered an incorrect password' }, null)
                }
            })
        }).catch((err) => {
            console.log(err);

        })

    }))
    passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.secret
    },
        (jwtPayload, cb) => {
            //  console.log(jwtPayload.uid);
             
            //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
            return user.findOne({ where: { id: jwtPayload.uid } })
                .then(user => {
                    return cb(null, user);
                })
                .catch(err => {
                    return cb({error:err});
                });
        }
    ));

}