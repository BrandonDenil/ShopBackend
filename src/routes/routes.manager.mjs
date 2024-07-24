import { ProductRouter } from "./product.route.mjs";
import { UserRouter } from "./user.route.mjs";
export class RoutesManager{

    static register(app){
        ProductRouter.subscribe(app);
        UserRouter.subscribe(app);
    }
}