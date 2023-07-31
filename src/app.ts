import express, { json } from "express"
import { databaseConnect } from "./database/config";
import { config } from "dotenv"
import routes from "./routes";

databaseConnect();
config();


const app = express()


app.use(json())
app.use(routes)

app.listen(process.env.PORT || 3333, () => {
    console.log("the server is running in port: " + process.env.PORT || 3333)
});
