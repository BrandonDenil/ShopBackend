'use strict'

import mongoose from "mongoose"

export const OrderModel = mongoose.model('Order',mongoose.Schema({
    Account:mongoose.ObjectId,
    State:{
        typeof:String,
        default:"Pending"
    },
    AddressDelivery:String,
    DeliveryCost:Number,
    createdAt: Date
}))