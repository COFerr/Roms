import { Router } from "express";
import { PatientController } from "../controllers/patient.controllers";
import { authMiddlewares } from "../middlewares/auth.middlewares";

const patientRouter = Router();

patientRouter.get("/", authMiddlewares, PatientController.findPatients);
patientRouter.get("/:id", authMiddlewares, PatientController.finPatientByID)
patientRouter.get("/timelines/:id", authMiddlewares, PatientController.findPatientTimelinesService)
patientRouter.post("/:userId", authMiddlewares, PatientController.createPatient);
patientRouter.patch("/:id", authMiddlewares, PatientController.updatePatient);
patientRouter.delete("/:id", authMiddlewares, PatientController.deletePatient);

export default patientRouter;