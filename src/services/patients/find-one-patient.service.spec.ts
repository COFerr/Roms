import { patientRepository } from "../../database/repositories/patient.repository";
import { findPatientByIdService } from "./find-one-patient.service";

describe("Testing find patient by id service", () => {
    afterEach(() => {
        jest.resetAllMocks();
    })

    it("Should get all patients of an user", async () => {
        const patient = {name: "Ken Adams",birthdate: "01/01/1990", contact: "kenadams@test.com", demands:"tell about my travel for the western europe", personalAnnotations: "Compulsive lier", userId: "64acbc1c65374d8907391968", timelines: []}

        const findPatientByIdMock = jest.fn().mockResolvedValue(patient)

        patientRepository.findPatientByID = findPatientByIdMock

        const expectedResponse = {
            statusCode: 200,
            message  : "Patient found successfully!",
            data : patient
        }

        const response = await findPatientByIdService("64acbc1c65374d8907391968")

        expect(findPatientByIdMock).toHaveBeenCalled()
        expect(response).toEqual(expectedResponse)        
    })

    it("handle error test", async () => {
        const errorMessage = "Error for the test"

        const errorFindMock = jest.fn().mockRejectedValue(new Error(errorMessage))
        patientRepository.findPatientByID = errorFindMock

        const expectedResponse = {
                statusCode : 400,
                message: errorMessage,
                data: null
        }

        const response = await findPatientByIdService("64acbc1c65374d8907391968");
        expect(response).toEqual(expectedResponse);
        expect(errorFindMock).toHaveBeenCalled();
    })
})