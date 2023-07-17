import { userRepository } from "../../database/repositories/user.repository";

export async function deleteUSerService(id : string){
    try{
        const deletedUser = await userRepository.deleteUSer(id);

        return{
            statusCode: 200,
            message: "USer Deleted Successfully!",
            data: deletedUser
        }
    }
    catch(Error : any){
        return{
            statusCode: Error.message ? 400 : 500,
            message : Error.message || "Internal Server Error",
            data : null
        }
    }
}