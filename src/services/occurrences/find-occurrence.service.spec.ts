import { occurrenceRepository } from "../../database/repositories/occurrence.repository";
import { findOccurrenceService } from "./find-occurrence.service";

describe("Testing find timeline service", () => {
    afterEach(() => {
        jest.resetAllMocks();
    })

    it("Should get all timelines of an user", async () => {
        const occurences = [
            {title: "Critical patient", content: "Patient affirmed to be using Jest. He keeps talking about javascript.", type: "vocacional"},
            {title: "Lovesong patient", content: "Ptient is pretty good rimes, maybe he should try a carrer as a musician", type: "observation"}
        ]

        const findOccurrencesMock = jest.fn().mockResolvedValue(occurences)

        occurrenceRepository.findOccurrences = findOccurrencesMock

        const expectedResponse = {
            statusCode: 200,
            message: "Occurrences successfully found!",
            data: occurences
        }

        const response = await findOccurrenceService()

        expect(findOccurrencesMock).toHaveBeenCalled()
        expect(response).toEqual(expectedResponse)        
    })

    it("handle error test", async () => {
        const errorMessage = "Error for the test"

        const errorFindMock = jest.fn().mockRejectedValue(new Error(errorMessage))
        occurrenceRepository.findOccurrences = errorFindMock

        const expectedResponse = {
                statusCode : 400,
                message: errorMessage,
                data: null
        }

        const response = await findOccurrenceService();
        expect(response).toEqual(expectedResponse);
        expect(errorFindMock).toHaveBeenCalled();
    })
})