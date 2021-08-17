'use strict'

const mongoose = require('mongoose')

module.exports= mongoose.model('Factura',mongoose.Schema({
    Name:String,
    Address:String,
    Date:Date,
    Total:Number,
    PaymentMethod:String,
    Details:[{
        Quantity:Number,
        Price:Number,
        Subtotal:Number, 
        Product:String,
    }]
}))

