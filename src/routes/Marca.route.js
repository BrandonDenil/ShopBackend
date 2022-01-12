'use strict'

const MarcaController = require('../controllers/marca.controller')
const express = require('express')
const router = express.Router()

router.get('/', MarcaController.listarMarcas)
router.post('/', MarcaController.nuevaMarca)
router.put('/', MarcaController.editarMarca)


module.exports = router