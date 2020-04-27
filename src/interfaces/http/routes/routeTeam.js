const bodyParser = require("body-parser");
const { createController } = require("awilix-express"); // or `awilix-router-core`
const TeamController = require("../presentations/team/Controllers/TeamController");
const authenticate = require("../middlewares/authentication");
module.exports = createController(TeamController)
    .prefix("/team")
    .before([authenticate])
    .get("/getById/:id", "getTeam")
    .before([authenticate])
    .get("/all", "getAll")
    .before([authenticate])
    .put("/", "updateTeam", {
        before: [bodyParser()],
    })
    .before([authenticate])
    .delete("/:id", "deleteTeam")
    .post("/", "createTeam", {
        before: [bodyParser()],
    });
