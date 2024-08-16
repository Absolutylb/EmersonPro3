const db = require('../config/db');

exports.criarPalestrante = async (req, res) => {
const { nome, especialidade } = req.body;

try {
await db.query(
'INSERT INTO palestrantes (nome, especialidade) VALUES (?, ?)',
[nome, especialidade]
);

res.status(201).json({ message: 'Palestrante criado com sucesso!' });
} catch (error) {
res.status(500).json({ error: 'Erro ao criar palestrante.' });
}
};
