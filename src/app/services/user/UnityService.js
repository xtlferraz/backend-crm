const Unity = require("../../../domain/entitities/Unity");

module.exports = ({ unityRepository, createError }) => ({
    create: async (unity) => {
        const { name, company_id } = unity;

        const createUnity = new Unity(null, name, company_id);

        return await unityRepository.create(createUnity);
    },
    get: async (id) => {
        if (!id) throw createError(422, "ID Undefined", null);
        return await unityRepository.get(id);
    },
    all: async () => {
        const total = await unityRepository.total();
        const data = await unityRepository.all();
        return { total: total, data: data };
    },
    delete: async (id) => {
        if (!id) throw createError(422, "ID Undefined", null);
        return await unityRepository.delete(id);
    },
    update: (unity) => {
        return unityRepository.update(unity);
    },
});
