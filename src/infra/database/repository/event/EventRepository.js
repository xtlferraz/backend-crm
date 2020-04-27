const eventMapper = require("./EventMapper");
module.exports = ({ connection }) => ({
    create: async (event) => {
        return await connection("event").insert(eventMapper.toDatabase(event));
    },
    all: async (page) => {
        const result = await connection("event").select("*");
        const list = result.map((result) => eventMapper.toEntity(result));
        return list;
    },
    total: async () => {
        const [count] = await connection("event").count();
        const total = count["count(*)"];
        return total;
    },
    get: async (id) => {
        const event = await connection("event").first("*").where("id", id);
        return eventMapper.toEntity(event);
    },
    delete: async (id) => {
        return await connection("event").where("id", id).delete();
    },
    update: async (event) => {
        const { id } = event;
        return await connection("event")
            .where("id", "=", id)
            .update(eventMapper.toDatabase(event));
    },
});
