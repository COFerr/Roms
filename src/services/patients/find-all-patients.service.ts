import { patientRepository } from "../../database/repositories/patient.repository";

export async function findPatientService(){
    try{
        const allPatients = await patientRepository.findPatients()

        return{
            statusCode: 200,
            message: "Patient successfully found",
            data: allPatients
        }
    }
    catch(Error : any){
        return{
            statusCode: 400,
            message: "Internal server error.",
            data: null
        }
    }
}