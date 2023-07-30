import { Request, Response } from "express";
import { createUserService } from "../services/users/create-user.service";
import { findUsersByEmailService } from "../services/users/find-user.service";
import { updateUserService } from "../services/users/update-user.service";
import { deleteUSerService } from "../services/users/delete-user.service";
import { findUserPatiensService } from "../services/users/find_user_patients.service";

export class UserController {
    static async createUser(req: Request, res: Response) {

        const payload = req.body;

        const result = await createUserService(payload)

        const { statusCode, message, data } = result;

        res.status(statusCode).json({
            message,
            data
        })
    }

    static async findUSers(req: Request, res: Response) {

        const {email} = req.body;
        const result = await findUsersByEmailService(email);
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
        const page = req.query

        const result = await findUserPatiensService(id, page)
        const{statusCode, message, data} = result

        res.status(statusCode).json({
            message,
            data
        })
    }
}
