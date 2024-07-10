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

    static async updateProduct(id, data) {
        const newProduct = await Product.findByIdAndUpdate(id, {
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
        return;
    }

    static async deleteProduct(id) {
        const result = await ProductModel.findByIdAndDelete(id);
        return result
    }

    static addImagesToProduct(){
        // const file = req.files.file
        //     const path = `storage/${req.params.id}`
        //     let images = []
        //     for (let i = 0; i < file.length; i++) {
        //         fs.mkdir(`${path}`, err => {
        //             file[i].mv(path.resolve(`${path}/${file[i].name}`), err => {
        //                 images.push({ Url: `${path}/${file[i].name}`, Nombre: file[i].name })
        //             })
        //         })
        //     }
        
    }
}
