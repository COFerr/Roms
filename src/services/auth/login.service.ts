import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";

import { userRepository } from "../../database/repositories/user.repository";

export async function longinService(data : {email : string ; password : string}){
    try{
        const user = await userRepository.findUserByEmail(data.email)
        console.log(user + " " + data.password)

        if(!user){
            return{
                statusCode : 404,
                message: "Invalid email/password",
                data : null
            }
        }
        
        const isValidPassword = bcrypt.compareSync(data.password, user.password)
        if(!isValidPassword){
            return{
                statusCode : 404,
                message : "Invalid email/password",
                data : null
            }
        }
        const payload = {
            name : user.name,
            email : user.email,
            id : user._id
        }
        const options = {
            expiresIn : "1h",
        }
        const secretKey = process.env.SECRET_KEY as string

        const token = jwt.sign(payload, secretKey, options)

        return{
            statusCode : 200,
            message : "Logged in!",
            data : { token }
        }
    }
    catch(Error : any){
        console.log(Error)

        return{
            statusCode : Error.message ? 404 : 500,
            message : Error.message || "Internal Server Error",
            data : null,
        };
    }
}