'use strict'
import {ProductService} from '../services/products/product.service.mjs'


export class ProductController {

    static async listProduct(req,res){
        const  products = await ProductService.listProducts();
        console.log(products)
        res.status(200).json(products)
    }

    static async createProduct(req,res){
        const newProduct = await ProductService.createProduct(req.body)
        res.status(200).json(newProduct)
    }
}


// exports.listarProductosCategoria = async (req, res) => {
//     try{
//         const productos = await listarProductoPorCategoria(req.params.categoria);
//         res.status(200).json(productos)
//     }catch(Exeption ){
//         res.status(500).json({ error: true, message: error || "Error interno" })
//     }
// }

// exports.nuevoProducto = async (req, res) => {

//     const _newProducto = crearProducto(req.body)
//     _newProducto.save((error, result) => {
//         return res.json({ message: "OK", error: false, id: result.id })
//     })
// }

// exports.agregarImagenesProducto = async (req, res) => {
//     const file = req.files.file
//     const path = `storage/${req.params.id}`
//     let images = []
//     for (let i = 0; i < file.length; i++) {
//         fs.mkdir(`${path}`, err => {
//             file[i].mv(path.resolve(`${path}/${file[i].name}`), err => {
//                 images.push({ Url: `${path}/${file[i].name}`, Nombre: file[i].name })
//             })
//         })
//     }

//     return res.status(200).json({ Message: "OK", error: false })
// }

// exports.actualizarProducto = async (req, res) => {
//     const _newProducto = Producto.findByIdAndUpdate(req.params.id, {
//         Nombre: req.body.Nombre,
//         Precio: req.body.Precio,
//         Cantidad: req.body.Cantidad,
//         Descripcion: req.body.Descripcion,
//         Categoria: req.body.Categoria,
//         Marca: req.body.Marca
//     })

//     _newProducto.save().then(saveDoc => {
//         res.status(200).send({ message: "Elemento editado!", error: false })
//     })
// }

// exports.eliminarProducto = async (req, res) => {
//     if (!req.params.id) {
//         return res.status(500).send({ message: "Error en parametros", error: true })
//     }
//     Producto.findByIdAndDelete(req.params.id, () => {
//         return res.status(200).send({ message: "Elemento eliminado", error: false })
//     })
// }
