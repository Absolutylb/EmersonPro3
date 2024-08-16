const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const ParticipantesEventos = sequelize.define('ParticipantesEventos', {
eventoId: {
type: DataTypes.INTEGER,
allowNull: false
},
participanteId: {
type: DataTypes.INTEGER,
allowNull: false
}
});

module.exports = ParticipantesEventos;
