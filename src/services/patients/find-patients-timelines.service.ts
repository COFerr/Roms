import { patientRepository } from "../../database/repositories/patient.repository";

export async function findPatientsTimelinesservice(id : string){
    try{
        const patient = await patientRepository.findPatientByID(id)

        if(!patient){
            return{
                statusCode : 404,
                message : "Patient not found",
                data : null
            }
        }
        
        const timelines = patient.timelines

        return {
            statusCode : 200,
            message : "Timelines found successfully!",
            data : timelines
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