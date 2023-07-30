import { Request, Response } from "express";
import { createUserService } from "../services/users/create-user.service";
import { findUsersService } from "../services/users/find-user.service";
import { updateUserService } from "../services/users/update-user.service";
import { deleteUSerService } from "../services/users/delete-user.service";
import { findUserPatiensService } from "../services/users/find_user_patients.service";

export class UserController {
    static async createUser(req: Request, res: Response) {

        const payload = req.body;

        console.log("user controler : " + JSON.stringify(payload))
        const result = await createUserService(payload)

        const { statusCode, message, data } = result;

        res.status(statusCode).json({
            message,
            data
        })
    }

    static async findUSers(req: Request, res: Response) {

        const filter = req.query;
        const result = await findUsersService(filter);
        const { statusCode, message, data } = result;
        res.status(statusCode).json({
            message,
            data            
        })
    }

    static async updateUser(req: Request, res: Response){
        const {id} = req.params
        const payload = req.body
        const result = await updateUserService(id, payload)
        const { statusCode, message, data} = result
        res.status(statusCode).json({
            message,
            data
        })
    }
    static async deleteUser(req : Request, res : Response){
        const{id} = req.params
        const result = await deleteUSerService(id)
        const {statusCode, message, data} = result
        res.status(statusCode).json({
            message,
            data
        })
    }

    static async findUserPatients(req : Request, res : Response){
        const {id} = req.params

        const result = await findUserPatiensService(id)
        const{statusCode, message, data} = result

        res.status(statusCode).json({
            message,
            data
        })
    }
}
