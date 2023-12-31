"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const occurrence_controllers_1 = require("../controllers/occurrence.controllers");
const auth_middlewares_1 = require("../middlewares/auth.middlewares");
const express_1 = require("express");
const occurrencesRouter = (0, express_1.Router)();
occurrencesRouter.post("/occurrences/:timelineId", auth_middlewares_1.authMiddlewares, occurrence_controllers_1.OccurrenceController.createOccurrence);
occurrencesRouter.get("/occurrences", auth_middlewares_1.authMiddlewares, occurrence_controllers_1.OccurrenceController.findOccurrences);
occurrencesRouter.patch("/occurrences/:id", auth_middlewares_1.authMiddlewares, occurrence_controllers_1.OccurrenceController.updateOccurrence);
occurrencesRouter.delete("/occurrences/:id", auth_middlewares_1.authMiddlewares, occurrence_controllers_1.OccurrenceController.deleteOccurrence);
exports.default = occurrencesRouter;
