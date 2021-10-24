'use strict'

const mongoose = require('mongoose')

module.exports= mongoose.model('Marca',mongoose.Schema({
    Nombre:String
}))