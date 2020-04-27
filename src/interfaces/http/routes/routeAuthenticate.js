const bodyParser = require("body-parser");
const { createController } = require("awilix-express"); // or `awilix-router-core`
const AuthController = require("../presentations/auth/Controllers/AuthController");

module.exports = createController(AuthController)
    .prefix("/authenticate")
    .post("/", "login", {
        before: [bodyParser()],
    });
