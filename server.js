require('dotenv').config()
const express = require("express")
const MongoBD = require('./src/db/conection')
const Route= require('./routes')
const ServerConfiguration = require('./server.configuration')

const app = express()
const port = process.env.PORT || 3000
Route(app)
ServerConfiguration(app)
MongoBD.conectar(()=>{
    app.listen(port, () => {
        console.log(`Server running on port ${port}`)
    })
})
