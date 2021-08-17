'use strict'

const mongoose = require('mongoose')

module.exports = mongoose.model('Order',mongoose.Schema({
    Bill:mongoose.ObjectId,
    State:{
        typeof:String,
        default:"Pending"
    },
    ShippingAddress:String,
    ShippingCost:Number
}))