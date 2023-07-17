import * as bcrypt from "bcrypt"

import { userRepository } from "../../database/repositories/user.repository"
import { IUser } from "../../interfaces/user.interface"

export async function createUserService(payload: IUser){
    try{
        const {password} = payload;

        const newUserData = {
            ...payload,
            password: await bcrypt.hash(password, 10)
        }

        const newUser = await userRepository.create(newUserData);

        return{
            statusCode: 200,
            data: newUser,
            message: "User created Sucessfully!"
        }
    }
    catch(Error : any){
        console.log(Error);
        
        return{
            statusCode: Error.message ? 400 : 500,
            message: Error.message || "Internal server error",
            data: null
        }
    }
}