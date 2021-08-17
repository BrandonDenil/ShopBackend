'use strict'

const mongoose = require('mongoose')

module.exports = mongoose.model('Administrador',mongoose.Schema({
    User:String,
    Password:String,
    Name:String,
}))