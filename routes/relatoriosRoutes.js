const express = require('express');
const router = express.Router();
const relatoriosController = require('../controllers/relatoriosController');

router.get('/mais-popular', relatoriosController.getEventoMaisPopular);
router.get('/palestrante-mais-ativo', relatoriosController.getPalestranteMaisAtivo);

module.exports = router;
