'use strict'

const mongoose = require('mongoose')  

module.exports = class MongoBD{

    constructor(){
    }

    async conectar(exec){
        try{
            await mongoose.connect("mongodb+srv://brandon14998:56968@bdcluster.ucomh.mongodb.net/DB_COMMERCE?retryWrites=true&w=majority",{
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            console.log("MongoDB Conectado")
            exec()
        }catch(e){
            console.log(e)
            console.log("Error al conectar a MongoDB")
        }
    }
}
