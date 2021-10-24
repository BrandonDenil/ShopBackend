'use strict'

const mongoose = require('mongoose')

module.exports = mongoose.model('Usuario',mongoose.Schema({
    Correo:String,
    Password:String,
    Nombre:String,
    Apellido:String,
    VerificacionCorreo:Boolean, 
}))