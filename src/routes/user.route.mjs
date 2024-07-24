'use strict'

import { UserController } from "../controllers/user.controller.mjs";

export class UserRouter{

    static subscribe(app){
        
        app.get('/user', UserController.getUser);
        app.post('/user', UserController.createrUser);

    }
}
