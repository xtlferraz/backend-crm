const bodyParser = require("body-parser");
const { createController } = require("awilix-express"); // or `awilix-router-core`
const ServiceController = require("../presentations/service/Controllers/ServiceController");
const authenticate = require("../middlewares/authentication");
module.exports = createController(ServiceController)
    .prefix("/service")
    .before([authenticate])
    .get("/getById/:id", "getService")
    .before([authenticate])
    .get("/all", "getAll")
    .before([authenticate])
    .put("/", "updateService", {
        before: [bodyParser()],
    })
    .before([authenticate])
    .delete("/:id", "deleteService")
    .post("/", "createService", {
        before: [bodyParser()],
    });
