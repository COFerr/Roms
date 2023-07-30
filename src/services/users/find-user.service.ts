import { userRepository } from "../../database/repositories/user.repository";

export async function findUsersByEmailService(email : string){
    try{
        const users  = await userRepository.findUserByEmail(email)

        return {
            statusCode: 200,
            message: "Users succesfully found!",
            data: users            
        }
    }
    catch(Error : any){
        return{
            statusCode : Error.message ? 400 : 500,
            message: Error.message || "Internal server error",
            data: null
        }
    }
}