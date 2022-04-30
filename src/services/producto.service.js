const Producto = require('../models/Producto.model')
const Categoria = require('../models/CategoriaProducto.model')
const {
    productoCategoriasQuery,
    listarProductos
} = require('../constants/queries/producto.queries')

const parseDataListadoProductos = data => data.map(item => {
    item.Categoria = item._categoria[0].Categoria
    item.Marca = item._marca[0].Nombre
    return item
})

exports.listarProductos = () => {
    return Producto.aggregate(listarProductos()).then(data =>
        parseDataListadoProductos(data)
    ).catch(error => [])
}

exports.listarProductoPorCategoria = (categoria) => {
    return Categoria.aggregate(productoCategoriasQuery(categoria))
        .then(data => data)
        .catch(err => [])
}

exports.crearProducto = (data) => {
    return new Producto({
        Nombre: data.Nombre,
        Precio: data.Precio,
        Cantidad: data.Cantidad,
        Descripcion: data.Descripcion,
        Categoria: data.Categoria,
        Marca: data.Marca,
        DetallesTecnicos: data.Detalles
    })

}