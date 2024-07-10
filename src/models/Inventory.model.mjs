'use strict'

import mongoose from "mongoose"

export const InventoryModel = mongoose.model('Inventory',mongoose.Schema({
    Name:String
}))

