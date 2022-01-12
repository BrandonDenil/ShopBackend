'use strict'
const Producto = require('../models/Producto.model')
const Categoria = require('../models/CategoriaProducto.model')
const fs = require('fs')
const path = require('path')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId;

exports.listarProducto = (req, res) => {
    Producto.aggregate([
        { $lookup: { from: "categorias", localField: "Categoria", foreignField: "_id", as: "_categoria" } },
        { $lookup: { from: "marcas", localField: "Marca", foreignField: "_id", as: "_marca" } }
    ]).then(data => {
        const filteredData = data.map(item => {
            item.Categoria = item._categoria[0].Categoria
            item.Marca = item._marca[0].Nombre
            return item
        })
        res.status(200).json(filteredData)
    }).catch(error => {
        res.status(500).json({ error: true, message: error || "Error interno" })
    })
}

exports.listarProductosCategoria = (req, res) => {
    Categoria.aggregate([
        { $match: { _id: ObjectId(req.params.categoria) } },
        {
            $lookup: { from: "productos", localField: "_id", foreignField: "Categoria", as: "_productos" }
        },
        {
            $lookup: { from: "marcas", localField: "_id", foreignField: "Marca", as: "_marcas" }
        },
        {
            $project: {
                "_id": 0,
                "Categoria": 1,
                "_productos.Nombre": 1,
                "_productos.Precio": 1,
                "_productos.Cantidad": 1,
                "_productos.Descripcion": 1,
                "_productos.Descuento": 1,
                "_productos.Resenias": 1,
                "_marcas.Nombre": 1
            }
        }
    ])
        .then(data => {
            res.status(200).json(data)
        }).catch(err => {
            res.status(500).json({
                message:
                    err.message || "Error al obtener datos"
            })
        })

}

exports.nuevoProducto = async (req, res) => {

    const _newProducto = new Producto({
        Nombre: req.body.Nombre,
        Precio: req.body.Precio,
        Cantidad: req.body.Cantidad,
        Descripcion: req.body.Descripcion,
        Categoria: req.body.Categoria,
        Marca: req.body.Marca,
        DetallesTecnicos: req.body.Detalles
    })

    _newProducto.save((error, result) => {
        return res.json({ message: "OK", error: false, id: result.id })
    })
}

exports.agregarImagenesProducto = async (req, res) => {
    const file = req.files.file
    const path = `storage/${req.params.id}`
    let images = []
    for (let i = 0; i < file.length; i++) {
        fs.mkdir(`${path}`, err => {
            file[i].mv(path.resolve(`${path}/${file[i].name}`), err => {
                images.push({ Url: `${path}/${file[i].name}`, Nombre: file[i].name })
            })
        })
    }

    return res.status(200).json({ Message: "OK", error: false })
}

exports.actualizarProducto = async (req, res) => {
    const _newProducto = Producto.findByIdAndUpdate(req.params.id, {
        Nombre: req.body.Nombre,
        Precio: req.body.Precio,
        Cantidad: req.body.Cantidad,
        Descripcion: req.body.Descripcion,
        Categoria: req.body.Categoria,
        Marca: req.body.Marca
    })

    _newProducto.save().then(saveDoc => {
        res.status(200).send({ message: "Elemento editado!", error: false })
    })
}

exports.eliminarProducto = async (req, res) => {
    if (!req.params.id) {
        return res.status(500).send({ message: "Error en parametros", error: true })
    }
    Producto.findByIdAndDelete(req.params.id, () => {
        return res.status(200).send({ message: "Elemento eliminado", error: false })
    })
}
