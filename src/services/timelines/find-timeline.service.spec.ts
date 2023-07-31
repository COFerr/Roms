import { timelineRepository } from "../../database/repositories/timeline.repository";
import { findTimelineService } from "./find-timeline.service";

describe("Testing find timeline service", () => {
    afterEach(() => {
        jest.resetAllMocks();
    })

    it("Should get all timelines of an user", async () => {
        const timelines =
         {name: "Ken Adams", occurrences: [
                {title: "Critical patient", content: "Patient affirmed to be using Jest. He keeps talking about javascript.", type: "vocacional"},
                {title: "Lovesong patient", content: "Ptient is pretty good rimes, maybe he should try a carrer as a musician", type: "observation"}
        ]}

        const findTimelinesPatientsMock = jest.fn().mockResolvedValue(timelines)

        timelineRepository.findTimelineById = findTimelinesPatientsMock

        const expectedResponse = {
            statusCode: 200,
            message: "Timeline successfully found",
            data: timelines.occurrences
        }

        const id = "64c651db1c961be470819fc6"
        const response = await findTimelineService(id)

        expect(findTimelinesPatientsMock).toHaveBeenCalled()
        expect(response).toEqual(expectedResponse)        
    })

    it("handle error test", async () => {
        const errorMessage = "Error for the test"

        const errorFindMock = jest.fn().mockRejectedValue(new Error(errorMessage))
        timelineRepository.findTimelineById = errorFindMock

        const expectedResponse = {
                statusCode : 400,
                message: errorMessage,
                data: null
        }

        const id = "64c651db1c961be470819fc6"
        const response = await findTimelineService(id);
        expect(response).toEqual(expectedResponse);
        expect(errorFindMock).toHaveBeenCalled();
    })
})