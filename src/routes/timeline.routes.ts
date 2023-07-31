import { timelineController } from "../controllers/timeline.controllers";
import { authMiddlewares } from "../middlewares/auth.middlewares";
import { Router } from "express";

const timelineRouter = Router();

timelineRouter.post("/:patientId", authMiddlewares, timelineController.createTimeline);
timelineRouter.get("/occurrences/:timelineId", authMiddlewares, timelineController.findTimelines);
timelineRouter.delete("/:id", authMiddlewares, timelineController.deleteTimeline);
timelineRouter.patch("/:id", authMiddlewares, timelineController.updateTimeline);

export default timelineRouter;

