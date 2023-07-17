import { patientRepository } from "../../database/repositories/patient.repository";

export async function findPatientByIdService(id : string){
    try{
        const patient  = await patientRepository.findPatientByID(id)

        return{
            statusCode: 200,
            message  : "Patient found successfully!",
            data : patient
        }
    }
    catch(Error : any){
        return{
            statusCode : Error.message ? 400 : 500,
            message : Error.message || "Internal Server Error.",
            data : null
        }
    }
}