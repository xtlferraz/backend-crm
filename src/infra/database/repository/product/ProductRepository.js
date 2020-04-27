const productMapper = require("./ProductMapper");
module.exports = ({ connection }) => ({
    create: async (product) => {
        return await connection("product").insert(
            productMapper.toDatabase(product)
        );
    },
    all: async (page) => {
        const result = await connection("product").select("*");
        const list = result.map((result) => productMapper.toEntity(result));
        return list;
    },
    total: async () => {
        const [count] = await connection("product").count();
        const total = count["count(*)"];
        return total;
    },
    get: async (id) => {
        const product = await connection("product").first("*").where("id", id);
        return productMapper.toEntity(product);
    },
    delete: async (id) => {
        return await connection("product").where("id", id).delete();
    },
    update: async (product) => {
        const { id } = product;
        return await connection("product")
            .where("id", "=", id)
            .update(productMapper.toDatabase(product));
    },
});
