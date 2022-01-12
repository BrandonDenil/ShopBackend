'use strict'

const ProductoCategoria = require("../controllers/categoriaProducto.controller")
const express = require('express')
const router = express.Router()

router.get('/', ProductoCategoria.listarCategorias)
router.post('/', ProductoCategoria.nuevaCategoria)
router.put('/', ProductoCategoria.editarCategoria)


module.exports = router