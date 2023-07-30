import { Request, Response } from "express";
import { ObjectId } from "bson";
import { createPatientService } from "../services/patients/create-patient.service";
import { deletePatientservice } from "../services/patients/delete-patient.service";
import { updatePatientService } from "../services/patients/update-patient.service";
import { findPatientService } from "../services/patients/find-all-patients.service";
import { findPatientByIdService } from "../services/patients/find-one-patient.service";
import { findPatientsTimelinesservice } from "../services/patients/find-patients-timelines.service";

export class PatientController{
    static async createPatient(req:Request, res:Response){
        const {payload} = req.body
        console.log("patientController" + payload)
        const {userId} = req.params
        const result = await createPatientService({...payload, userId : new ObjectId(userId)})
        const {statusCode, message, data} = result
        res.status(statusCode).json({
            message,
            data
        })
    }
    static async deletePatient(req:Request, res : Response){
        const {id} = req.params
        const result = await deletePatientservice(id)
        const{statusCode, message, data} = result
        res.status(statusCode).json({
            message,
            data
        })
    }
    static async updatePatient(req : Request, res : Response){
        const {id} = req.params
        const payload = req.body
        const result = await updatePatientService(id, payload)
        const{statusCode, message, data} = result

        res.status(statusCode).json({
            message,
            data
        })
    }
    static async findPatients(req : Request, res : Response){
        
        const result = await findPatientService()
        const{statusCode, message, data} = result

        res.status(statusCode).json({
            message,
            data
        })
    }
    static async finPatientByID(req : Request, res : Response){
        const {id} = req.params

        const result = await findPatientByIdService(id)
        const {statusCode, message, data} = result

        res.status(statusCode).json({
            message,
            data
        })
    }
    static async findPatientTimelinesService(req : Request, res : Response){
        const {id} = req.params
        console.log(id)

        const timelines = await findPatientsTimelinesservice(id)
        console.log(timelines)
        const {statusCode, message, data} = timelines

        res.status(statusCode).json({
            message,
            data
        })
    }
}