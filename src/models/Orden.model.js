'use strict'

const mongoose = require('mongoose')

module.exports = mongoose.model('Orden',mongoose.Schema({
    Cuenta:mongoose.ObjectId,
    Estado:{
        typeof:String,
        default:"Pendiente"
    },
    DireccionDeEnvio:String,
    CostoDeEnvio:Number
}))