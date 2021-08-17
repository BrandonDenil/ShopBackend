'use strict'
const cookieParser = require('cookie-parser')
const session = require('express-session')
const cors = require("cors")
const nodemailer = require('nodemailer')
const fileUpload = require('express-fileupload')
const express = require("express")


class ServerConfiguration{

    constructor(app){
        this.app=app
    }

    load(){
        this.app.use(fileUpload());
        this.app.use(express.json())
        this.app.use(cookieParser());
        this.app.use(session({
            secret: process.env.SESSION_KEY,
            resave: false,
            saveUninitialized: true
        }))
        this.app.use(cors({
            origin: 'http://127.0.0.1:3000',
            methods: "GET, PUT,POST,DELETE",
            credentials: true
        }))
    }
}

module.exports=ServerConfiguration