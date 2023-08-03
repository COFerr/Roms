import { ObjectId } from "bson";
import Patient from "../entities/patient.entity";
import { IPatient } from "../../interfaces/patient.interface";


class PatientRepository{
    async createPatient(payload : IPatient){
        return await Patient.create(payload);
    }
    async deletePatient(id : string){
        return await Patient.deleteOne(new ObjectId(id))
    }
    async updatePatient(id : string, payload: any){
        return await Patient.updateOne({_id : new ObjectId(id)}, payload)
    }
    async findPatients(){
        return await Patient.find()
    }
    async findPatientByID(id : string){
        return await  Patient.findById(new ObjectId(id)).populate("timelines")
    }
}

export const patientRepository = new PatientRepository()