import { ProductModel } from "../../models/Product.model.mjs"
// import { ProductCategoryModel } from "../../models/ProductCategory.model.js"

import {
    listProductsQuery,
    listProductByCategoryQuery
} from './product.queries.mjs';


export class ProductService {
    constructor() { }

    static async parseDataProduct(data) {
        return data.map(item => {
            item.Categoria = item._category[0].Category
            item.Marca = item._brand[0].Name
            return item
        })
    }

    static async listProducts() {
        const products = await ProductModel.aggregate(listProductsQuery());
        return products
    }

    // static listProductsByCategory(category) {
    //     return ProductCategoryModel.aggregate(listProductByCategoryQuery(category))
    //         .then(data => data)
    //         .catch(err => [])
    // }

    static async createProduct(data) {
        const newProduct = new ProductModel({
            name: data.name,
            price: data.price,
            quantity: data.quantity,
            description: data.description,
            category: data.category,
            brand: data.brand,
            details: data.details,
            images: data.images,
            discount: data.discount,
            reviews: data.reviews
        })

        await newProduct.save();

        return newProduct;
    }

    static updateProduct() {
        const _newProducto = Producto.findByIdAndUpdate(req.params.id, {
            Name: req.body.Name,
            Price: req.body.Price,
            Quantity: req.body.Quantity,
            Description: req.body.Description,
            Category: req.body.Category,
            Brand: req.body.Brand
        })

        _newProducto.save().then(saveDoc => {
            res.status(200).send({ message: "Elemento editado!", error: false })
        })
    }

    static deleteProduct(id) {
        Producto.findByIdAndDelete(id, () => {
            return res.status(200).send({ message: "Elemento eliminado", error: false })
        })
    }
}
