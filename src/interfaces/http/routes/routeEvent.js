const bodyParser = require("body-parser");
const { createController } = require("awilix-express"); // or `awilix-router-core`
const EventController = require("../presentations/event/Controllers/EventController");
const authenticate = require("../middlewares/authentication");
module.exports = createController(EventController)
    .prefix("/event")
    .before([authenticate])
    .get("/getById/:id", "getEvent")
    .before([authenticate])
    .get("/all", "getAll")
    .before([authenticate])
    .put("/", "updateEvent", {
        before: [bodyParser()],
    })
    .before([authenticate])
    .delete("/:id", "deleteEvent")
    .post("/", "createEvent", {
        before: [bodyParser()],
    });
