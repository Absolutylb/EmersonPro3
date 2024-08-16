const express = require('express');
const router = express.Router();
const eventoController = require('../controllers/eventoController');

router.post('/criar', eventoController.criarEvento);
router.put('/editar', eventoController.editarEvento);
router.delete('/cancelar', eventoController.cancelarEvento);

module.exports = router;
