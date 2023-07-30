import { userRepository } from "../../database/repositories/user.repository";

export async function findUserPatiensService(id:string, query?: any) {
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

        const page = parseInt(query.page) || 1;
        const pageSize = parseInt(query.pageSize) || 5;

        const startIndex = (page - 1) * pageSize;
        const endIndex = page * pageSize;

        const patientsPaginated = patients.slice(startIndex, endIndex);
        
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