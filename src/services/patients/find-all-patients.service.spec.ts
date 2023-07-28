import { patientRepository } from "../../database/repositories/patient.repository";
import { findPatientService } from "./find-all-patients.service";

describe("Testing find patients service", () => {
    afterEach(() => {
        jest.resetAllMocks();
    })

    it("Should get all patients of an user", async () => {
        const patients = [
            {name: "Ken Adams",birthdate: "01/01/1990", contact: "kenadams@test.com", demands:"tell about my travel for the western europe", personalAnnotations: "Compulsive lier", userId: "64acbc1c65374d8907391968", timelines: []},
            {name: "Drake Ramoray",birthdate: "01/01/1990", contact: "drdrake@test.com", demands:"Lear some math", personalAnnotations: "pretty dumb", userId: "64acbc1c65374d8907391968", timelines: []},
        ]

        const findPatientsMock = jest.fn().mockResolvedValue(patients)

        patientRepository.findPatients = findPatientsMock

        const expectedResponse = {
            statusCode: 200,
            message: "Patients successfully found",
            data: patients
        }

        const response = await findPatientService()

        expect(findPatientsMock).toHaveBeenCalled()
        expect(response).toEqual(expectedResponse)        
    })

    it("handle error test", async () => {
        const errorMessage = "Error for the test"

        const errorFindMock = jest.fn().mockRejectedValue(new Error(errorMessage))
        patientRepository.findPatients = errorFindMock

        const expectedResponse = {
                statusCode : 400,
                message: errorMessage,
                data: null
        }

        const response = await findPatientService();
        expect(response).toEqual(expectedResponse);
        expect(errorFindMock).toHaveBeenCalled();
    })
})