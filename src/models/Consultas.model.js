'use strict'

const mongoose = require('mongoose')

module.exports = mongoose.model('Consulta', mongoose.Schema({
    Nombre: String,
    Correo: String,
    Motivo: String,
    Mensaje: String,
    Fecha: Date
}))
