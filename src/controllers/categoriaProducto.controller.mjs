import { ProductCategoryModel } from "../models/ProductCategory.model.mjs"

exports.listarCategorias = (req, res) => {
    CategoriaProducto.find({}).then(result => {
        res.status(200).json({ error: false, data: result })
    }).catch(_error => {
        res.status(500).json({ error: true, message: _error || "Error al listar categorias" })
    })
}

exports.nuevaCategoria = (req, res) => {
    const _categoria = new CategoriaProducto({ Categoria: req.body.Categoria, Estado: true })
    _categoria.save((error, result) => {
        if (error) return res.status(500).json({ error: true, message: "ERROR" })
        else return res.status(200).json({ error: false, message: "OK", id: result.id })
    })
}

exports.editarCategoria = (req, res) => {
    CategoriaProducto.findByIdAndUpdate(req.params.Id, { Estado: req.body.Estado, Categoria: req.body.Categoria }).then(error => {
        console.log(error)
        if (error) res.status(500).json({ message: "Error al editar", error: true })
        else res.status(200).json({ message: "Editado con éxito", error: false })
    })
}
