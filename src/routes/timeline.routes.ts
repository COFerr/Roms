import { timelineController } from "../controllers/timeline.controllers";
import { authMiddlewares } from "../middlewares/auth.middlewares";
import { Router } from "express";

const timelineRouter = Router();

timelineRouter.post("/timelines/:patientId", authMiddlewares, timelineController.createTimeline);
timelineRouter.get("/timelines", authMiddlewares, timelineController.findTimelines);
timelineRouter.delete("/timelines/:id", authMiddlewares, timelineController.deleteTimeline);
timelineRouter.patch("/timelines/:id", authMiddlewares, timelineController.updateTimeline);

export default timelineRouter;

