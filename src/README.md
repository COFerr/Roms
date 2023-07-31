Installing
    -npm install typescript -D
    -npm install dotenv
        *dotenv Variables*
        PORT = 
        SECRET_KEY = 
        MONGO_URL = 
    -npm install express
    -npm install multer
    -npm install mongoose
    -npm install bcrypt
    -npm install jsonwebtoken

    -npm install jest 

Intialize
    npx tsc --init
Script
    *To run the application*
    npm start
    *To run the tests*
    npm test
Application
    routes
        auth
            method: post, path: "/login" - login route - public
        users
            method: post, path: "/" - create a new user - public
            method: get, path: "/" - get user by email - private
            method: patch, path: "/:userId" - update an user by it's _id - private
            method: get, path: "/userPatients/:userId" - get all patients of an user. - private
            method: delete, path: "/userId" - delete an user by it's _id. - private
        patients
            method: post, path: "/patients/:userId" - create a new patient - private
            method: get, path: "/patients" - get all patients - private
            method: get, path: "/patients/:patientId" - get a patient by it's _id - private
            method: get, path: "/patients/timelines/:patientId" - get all timelines of a patient. - private
            method: patch, path: "/patients/patientId" - update a patient by it's _id. - private
            method: delete, path: "/patients/:patientId" - delete a patient by it's _id. - private
        timlines
            method: post, path: "/" - create a new user - private
            method: get, path: "/" - get user by email - private
            method: path, path: "/:userId" - update an user by it's _id - private
            method: get, path: "/userPatients/:userId" - get all patients of an user. - private
            method: delete, path: "/userId" - delete an user by it's id. - private
        occurrences
            method: post, path: "/" - create a new user - private
            method: get, path: "/" - get user by email - private
            method: path, path: "/:userId" - update an user by it's _id - private
            method: get, path: "/userPatients/:userId" - get all patients of an user. - private
            method: delete, path: "/userId" - delete an user by it's id. - private