import { userRepository } from "../../database/repositories/user.repository";

export async function updateUserService(id: string, payload : any){
    try{
        const userUpdated = await userRepository.updateUser(id, payload)

        return{
            statusCode: 200,
            message: "User Successfully updated!",
            data: userUpdated
        }
    }
    catch(Error : any){
        return{
            statusCode : Error.message ? 400 : 500,
            message : Error.message || "Internal Server Error",
            data : null
        }
    }
}