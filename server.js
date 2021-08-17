require('dotenv').config()
const express = require("express")
const MongoBD = require('./src/db/conection')
const Route= require('./routes')
const ServerConfiguration = require('./server.configuration')

class Server {

    constructor() {
        this.app = express()
        this.port= process.env.PORT || 3000
        new Route(this.app).load()
        new ServerConfiguration(this.app).load()
    }

    start(){
        new MongoBD().conectar(()=>{
            this.app.listen(this.port, () => {
                console.log(`Server running on port ${this.port}`)
            })
        })
    }
}

new Server().start()