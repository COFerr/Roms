import { Router } from "express";
import { PatientController } from "../controllers/patient.controllers";
import { authMiddlewares } from "../middlewares/auth.middlewares";

const patientRouter = Router();

patientRouter.get("/patients", authMiddlewares, PatientController.findPatients);
patientRouter.get("/patients/:id", authMiddlewares, PatientController.finPatientByID)
patientRouter.get("/patients/timelines/:id", authMiddlewares, PatientController.findPatientTimelinesService)
patientRouter.post("/patients/:userId", authMiddlewares, PatientController.createPatient);
patientRouter.patch("/patients/:id", authMiddlewares, PatientController.updatePatient);
patientRouter.delete("/patients/:id", authMiddlewares, PatientController.deletePatient);

export default patientRouter;