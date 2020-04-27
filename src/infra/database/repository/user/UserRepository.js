const userMapper = require("./UserMapper");
const limit = 5;
module.exports = ({ connection }) => ({
    create: async (user) => {
        return await connection("user").insert(userMapper.toDatabase(user));
    },
    all: async (page) => {
        const result = await connection("user").select("*");
        const list = result.map((result) => userMapper.toEntity(result));
        return list;
    },
    total: async () => {
        const [count] = await connection("user").count();
        const total = count["count(*)"];
        return total;
    },
    get: async (id) => {
        const user = await connection("user").first("*").where("id", id);
        return userMapper.toEntity(user);
    },
    findByEmail: async (email) => {
        const user = await connection("user").first("*").where("email", email);
        return userMapper.toEntity(user);
    },
    delete: async (id) => {
        return await connection("user").where("id", id).delete();
    },
    update: async (user) => {
        const { id } = user;
        return await connection("user")
            .where("id", "=", id)
            .update(userMapper.toDatabase(user));
    },
});
