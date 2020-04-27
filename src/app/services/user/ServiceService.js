const Service = require("../../../domain/entitities/Service");

module.exports = ({ serviceRepository, createError }) => ({
    create: async (service) => {
        const {
            name,
            description,
            time_hour,
            value_hour,
            active,
            category_id,
        } = service;

        const createService = new Service(
            null,
            name,
            description,
            time_hour,
            value_hour,
            active,
            category_id
        );

        return await serviceRepository.create(createService);
    },
    get: async (id) => {
        if (!id) throw createError(422, "ID Undefined", null);
        return await serviceRepository.get(id);
    },
    all: async () => {
        const total = await serviceRepository.total();
        const data = await serviceRepository.all();
        return { total: total, data: data };
    },
    delete: async (id) => {
        if (!id) throw createError(422, "ID Undefined", null);
        return await serviceRepository.delete(id);
    },
    update: (service) => {
        return serviceRepository.update(service);
    },
});
