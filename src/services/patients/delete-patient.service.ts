import { patientRepository } from "../../database/repositories/patient.repository";
import { ObjectId } from "bson";

export async function deletePatientservice(id: string){
    try{
        const patientRemoved = await patientRepository.deletePatient(id)

        return{
            statusCode: 200,
            message: "Patient successfully removed",
            data: patientRemoved
        }
    }
    catch(Error: any){
        return{
            statusCode: 400,
            message: "Internal server error",
            data: null
        }
    }
}