import { UserModel } from "../../models/User.model.mjs"


export class UserService {

    constructor() { }

    static async getUser(userId) {
        const user = await UserModel.findById(userId);
        return user
    }

    static async createUser(data) {
        const newUser = new UserModel({
            name: data.name,
            price: data.price,
            quantity: data.quantity,
            description: data.description,
            category: data.category,
            brand: data.brand,
            details: data.brand,
            images: data.images,
        })

        await newUser.save();
        await this.uploadImages();

        return newUser;
    }

    static udpateUser() { }

    static async uploadImages (){}
}