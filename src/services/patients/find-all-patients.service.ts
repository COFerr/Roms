import { patientRepository } from "../../database/repositories/patient.repository";

export async function findPatientService(){
    try{
        const allPatients = await patientRepository.findPatients()

        return{
            statusCode: 200,
            message: "Patients successfully found",
            data: allPatients
        }
    }
    catch(Error : any){
        return{
            statusCode: Error.message ? 400 : 500,
            message: Error.message || "Internal server error.",
            data: null
        }
    }
}