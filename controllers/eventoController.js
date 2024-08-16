const db = require('../config/db');

exports.criarEvento = async (req, res) => {
const { titulo, data, palestrantesId } = req.body;

try {
const [evento] = await db.query(
'INSERT INTO eventos (titulo, data) VALUES (?, ?)',
[titulo, data]
);

for (const palestranteId of palestrantesId) {
await db.query(
'INSERT INTO eventos_palestrantes (evento_id, palestrante_id) VALUES (?, ?)',
[evento.insertId, palestranteId]
);
}

res.status(201).json({ message: 'Evento criado com sucesso!' });
} catch (error) {
res.status(500).json({ error: 'Erro ao criar evento.' });
}
};

exports.editarEvento = async (req, res) => {
const { eventoId, titulo, data, palestrantesId } = req.body;

try {
await db.query(
'UPDATE eventos SET titulo = ?, data = ? WHERE id = ?',
[titulo, data, eventoId]
);

await db.query(
'DELETE FROM eventos_palestrantes WHERE evento_id = ?',
[eventoId]
);

for (const palestranteId of palestrantesId) {
await db.query(
'INSERT INTO eventos_palestrantes (evento_id, palestrante_id) VALUES (?, ?)',
[eventoId, palestranteId]
);
}

res.status(200).json({ message: 'Evento editado com sucesso!' });
} catch (error) {
res.status(500).json({ error: 'Erro ao editar evento.' });
}
};

exports.cancelarEvento = async (req, res) => {
const { eventoId } = req.body;

try {
await db.query('DELETE FROM eventos WHERE id = ?', [eventoId]);
res.status(200).json({ message: 'Evento cancelado com sucesso!' });
} catch (error) {
res.status(500).json({ error: 'Erro ao cancelar evento.' });
}
};
