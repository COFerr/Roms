import { timelineRepository } from "../../database/repositories/timeline.repository"
import { updateTimelineService } from "./update-timeline.service"


describe("Update timeline service test", () => {

    afterEach(() => {
        jest.resetAllMocks()
    })

    it("Should update an existing timeline", async () => {
        const payload = {
            pernsonalDemands: "Improve my communication with Regina Falange",
        }
        const id = "64acbc1c65374d8907391968" as string

        const timelineUpdateMock = jest.fn().mockResolvedValue(payload);

        timelineRepository.updateTimeline = timelineUpdateMock;

        const expectedResult = {
            statusCode: 200,
            message: "Timeline successfully updated!",
            data: payload
        }

        const response = await updateTimelineService(id, payload)

        expect(response).toEqual(expectedResult);
        expect(timelineUpdateMock).toHaveBeenCalled();
    })
})