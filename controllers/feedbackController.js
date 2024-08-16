const db = require('../config/db');

exports.enviarFeedback = async (req, res) => {
const { participanteId, eventoId, nota, comentario } = req.body;

try {
await db.query(
'INSERT INTO feedbacks (participante_id, evento_id, nota, comentario) VALUES (?, ?, ?, ?)',
[participanteId, eventoId, nota, comentario]
);
res.status(201).json({ message: 'Feedback enviado com sucesso!' });
} catch (error) {
res.status(500).json({ error: 'Erro ao enviar feedback.' });
}
};
