'use strict'

const ProductoController = require('../controllers/producto.controller')
const express = require('express');
const router = express.Router();

router.get('/:categoria', ProductoController.listarProductosCategoria)
router.get('/', ProductoController.listarProducto)
router.put('/:id', ProductoController.actualizarProducto)
router.post('/', ProductoController.nuevoProducto)
router.delete('/:id',ProductoController.eliminarProducto)

module.exports = router