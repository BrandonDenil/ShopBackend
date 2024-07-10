'use strict'

const mongoose = require('mongoose')


//todo: fix 
module.exports = mongoose.model('Quote', mongoose.Schema({
    Nombre: String,
    Correo: String,
    Motivo: String,
    Mensaje: String,
    Fecha: Date
}))
