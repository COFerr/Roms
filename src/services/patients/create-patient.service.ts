import { patientRepository } from "../../database/repositories/patient.repository";
import { userRepository } from "../../database/repositories/user.repository";
import { IPatient } from "../../interfaces/patient.interface";

export async function createPatientService(payload : IPatient){
    try{

        const user = await userRepository.findUserById(JSON.stringify(payload.userId).split('"')[1])
        console.log("create-patient-service : " + payload)

        if(!user){
            return{
                statusCode: 404,
                message: "User not found.",
                data: null
            }
        }

        const newPatient = await patientRepository.createPatient(payload)
        user.patients.push(newPatient.id)
        user.save()

        return{
            statusCode: 201,
            message: "Patient created successfully!",
            data: newPatient
        }
    }
    catch(Error : any){
        return{
            statusCode: Error.message ? 404 : 500,
            message: Error.message || "Internal server error",
            data: null
        }
    }
}