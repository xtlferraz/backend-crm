const unityMapper = require("./UnityMapper");
module.exports = ({ connection }) => ({
    create: async (unity) => {
        return await connection("unity").insert(unityMapper.toDatabase(unity));
    },
    all: async (page) => {
        const result = await connection("unity").select("*");
        const list = result.map((result) => unityMapper.toEntity(result));
        return list;
    },
    total: async () => {
        const [count] = await connection("unity").count();
        const total = count["count(*)"];
        return total;
    },
    get: async (id) => {
        const unity = await connection("unity").first("*").where("id", id);
        return unityMapper.toEntity(unity);
    },
    delete: async (id) => {
        return await connection("unity").where("id", id).delete();
    },
    update: async (unity) => {
        const { id } = unity;
        return await connection("unity")
            .where("id", "=", id)
            .update(unityMapper.toDatabase(unity));
    },
});
