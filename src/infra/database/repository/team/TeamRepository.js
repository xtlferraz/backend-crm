const teamMapper = require("./TeamMapper");
module.exports = ({ connection }) => ({
    create: async (team) => {
        return await connection("team").insert(teamMapper.toDatabase(team));
    },
    all: async (page) => {
        const result = await connection("team").select("*");
        const list = result.map((result) => teamMapper.toEntity(result));
        return list;
    },
    total: async () => {
        const [count] = await connection("team").count();
        const total = count["count(*)"];
        return total;
    },
    get: async (id) => {
        const team = await connection("team").first("*").where("id", id);
        return teamMapper.toEntity(team);
    },
    delete: async (id) => {
        return await connection("team").where("id", id).delete();
    },
    update: async (team) => {
        const { id } = team;
        return await connection("team")
            .where("id", "=", id)
            .update(teamMapper.toDatabase(team));
    },
});
