const bodyParser = require("body-parser");
const { createController } = require("awilix-express"); // or `awilix-router-core`
const CompanyController = require("../presentations/company/Controllers/CompanyController");
const authenticate = require("../middlewares/authentication");
module.exports = createController(CompanyController)
    .prefix("/company")
    .before([authenticate])
    .get("/getById/:id", "getCompany")
    .before([authenticate])
    .get("/all", "getAll")
    .before([authenticate])
    .put("/update", "updateCompany", {
        before: [bodyParser()],
    })
    .before([authenticate])
    .delete("/:id", "deleteCompany")
    .post("/", "createCompany", {
        before: [bodyParser()],
    });
