const leadMapper = require("./LeadMapper");
const limit = 5;
module.exports = ({ connection }) => ({
    create: async (lead) => {
        return await connection("lead").insert(leadMapper.toDatabase(lead));
    },
    all: async () => {
        const result = await connection("lead").select("*");
        const list = result.map((result) => leadMapper.toEntity(result));
        return list;
    },
    total: async () => {
        const [count] = await connection("lead").count();
        const total = count["count(*)"];
        return total;
    },
    get: async (id) => {
        const lead = await connection("lead").first("*").where("id", id);
        return leadMapper.toEntity(lead);
    },
    delete: async (id) => {
        return await connection("lead").where("id", id).delete();
    },
    update: async (lead) => {
        const { id } = lead;
        return await connection("lead")
            .where("id", "=", id)
            .update(leadMapper.toDatabase(lead));
    },
});
