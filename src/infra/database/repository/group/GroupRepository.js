const groupMapper = require("./GroupMapper");
module.exports = ({ connection }) => ({
    create: async (group) => {
        return await connection("group").insert(groupMapper.toDatabase(group));
    },
    all: async () => {
        const result = await connection("group").select("*");
        const list = result.map((result) => groupMapper.toEntity(result));
        return list;
    },
    total: async () => {
        const [count] = await connection("group").count();
        const total = count["count(*)"];
        return total;
    },
    get: async (id) => {
        const group = await connection("group").first("*").where("id", id);
        return groupMapper.toEntity(group);
    },
    delete: async (id) => {
        return await connection("group").where("id", id).delete();
    },
    update: async (group) => {
        const { id } = group;
        return await connection("group")
            .where("id", "=", id)
            .update(groupMapper.toDatabase(group));
    },
});
