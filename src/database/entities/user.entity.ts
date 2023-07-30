import mongoose, { Schema } from "mongoose";

import { IUser } from "../../interfaces/user.interface";


const userSchema: Schema = new Schema(
    {
        name: { type: String, required: true, minlenght: 3 },
        email: { type: String, required: true, minlength: 10, unique: true },
        nickname: { type: String, required: true, minlength: 3, unique: false },
        password: { type: String, required: true, minlength: 8, select : true},
        patients: [
            {type : Schema.Types.ObjectId, ref : "Patient" }
        ],
        photo: { type: String, required: false }
    },
    { timestamps: true }
)

const User = mongoose.model<IUser>("User", userSchema);

export default User;
