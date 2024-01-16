// sequelize-config.js
const Sequelize = require('sequelize');

const sequelize = new Sequelize('plantas', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql', // Puedes cambiarlo según la base de datos que estés utilizando
    logging: false, // Desactiva los logs de SQL (opcional)
});

module.exports = sequelize;
