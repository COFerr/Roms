import { timelineRepository } from "../../database/repositories/timeline.repository";
import { findTimelineByIdService } from "./find-timeline-by-id.service";

describe("Testing find timeline service", () => {
    afterEach(() => {
        jest.resetAllMocks();
    })

    it("Should get a timeline by it's id", async () => {
        const timeline =
         {name: "Ken Adams", occurrences: [
                {title: "Critical patient", content: "Patient affirmed to be using Jest. He keeps talking about javascript.", type: "vocacional"},
                {title: "Lovesong patient", content: "Ptient is pretty good rimes, maybe he should try a carrer as a musician", type: "observation"}
        ]}

        const findTimelinesPatientsMock = jest.fn().mockResolvedValue(timeline)

        timelineRepository.findTimelineById = findTimelinesPatientsMock

        const expectedResponse = {
            statusCode: 200,
            message: "Timeline successfully found",
            data: timeline
        }

        const id = "64c651db1c961be470819fc6"
        const response = await findTimelineByIdService(id)

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
        const response = await findTimelineByIdService(id);
        expect(response).toEqual(expectedResponse);
        expect(errorFindMock).toHaveBeenCalled();
    })
})