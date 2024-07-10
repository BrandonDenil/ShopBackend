import { ProductRouter } from "./Product.route.mjs";

export class RoutesManager{

    static register(app){

        ProductRouter.subscribe(app)
    }
}