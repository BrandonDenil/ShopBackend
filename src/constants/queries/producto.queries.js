exports.listarProductos = () => {
    return [
        { $lookup: { from: "categorias", localField: "Categoria", foreignField: "_id", as: "_categoria" } },
        { $lookup: { from: "marcas", localField: "Marca", foreignField: "_id", as: "_marca" } }
    ]
}

exports.productoCategoriasQuery = (categoria) => [
    { $match: { _id: ObjectId(categoria) } },
    {
        $lookup: { from: "productos", localField: "_id", foreignField: "Categoria", as: "_productos" }
    },
    {
        $lookup: { from: "marcas", localField: "_id", foreignField: "Marca", as: "_marcas" }
    },
    {
        $project: {
            "_id": 0,
            "Categoria": 1,
            "_productos.Nombre": 1,
            "_productos.Precio": 1,
            "_productos.Cantidad": 1,
            "_productos.Descripcion": 1,
            "_productos.Descuento": 1,
            "_productos.Resenias": 1,
            "_marcas.Nombre": 1
        }
    }
]