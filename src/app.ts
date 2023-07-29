import express, { json } from "express"
import { databaseConnect } from "./database/config";
import { config } from "dotenv"
import userRouter from "./routes/user.routes";
import timelineRouter from "./routes/timeline.routes";
import patientRouter from "./routes/patient.routes";
import occurrencesRouter from "./routes/occurrence.routes";
import authRouter from "./routes/auth.routes";

databaseConnect();
config();


const app = express()


app.use(json())
app.use(userRouter)
app.use(timelineRouter)
app.use(patientRouter)
app.use(occurrencesRouter)
app.use(authRouter)

app.listen(process.env.PORT || 3333, () => {
    console.log("the server is running in port: " + process.env.PORT || 3333)
});
