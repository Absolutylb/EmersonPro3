const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Feedback = sequelize.define('Feedback', {
participanteId: {
type: DataTypes.INTEGER,
allowNull: false
},
eventoId: {
type: DataTypes.INTEGER,
allowNull: false
},
nota: {
type: DataTypes.INTEGER,
allowNull: false
},
comentario: {
type: DataTypes.STRING,
allowNull: true
}
});

module.exports = Feedback;
