const sequelize = require('sequelize');
const db = require('../config/db');


const Schedule = db.define('schedules', {
    access_code: {
        type: sequelize.STRING
    },
    age: {
        type: sequelize.STRING
    },
    agent_id: {
        type: sequelize.STRING
    },
    assigned: {
        type: sequelize.STRING
    },
    autoplay: {
        type: sequelize.STRING
    },
    comments: {
        type: sequelize.STRING
    },
    completed: {
        type: sequelize.STRING
    },
    customer_first_name: {
        type: sequelize.STRING
    },
    customer_last_name: {
        type: sequelize.STRING
    },
    customer_phone: {
        type: sequelize.STRING,
        length:100
    },
    deferred: {
        type: sequelize.STRING
    },
    gender: {
        type: sequelize.STRING
    },
    in_progress: {
        type: sequelize.STRING
    },
    location: {
        type: sequelize.STRING
    },
    mpesa: {
        type: sequelize.STRING
    },
    personel_first_name: {
        type: sequelize.STRING
    },
    personel_other_name: {
        type: sequelize.STRING
    },
    splash_page: {
        type: sequelize.STRING
    },
    status: {
        type: sequelize.STRING,
        length:100
    },
    task_id: {
        type: sequelize.STRING
    },
    registration: {
        type: sequelize.STRING
    }
})

module.exports = Schedule;