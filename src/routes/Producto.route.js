'use strict'

const ProductoController = require('../controllers/producto.controller')
var express = require('express');
var router = express.Router();

router.get('/producto/:categoria', ProductoController.listarProductos)

module.exports = router