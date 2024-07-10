'use strict'

import mongoose from "mongoose"

export const BrandModel = mongoose.model('Brand',mongoose.Schema({
    Name:String
}))