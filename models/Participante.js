const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Participante = sequelize.define('Participante', {
nome: {
type: DataTypes.STRING,
allowNull: false
},
email: {
type: DataTypes.STRING,
allowNull: false
}
});

module.exports = Participante;
