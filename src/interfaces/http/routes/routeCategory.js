const bodyParser = require("body-parser");
const { createController } = require("awilix-express"); // or `awilix-router-core`
const CategoryController = require("../presentations/category/Controllers/CategoryController");
const authenticate = require("../middlewares/authentication");
module.exports = createController(CategoryController)
    .prefix("/category")
    .before([authenticate])
    .get("/getById/:id", "getCategory")
    .before([authenticate])
    .get("/all", "getAll")
    .before([authenticate])
    .put("/", "updateCategory", {
        before: [bodyParser()],
    })
    .before([authenticate])
    .delete("/:id", "deleteCategory")
    .post("/", "createCategory", {
        before: [bodyParser()],
    });
