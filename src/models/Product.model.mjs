'use strict'
import mongoose from "mongoose"

export const ProductModel = mongoose.model('Product',mongoose.Schema({
    name:String,
    price:String,
    quantity:Number, 
    description:String,
    category:mongoose.ObjectId,
    brand:String,
    details:[{
        title:String,
        description:String
    }],
    images:[{
        name:String,
        url:String
    }],
    discount:{
        total:Number,
        percentage:Number,
        dateBegin:Date,
        dateEnd:Date,
        code:String
    },
    reviews: [{
        comment: String,
        score: String,
        user: mongoose.ObjectId,
        createdAt: Date,
    }],
}))