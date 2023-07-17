import mongoose from 'mongoose'
import { config } from "dotenv"

config();

export async function databaseConnect(){
    try{
        await mongoose.connect(process.env.MONGO_URL as string)

        console.log('connected to database');
    }
    catch(error){
        console.log("Error connecting to database", error)        
    }
}



