import { timelineRepository } from "../../database/repositories/timeline.repository";
import { findTimelineService } from "./find-timeline.service";

describe("Testing find timeline service", () => {
    afterEach(() => {
        jest.resetAllMocks();
    })

    it("Should get all timelines of an user", async () => {
        const timelines = [
            {name: "Ken Adams", occurrences: []},
            {name: "Drake Ramoray", occurrences: []},
        ]

        const findTimelinesPatientsMock = jest.fn().mockResolvedValue(timelines)

        timelineRepository.findTimelines = findTimelinesPatientsMock

        const expectedResponse = {
            statusCode: 200,
            message: "Timelines successfully found",
            data: timelines
        }

        const response = await findTimelineService()

        expect(findTimelinesPatientsMock).toHaveBeenCalled()
        expect(response).toEqual(expectedResponse)        
    })

    it("handle error test", async () => {
        const errorMessage = "Error for the test"

        const errorFindMock = jest.fn().mockRejectedValue(new Error(errorMessage))
        timelineRepository.findTimelines = errorFindMock

        const expectedResponse = {
                statusCode : 400,
                message: errorMessage,
                data: null
        }

        const response = await findTimelineService();
        expect(response).toEqual(expectedResponse);
        expect(errorFindMock).toHaveBeenCalled();
    })
})