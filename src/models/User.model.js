'use strict'

const mongoose = require('mongoose')

module.exports = mongoose.model('User',mongoose.Schema({
    Email:String,
    Password:String,
    Name:String,
    LastName:String,
    EmailVerification:Boolean, 
}))