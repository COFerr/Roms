import { OccurrenceController } from "../controllers/occurrence.controllers";
import { authMiddlewares } from "../middlewares/auth.middlewares";
import { Router } from "express";

const occurrencesRouter = Router();

occurrencesRouter.post("/occurrences/:timelineId", authMiddlewares, OccurrenceController.createOccurrence);
occurrencesRouter.get("/occurrences", authMiddlewares, OccurrenceController.findOccurrences);
occurrencesRouter.patch("/occurrences/:id", authMiddlewares, OccurrenceController.updateOccurrence);
occurrencesRouter.delete("/occurrences/:id", authMiddlewares, OccurrenceController.deleteOccurrence);

export default occurrencesRouter;
