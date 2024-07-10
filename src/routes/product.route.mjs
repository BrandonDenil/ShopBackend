'use strict'

import { ProductController } from '../controllers/product.controller.mjs';

export class ProductRouter{

    static subscribe(app){
        
        app.get('/products', ProductController.listProduct);
        app.post('/products', ProductController.createProduct);
        app.patch('/products/:id',ProductController.updateProduct);
        app.delete('/products/:id',ProductController.deleteProduct);
    }
}
