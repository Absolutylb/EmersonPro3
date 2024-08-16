const db = require('../config/db');

exports.getEventoMaisPopular = async (req, res) => {
try {
const [evento] = await db.query(
`SELECT e.id, e.titulo, COUNT(p.evento_id) as total_participantes 
FROM eventos e
JOIN participantes_eventos p ON e.id = p.evento_id
GROUP BY e.id 
ORDER BY total_participantes DESC 
LIMIT 1`
);
res.status(200).json(evento);
} catch (error) {
res.status(500).json({ error: 'Erro ao buscar o evento mais popular.' });
}
};

exports.getPalestranteMaisAtivo = async (req, res) => {
try {
const [palestrante] = await db.query(
`SELECT p.id, p.nome, COUNT(e.id) as total_eventos 
FROM palestrantes p
JOIN eventos_palestrantes ep ON p.id = ep.palestrante_id
JOIN eventos e ON e.id = ep.evento_id
GROUP BY p.id 
ORDER BY total_eventos DESC 
LIMIT 1`
);
res.status(200).json(palestrante);
} catch (error) {
res.status(500).json({ error: 'Erro ao buscar o palestrante mais ativo.' });
}
};
