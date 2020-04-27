const bodyParser = require("body-parser");
const { createController } = require("awilix-express"); // or `awilix-router-core`
const PeopleController = require("../presentations/people/Controllers/PeopleController");
const authenticate = require("../middlewares/authentication");
module.exports = createController(PeopleController)
    .prefix("/people")
    .before([authenticate])
    .get("/getById/:id", "getPeople")
    .before([authenticate])
    .get("/all", "getAll")
    .before([authenticate])
    .put("/", "updatePeople", {
        before: [bodyParser()],
    })
    .before([authenticate])
    .delete("/:id", "deletePeople")
    .post("/", "createPeople", {
        before: [bodyParser()],
    });
