const { Sequelize } = require('sequelize');


module.exports= new Sequelize('schedules', 'postgres', '12345', {
    host: 'localhost',
    dialect: 'postgres',
    port:5433
});