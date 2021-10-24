'use strict'

const MarcaController = require('../controllers/marca.controller')
const express = require('express')
const router = express.Router()

router.get('/', MarcaController.listarMarcas)

module.exports = router