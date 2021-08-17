'use strict'

const mongoose = require('mongoose')

module.exports= mongoose.model('Product',mongoose.Schema({
    Name:String,
    Price:String,
    Quantity:Number, 
    Description:String,
    Category:mongoose.ObjectId,
    Images:[{
        Name:String,
        Path:String
    }],
    Discount:{
        Total:Number,
        StartDate:Date,
        FinalDate:Date,
        Code:String
    },
    Reviews: [{
        Comment: String,
        Score: String,
        User: mongoose.ObjectId
    }],
}))