'use strict'

import mongoose from "mongoose"

export const UserModel = mongoose.model('User',mongoose.Schema({
    Email:String,
    Password:String,
    Name:String,
    LastName:String,
    EmailVerification:Boolean, 
    createdAt:Date
}))