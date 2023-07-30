import { Router } from "express";

import authRouter from "./auth.routes";
import occurrencesRouter from "./occurrence.routes";
import patientRouter from "./patient.routes";
import timelineRouter from "./timeline.routes";
import userRouter from "./user.routes";

const routes = Router();

routes.use("/", userRouter);
routes.use("/login", authRouter)
routes.use("/patients", patientRouter)
routes.use("/occurrences", occurrencesRouter)
routes.use("/timelines", timelineRouter)

export default routes;