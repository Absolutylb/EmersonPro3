const express = require('express');
const app = express();
const feedbackRoutes = require('./routes/feedbackRoutes');
const relatoriosRoutes = require('./routes/relatoriosRoutes');
const eventoRoutes = require('./routes/eventoRoutes');
const participanteRoutes = require('./routes/participanteRoutes');
const palestranteRoutes = require('./routes/palestranteRoutes');
const errorHandler = require('./utils/errorHandler');

app.use(express.json());

app.use('/eventos', feedbackRoutes);
app.use('/eventos', relatoriosRoutes);
app.use('/eventos', eventoRoutes);
app.use('/participantes', participanteRoutes);
app.use('/palestrantes', palestranteRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Servidor rodando na porta ${PORT}`);
});
