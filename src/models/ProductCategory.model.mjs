'use strict'

import mongoose from "mongoose"

export const ProductCategoryModel = mongoose.model('Category',mongoose.Schema({
    Category:String,
    State:Boolean
}))