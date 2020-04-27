const bodyParser = require("body-parser");
const { createController } = require("awilix-express"); // or `awilix-router-core`
const LeadController = require("../presentations/lead/Controllers/LeadController");
const authenticate = require("../middlewares/authentication");
module.exports = createController(LeadController)
    .prefix("/lead")
    .before([authenticate])
    .get("/getById/:id", "getLead")
    .before([authenticate])
    .get("/all", "getAll")
    .before([authenticate])
    .put("/", "updateLead", {
        before: [bodyParser()],
    })
    .before([authenticate])
    .delete("/:id", "deleteLead")
    .post("/", "createLead", {
        before: [bodyParser()],
    });
