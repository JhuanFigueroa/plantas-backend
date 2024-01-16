// models/user.js
const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize-config');

const User = sequelize.define('Planta', {
    id_planta: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = User;
