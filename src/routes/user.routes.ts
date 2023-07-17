import { UserController } from "../controllers/user.controller";
import { Router } from "express";
import { authMiddlewares } from "../middlewares/auth.middlewares";

const userRouter = Router()

//userRouter.get("/", authMiddlewares, UserController.findUSers);
userRouter.post("/", UserController.createUser);
userRouter.patch("/:id", authMiddlewares, UserController.updateUser)
userRouter.delete("/:id", authMiddlewares, UserController.deleteUser)
userRouter.get("/userPatients/:id", authMiddlewares, UserController.findUserPatients)

export default userRouter;