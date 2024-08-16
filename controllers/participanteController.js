const db = require('../config/db');

exports.inscreverParticipante = async (req, res) => {
const { participanteId, eventoId } = req.body;

try {
await db.query(
'INSERT INTO participantes_eventos (participante_id, evento_id) VALUES (?, ?)',
[participanteId, eventoId]
);

res.status(201).json({ message: 'Inscrição realizada com sucesso!' });
} catch (error) {
res.status(500).json({ error: 'Erro ao inscrever participante.' });
}
};

exports.getEventosInscritos = async (req, res) => {
const { participanteId } = req.query;

try {
const eventos = await db.query(
`SELECT e.id, e.titulo, e.data 
FROM eventos e
JOIN participantes_eventos pe ON e.id = pe.evento_id
WHERE pe.participante_id = ?`,
[participanteId]
);
res.status(200).json(eventos);
} catch (error) {
res.status(500).json({ error: 'Erro ao listar eventos.' });
}
};
