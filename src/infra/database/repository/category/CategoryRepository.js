const categoryMapper = require("./CategoryMapper");

module.exports = ({ connection }) => ({
    create: async (category) => {
        return await connection("category").insert(
            categoryMapper.toDatabase(category)
        );
    },
    all: async (page) => {
        const result = await connection("category").select("*");
        const list = result.map((result) => categoryMapper.toEntity(result));
        return list;
    },
    total: async () => {
        const [count] = await connection("category").count();
        const total = count["count(*)"];
        return total;
    },
    get: async (id) => {
        const category = await connection("category")
            .first("*")
            .where("id", id);
        return categoryMapper.toEntity(category);
    },
    findByEmail: async (email) => {
        const category = await connection("category")
            .first("*")
            .where("email", email);
        return categoryMapper.toEntity(category);
    },
    delete: async (id) => {
        return await connection("category").where("id", id).delete();
    },
    update: async (category) => {
        const { id } = category;
        return await connection("category")
            .where("id", "=", id)
            .update(categoryMapper.toDatabase(category));
    },
});
