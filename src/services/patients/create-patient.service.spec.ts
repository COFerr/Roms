import { patientRepository } from "../../database/repositories/patient.repository";
import { createPatientService } from "./create-patient.service";
import { IPatient } from "../../interfaces/patient.interface";
import { ObjectId, Schema } from "mongoose";
import { IUser } from "../../interfaces/user.interface";
import { userRepository } from "../../database/repositories/user.repository";

describe("Create patient service test", () => {

    afterEach(() => {
        jest.resetAllMocks()
    })

    it("Should create a new patient", async () => {
        const payload = {name: "Drake Ramoray",birthdate: "01/01/1990", contact: "drdrake@test.com", demands:"Learn some math", personalAnnotations: "pretty dumb", userId: "64acbc1c65374d8907391968" as unknown as ObjectId, timelines: []} as unknown as IPatient
        const patientCreateMock = jest.fn().mockResolvedValue(payload);
        class User{
            name; email; nickname; password; patients;

           constructor(name : string, nickname: string, email : string, password : string, patients : Schema.Types.ObjectId[]){
               this.name = name
               this.nickname = nickname
               this.email = email
               this.password = password
               this.patients = patients
           }

           save() : void{console.log("user saved")}
       }
        const user = new User(
            "Denis", "denis@test.com","pimentinha","123456", []
         )
        const userMocked = jest.fn().mockResolvedValue(user)

        userRepository.findUserById = userMocked
        patientRepository.createPatient = patientCreateMock;

        const expectedResult = {
            statusCode: 201,
            data: payload,
            message: "Patient created successfully!"
        }

        const response = await createPatientService(payload)

        expect(response).toEqual(expectedResult);
        expect(patientCreateMock).toHaveBeenCalled()
    })
})