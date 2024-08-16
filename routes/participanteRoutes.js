const express = require('express');
const router = express.Router();
const participanteController = require('../controllers/participanteController');

router.post('/inscrever', participanteController.inscreverParticipante);
router.get('/meus-eventos', participanteController.getEventosInscritos);

module.exports = router;
