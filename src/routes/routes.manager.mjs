import { ProductRouter } from "./product.route.mjs";

export class RoutesManager{

    static register(app){

        ProductRouter.subscribe(app)
    }
}