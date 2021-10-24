'use strict'
const cookieParser = require('cookie-parser')
const session = require('express-session')
const cors = require("cors")
const fileUpload = require('express-fileupload')
const express = require("express")
const path = require('path');
const hbs = require('hbs');
const nodemailer = require('nodemailer')


module.exports = (app) => {
    app.use(cors({
        origin: 'http://localhost:3000',
        methods: "GET, PUT,POST,DELETE",
        credentials: true
    }))
    app.use(fileUpload());
    app.use(express.json())
    app.use(cookieParser());
    app.use(session({
        secret: "my secrete key",
        resave: false,
        saveUninitialized: true
    }))

}

