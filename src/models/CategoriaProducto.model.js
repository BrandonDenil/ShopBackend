'use strict'

const mongoose = require('mongoose')

module.exports= mongoose.model('Categoria',mongoose.Schema({
    Categoria:String
}))