import mongoose, { Schema } from "mongoose";

import { IPatient } from "../../interfaces/patient.interface";


const patientSchema: Schema = new Schema(
    {
        userId : {type : Schema.Types.ObjectId, ref : "User"},
        timelines: [
            {type: Schema.Types.ObjectId, ref : "Timeline" }
        ],
        name: { type: String, require: true, minlength: 3, unique: true },
        birthdate: { type: Date, require: true },
        contact: { type: String, require: true, unique: true },
        demands: { type: String, require: true },
        personalAnnotations: { type: String, minlength: 3 },
        
    },
    { timestamps: true }
)

const Patient = mongoose.model<IPatient>("Patient", patientSchema);

export default Patient;

