const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Evento = sequelize.define('Evento', {
titulo: {
type: DataTypes.STRING,
allowNull: false
},
data: {
type: DataTypes.DATE,
allowNull: false
}
});

module.exports = Evento;
