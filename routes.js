'use strict'
const ProductoRoutes = require('./src/routes/Producto.route')
const CategoriaProducto = require('./src/routes/CategoriaProducto.route')
const Marca = require('./src/routes/Marca.route')

const loadRoutes = (app) => {
    app.use('/producto', ProductoRoutes)
    app.use('/categoria_producto', CategoriaProducto)
    app.use('/marca', Marca)
}

module.exports = loadRoutes