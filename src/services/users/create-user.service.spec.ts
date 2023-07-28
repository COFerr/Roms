import bcrypt from "bcrypt"
import { userRepository } from "../../database/repositories/user.repository"
import { createUserService } from "./create-user.service"
import { IUser } from "../../interfaces/user.interface"

jest.mock("bcrypt")

describe("Create user service test", () => {

    afterEach(() => {
        jest.resetAllMocks()
    })

    it("Should create a new user", async () => {
        const payload = {
            name: "Denis",
            email: "denis@test.com",
            nickname: "pimentinha",
            password: "123456",
            patients: [],
        } as IUser

        const passwordHashed = "123456" as string;

        (bcrypt.hash as jest.Mock).mockResolvedValue(passwordHashed);

        const userCreateMock = jest.fn().mockResolvedValue(payload);

        userRepository.create = userCreateMock;

        const expectedResult = {
            statusCode: 201,
            data: payload,
            message: "User created Sucessfully!"
        }

        const response = await createUserService(payload)

        expect(response).toEqual(expectedResult);
        expect(bcrypt.hash).toBeCalledWith('123456', 10);
        expect(userCreateMock).toBeCalledWith({...payload, password: passwordHashed})
    })
})