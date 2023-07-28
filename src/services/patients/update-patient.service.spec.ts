import { patientRepository } from "../../database/repositories/patient.repository"
import { updatePatientService } from "./update-patient.service"

describe("Update patient service test", () => {

    afterEach(() => {
        jest.resetAllMocks()
    })

    it("Should update an existing patient", async () => {
        const payload = {
            name: "Everybody hates testing with jest",
        }
        const id = "64acbc1c65374d8907391968" as string

        const patientUpdateMock = jest.fn().mockResolvedValue(payload);

        patientRepository.updatePatient = patientUpdateMock;

        const expectedResult = {
            statusCode: 200,
            message: "Patient successfully updated!",
            data: payload
        }

        const response = await updatePatientService(id, payload)

        expect(response).toEqual(expectedResult);
        expect(patientUpdateMock).toHaveBeenCalled();
    })
})