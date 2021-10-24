'use strict'

const mongoose = require('mongoose')

module.exports= mongoose.model('Factura',mongoose.Schema({
    Nombre:String,
    Direccion:String,
    Fecha:Date,
    Total:Number,
    MetodoDePago:String,
    Detalle:[{
        Cantidad:Number,
        Precio:Number,
        Subtotal:Number, 
        Producto:String,
    }]
}))

