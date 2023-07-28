import { timelineRepository } from "../../database/repositories/timeline.repository"
import { patientRepository } from "../../database/repositories/patient.repository"
import { createTimelineService } from "./create-timeline.service"
import { ITimeline } from "../../interfaces/timeline.interface"
import { IPatient } from "../../interfaces/patient.interface"
import Patient from "../../database/entities/patient.entity"

describe("Create user service test", () => {

    afterEach(() => {
        jest.resetAllMocks()
    })

    it("Should create a new timeline", async () => {
        const payload = {
            name: "my dear diary...",
            occurrences: [],
        } as ITimeline
        class Patient{
             name; birthdate; demands; contact; personalAnnotations; userId; timelines;

            constructor(name : string, birthdate: Date, contact : string, demands : string, personalAnnotations : string, userId : string, timelines : string[]){
                this.name = name
                this.birthdate = birthdate
                this.contact = contact
                this.personalAnnotations = personalAnnotations
                this.demands = demands
                this.timelines = timelines
                this.userId = userId
            }

            save() : void{console.log("timeline saved")}
        }
        const patient = new Patient("Ken Adams", new Date("01/01/1990"), "kenadams@test.com", "tell about my travel for the western europe", "Compulsive lier", "64acbc1c65374d8907391968", [])
        const findPatientMock = jest.fn().mockResolvedValue(patient)
        patientRepository.findPatientByID = findPatientMock

        const id = "64af560f81cbae877a280f7f"

        const timelineCreateMock = jest.fn().mockResolvedValue(payload);

        timelineRepository.createTimeline = timelineCreateMock;

        const expectedResult = {
            statusCode: 201,
            data: payload,
            message: "Timeline created successfully!"
        }

        const response = await createTimelineService(payload, id)

        expect(response).toEqual(expectedResult);
        expect(timelineCreateMock).toHaveBeenCalled()
    })
})