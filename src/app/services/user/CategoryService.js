const Category = require("../../../domain/entitities/Category");

module.exports = ({ categoryRepository, createError }) => ({
    create: async (category) => {
        const { name, description, active } = category;

        const createCategory = new Category(null, name, description, active);

        return await categoryRepository.create(createCategory);
    },
    get: async (id) => {
        if (!id) throw createError(422, "ID Undefined", null);
        return await categoryRepository.get(id);
    },
    all: async () => {
        const total = await categoryRepository.total();
        const data = await categoryRepository.all();
        return { total: total, data: data };
    },
    delete: async (id) => {
        if (!id) throw createError(422, "ID Undefined", null);
        return await categoryRepository.delete(id);
    },
    update: (category) => {
        return categoryRepository.update(category);
    },
});
