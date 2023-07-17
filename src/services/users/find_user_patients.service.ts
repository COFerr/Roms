import { userRepository } from "../../database/repositories/user.repository";

export async function findUserPatiensService(id:string) {
    try{
        const user = await userRepository.findUserById(id)
        
        if(!user){
            return{
                statusCode: 404,
                message : "User not found!",
                data : null
            }
        }

        const patients = user.patients
        
        return{
            statusCode : 200,
            message : "Patients found successfully!",
            data : patients
        }
    }
    catch(Error : any){
        return{
            statusCode : Error.message ? 400 : 500,
            message : Error.message || "Internal server error.",
            data : null
        }
    }
}