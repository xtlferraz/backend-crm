const bodyParser = require("body-parser");
const { createController } = require("awilix-express"); // or `awilix-router-core`
const GroupController = require("../presentations/group/Controllers/GroupController");
const authenticate = require("../middlewares/authentication");
module.exports = createController(GroupController)
    .prefix("/group")
    .before([authenticate])
    .get("/getById/:id", "getGroup")
    .before([authenticate])
    .get("/all", "getAll")
    .before([authenticate])
    .put("/", "updateGroup", {
        before: [bodyParser()],
    })
    .before([authenticate])
    .delete("/:id", "deleteGroup")
    .post("/", "createGroup", {
        before: [bodyParser()],
    });
