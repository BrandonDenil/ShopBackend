'use strict'
import mongoose from "mongoose"

export const AdminModel = mongoose.model('Admin',mongoose.Schema({
    User:String,
    Password:String,
    Name:String,
}))