'use strict'
import { UserService } from "../services/users/user.service.mjs"

export class UserController {


    static async getUser(req, res) {

        const { id } = req.params;
        const user = await UserService.getUser(id);
        return res.status(200).json(user)
    }

    static async createrUser(req, res) {
        const newUser = await UserService.createUser(req.body);
        return res.status(200).json(newUser);
 
    }
}