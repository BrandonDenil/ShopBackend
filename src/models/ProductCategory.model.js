'use strict'

const mongoose = require('mongoose')

module.exports= mongoose.model('Category',mongoose.Schema({
    Category:String
}))