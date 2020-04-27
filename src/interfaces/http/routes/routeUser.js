const bodyParser = require("body-parser");
const { createController } = require("awilix-express"); // or `awilix-router-core`
const UserController = require("../presentations/user/Controllers/UserController");
const authenticate = require("../middlewares/authentication");
module.exports = createController(UserController)
    .prefix("/user")
    .before([authenticate])
    .get("/getById/:id", "getUser")
    .before([authenticate])
    .get("/all", "getAll")
    .before([authenticate])
    .put("/", "updateUser", {
        before: [bodyParser()],
    })
    .before([authenticate])
    .delete("/:id", "deleteUser")
    .post("/", "createUser", {
        before: [bodyParser()],
    });
