'use strict'
import { ProductService } from '../services/products/product.service.mjs'


export class ProductController {

    static async listProduct(req, res) {
        const products = await ProductService.listProducts();
        res.status(200).json(products)
    }

    static async createProduct(req, res) {
        const data = req.body;

        const newProduct = await ProductService.createProduct(req.body)
        res.status(200).json(newProduct)
    }

    static async updateProduct(req, res) {
        const { id } = req.params;
        const data = req.body;
        await ProductService.updateProduct(id, data);
        res.status(200).json("ok")
    }

    static async deleteProduct(req,res) {
        const id = req.params.id;
        if (!id) {
            return res.status(500).send({ message: "Error en parametros", error: true })
        }
        await ProductService.deleteProduct(id)
        res.status(200).json("ok")
    }
}
