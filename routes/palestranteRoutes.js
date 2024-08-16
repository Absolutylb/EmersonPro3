const express = require('express');
const router = express.Router();
const palestranteController = require('../controllers/palestranteController');

router.post('/criar', palestranteController.criarPalestrante);

module.exports = router;
