'use strict'
const Marca = require('../models/Marca.model')

exports.listarMarcas = (req, res) => {
    Marca.find({}).then(result => {
        res.status(200).json({ error: false, data: result })
    }).catch(error => {
        res.status(500).json({ error: true })
    })
}

exports.nuevaMarca = (req, res) => {
    const _marca = new Marca({ Nombre: req.body.Nombre })
    _marca.save(error => {
        if (error) res.status(500).json({ error: true })
        else res.status(200).json({ error: false })
    })
}

exports.editarMarca = (req, res) => {
    Marca.findByIdAndUpdate(req.params.id, { Nombre: req.body.nombre }).then(error => {
        if (error) res.status(500).json({ message: "error" })
        else res.status(200).json({ message: "OK" })
    })
}