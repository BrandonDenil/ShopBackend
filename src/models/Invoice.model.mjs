'use strict'

import mongoose from "mongoose"

export const InvoiceModel = mongoose.model('Invoice',mongoose.Schema({
    Name:String,
    Address:String,
    Date:Date,
    Total:Number,
    PaymentMethod:String,
    Detail:[{
        Cuantity:Number,
        Price:Number,
        Subtotal:Number, 
        Product:String,
    }]
}))

