const bodyParser = require("body-parser");
const { createController } = require("awilix-express"); // or `awilix-router-core`
const ProductController = require("../presentations/product/Controllers/ProductController");
const authenticate = require("../middlewares/authentication");
module.exports = createController(ProductController)
    .prefix("/product")
    .before([authenticate])
    .get("/getById/:id", "getProduct")
    .before([authenticate])
    .get("/all", "getAll")
    .before([authenticate])
    .put("/", "updateProduct", {
        before: [bodyParser()],
    })
    .before([authenticate])
    .delete("/:id", "deleteProduct")
    .post("/", "createProduct", {
        before: [bodyParser()],
    });
