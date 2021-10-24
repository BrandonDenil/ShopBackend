'use strict'

const mongoose = require('mongoose')

module.exports = mongoose.model('Administrador',mongoose.Schema({
    Usuario:String,
    Password:String,
    Nombre:String,
}))