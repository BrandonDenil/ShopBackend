'use strict'

const mongoose = require('mongoose')

module.exports= mongoose.model('Producto',mongoose.Schema({
    Nombre:String,
    Precio:String,
    Cantidad:Number, 
    Descripcion:String,
    Categoria:mongoose.ObjectId,
    Marca:mongoose.ObjectId,
    DetallesTecnicos:[{
        Titulo:String,
        Descripcion:String
    }],
    Imagenes:[{
        Nombre:String,
        Url:String
    }],
    Descuento:{
        Total:Number,
        FechaInicio:Date,
        FechaFinal:Date,
        Codigo:String
    },
    Resenias: [{
        Comentario: String,
        Puntaje: String,
        Usuario: mongoose.ObjectId
    }],
}))