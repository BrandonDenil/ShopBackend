const CategoriaProducto = require('../models/CategoriaProducto.model')

exports.listarCategorias = (req, res) => {
    CategoriaProducto.find({}).then(result => {
        res.status(200).json({ error: false, data: result })
    }).catch(_error => {
        res.status(500).json({ error: true, message: _error || "Error al listar categorias" })
    })
}

exports.nuevaCategoria = (req, res) => {
    const _categoria = new CategoriaProducto({ Categoria: req.body.categoria, Estado: true })
    _categoria.save(error => {
        if (error) res.status(500).json({error:true, message: "ERROR"})
    })
}

exports.editarCategoria = (req, res) => {
    CategoriaProducto.findByIdAndUpdate(req.params.id, {Estado: req.body.estado, Categoria: req.body.categoria}).then(error=>{
        console.log(error)
        if(error) res.status(500).json({message:"Error al editar", error:true})
        else res.status(200).json({message:"Editado con éxito", error:false})
    })
}
