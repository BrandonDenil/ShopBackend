'use strict'
const cookieParser = require('cookie-parser')
const session = require('express-session')
const cors = require("cors")
const nodemailer = require('nodemailer')
const fileUpload = require('express-fileupload')
const express = require("express")

module.exports = (app) => {
    app.use(fileUpload());
    app.use(express.json())
    app.use(cookieParser());
    app.use(session({
        secret: "my secrete key",
        resave: false,
        saveUninitialized: true
    }))
    app.use(cors({
        origin: 'http://127.0.0.1:3000',
        methods: "GET, PUT,POST,DELETE",
        credentials: true
    }))
}

