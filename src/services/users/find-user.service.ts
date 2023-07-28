import { userRepository } from "../../database/repositories/user.repository";

export async function findUsersService(filter? : any){
    try{
        const users  = await userRepository.findUsers(filter)

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