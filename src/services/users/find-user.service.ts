import { userRepository } from "../../database/repositories/user.repository";

export async function findUsersService(filter? : any){
    try{
        const users  = await userRepository.findUsers(filter)

        return {
            statusCode: 200,
            data: users,
            message: "Users succesfully found!"
        }
    }
    catch(Error : any){
        return{
            statusCode : Error.message ? 400 : 500,
            data: null,
            message: Error.message || "Internal server error"
        }
    }
}