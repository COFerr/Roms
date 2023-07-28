import { patientRepository } from "../../database/repositories/patient.repository";

export async function updatePatientService(id: string, payload: any){
    try{

        const patientUpdated = await patientRepository.updatePatient(id, payload)

        return{
            statusCode: 200,
            message: "Patient updated successfully!",
            data: patientUpdated
        }
    }
    catch(Error : any){
        return{
            statusCode: Error.message ? 400 : 500,
            message: Error.message || "Internal server error",
            data : null
        }
    }
}