import { occurrenceRepository } from "../../database/repositories/occurrence.repository"
import { updateOccurrenceService } from "./update-occurrence.service"


describe("Update timeline service test", () => {

    afterEach(() => {
        jest.resetAllMocks()
    })

    it("Should update an existing occurrence", async () => {
        const payload = {
            content: "patient said he tested for one last time, he stopped using Jest",
        }
        const id = "64acbc1c65374d8907391968" as string

        const occurrenceUpdateMock = jest.fn().mockResolvedValue(payload);

        occurrenceRepository.updateOccurrence = occurrenceUpdateMock;

        const expectedResult = {
            statusCode: 200,
            message: "Occurrence successfully updated!",
            data: payload
        }

        const response = await updateOccurrenceService(id, payload)

        expect(response).toEqual(expectedResult);
        expect(occurrenceUpdateMock).toHaveBeenCalled();
    })
})