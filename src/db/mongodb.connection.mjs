'use strict'

import mongoose from "mongoose"
import { Singleton } from "../libraries/singleton.mjs"

class MongoDB{

    async connect(exec){
        try {
            await mongoose.connect('mongodb://admin:secret@localhost:27017/admin', {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            console.log("MongoDB connected")
            exec()
        } catch (e) {
            console.log(e)
            console.log("Error on connect to mongodb")
        }
    }
}

export const MongoDBInstance = new Singleton(MongoDB).getInstance()