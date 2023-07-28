import { Router } from "express";
import { AuthController } from "../controllers/auth.controllers";

const authRouter = Router()
authRouter.post("/login", AuthController.login)

export default authRouter