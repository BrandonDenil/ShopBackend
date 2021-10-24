'use strict'
const Producto = require('../models/Producto.model')

exports.listarProductos = (req, res) => {
    if (!req.params.categoria) {
        res.status(400).send({ message: "Categoria no puede estar vacio" })
    }

    Producto.find({ Categoria: req.params.categoria },{Nombre:1,Precio:1,Cantidad:1, Color:1, Marca:1}).then(data => {
        res.status(200).send(data)
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Error al obtener datos"
        })
    })

}

exports.nuevoProducto = (req, res) => {

}

exports.actualizarProducto = (req, res) => {

}

exports.eliminarProducto = (req, res) => {

}
