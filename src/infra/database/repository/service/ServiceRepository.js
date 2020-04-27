const serviceMapper = require("./ServiceMapper");
module.exports = ({ connection }) => ({
    create: async (service) => {
        return await connection("service").insert(
            serviceMapper.toDatabase(service)
        );
    },
    all: async (page) => {
        const result = await connection("service").select("*");
        const list = result.map((result) => serviceMapper.toEntity(result));
        return list;
    },
    total: async () => {
        const [count] = await connection("service").count();
        const total = count["count(*)"];
        return total;
    },
    get: async (id) => {
        const service = await connection("service").first("*").where("id", id);
        return serviceMapper.toEntity(service);
    },
    delete: async (id) => {
        return await connection("service").where("id", id).delete();
    },
    update: async (service) => {
        const { id } = service;
        return await connection("service")
            .where("id", "=", id)
            .update(serviceMapper.toDatabase(service));
    },
});
