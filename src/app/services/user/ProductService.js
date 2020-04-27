const Product = require("../../../domain/entitities/Product");

module.exports = ({ productRepository, createError }) => ({
    create: async (product) => {
        const {
            name,
            description,
            image,
            active,
            value,
            category_id,
        } = product;

        const createProduct = new Product(
            null,
            name,
            description,
            image,
            active,
            value,
            category_id
        );

        return await productRepository.create(createProduct);
    },
    get: async (id) => {
        if (!id) throw createError(422, "ID Undefined", null);
        return await productRepository.get(id);
    },
    all: async () => {
        const total = await productRepository.total();
        const data = await productRepository.all();
        return { total: total, data: data };
    },
    delete: async (id) => {
        if (!id) throw createError(422, "ID Undefined", null);
        return await productRepository.delete(id);
    },
    update: (user) => {
        return productRepository.update(user);
    },
});
