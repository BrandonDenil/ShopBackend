'use strict'
const ProductoRoutes = require('./src/routes/Producto.route')

const loadRoutes = (app) => {
    app.use('/', ProductoRoutes)
}

module.exports = loadRoutes