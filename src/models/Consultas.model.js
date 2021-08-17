'use strict'

const mongoose = require('mongoose')

module.exports = mongoose.model('Consultation',mongoose.Schema({
    Name:String,
    ObjectId:mongoose.ObjectId,
    Message:String
}))
