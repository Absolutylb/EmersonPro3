const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Palestrante = sequelize.define('Palestrante', {
nome: {
type: DataTypes.STRING,
allowNull: false
},
especialidade: {
type: DataTypes.STRING,
allowNull: false
}
});

module.exports = Palestrante;
