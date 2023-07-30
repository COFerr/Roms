import { patientRepository } from "../../database/repositories/patient.repository";
import { createOccurrenceService } from "./create-occurrence.service";
import { IOccurrence } from "../../interfaces/occurrence.interface";
import { ObjectId, Schema } from "mongoose";
import { timelineRepository } from "../../database/repositories/timeline.repository";
import Timeline from "../../database/entities/timeline.entity";
import { occurrenceRepository } from "../../database/repositories/occurrence.repository";

describe("Create patient service test", () => {

    afterEach(() => {
        jest.resetAllMocks()
    })

    it("Should create a new patient", async () => {
        const payload = {name: "Drake Ramoray", content: "01/01/1990", type: "drdrake@test.com"} as unknown as IOccurrence
        const occurrenceCreateMock = jest.fn().mockResolvedValue(payload);
        class Timeline{
            name; occurrences;

           constructor(name : string, occurences: Schema.Types.ObjectId[]){
               this.name = name
               this.occurrences = occurences
           }

           save() : void{console.log("timeline saved")}
       }
        const timeline = new Timeline(
            "My dear diary...", []
         )
        const timelineMocked = jest.fn().mockResolvedValue(timeline)
        const id = "64af560f81cbae877a280f7f"

        timelineRepository.findTimelineById = timelineMocked
        occurrenceRepository.createOccurrence = occurrenceCreateMock;

        const expectedResult = {
            statusCode: 201,
            data: payload,
            message: "Occurrence created successfully!"
        }

        const response = await createOccurrenceService(payload, id)

        expect(response).toEqual(expectedResult);
        expect(occurrenceCreateMock).toHaveBeenCalled()
    })
})