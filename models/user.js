const sequelize = require('sequelize');
const db = require('../config/db');

const User = db.define('users', {
    phone: {
        type: sequelize.BIGINT
    },
    email: {
        type: sequelize.STRING,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: sequelize.STRING
    },
    resetPassword:{
        type:sequelize.INTEGER,
        defaultValue:0
    }
})

module.exports = User