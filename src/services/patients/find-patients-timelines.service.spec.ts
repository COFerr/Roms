import { patientRepository } from "../../database/repositories/patient.repository";
import { findPatientsTimelinesservice } from "./find-patients-timelines.service";

describe("Testing find patient's timelines service", () => {
    afterEach(() => {
        jest.resetAllMocks();
    })

    it("Should get all timelines of a patient", async () => {
        const patient = {name: "Ken Adams",birthdate: "01/01/1990", contact: "kenadams@test.com", demands:"tell about my travel for the western europe", personalAnnotations: "Compulsive lier", userId: "64acbc1c65374d8907391968",
         timelines: [
            "64acbc1c65374d8907391961",
            "64acbc1c65374d8907391962",
            "64acbc1c65374d8907391963"
         ]}

        const findPatientByIdMock = jest.fn().mockResolvedValue(patient)

        patientRepository.findPatientByID = findPatientByIdMock

        const expectedResponse = {
            statusCode: 200,
            message  : "Timelines found successfully!",
            data : patient.timelines
        }

        const response = await findPatientsTimelinesservice("64acbc1c65374d8907391968")

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

        const response = await findPatientsTimelinesservice("64acbc1c65374d8907391968");
        expect(response).toEqual(expectedResponse);
        expect(errorFindMock).toHaveBeenCalled();
    })
})