const Lead = require("../../../domain/entitities/Lead");

module.exports = ({ leadRepository, createError }) => ({
    create: async (lead) => {
        const {
            name,
            description,
            email,
            active,
            phone,
            midia,
            campaign,
            user_id,
            company_id,
            unity_id,
            product_id,
        } = lead;

        const createLead = new Lead(
            null,
            name,
            description,
            email,
            active,
            phone,
            midia,
            campaign,
            user_id,
            company_id,
            unity_id,
            product_id
        );

        return await leadRepository.create(createLead);
    },
    get: async (id) => {
        if (!id) throw createError(422, "ID Undefined", null);
        return await leadRepository.get(id);
    },
    all: async () => {
        const total = await leadRepository.total();
        const data = await leadRepository.all();
        return { total: total, data: data };
    },
    delete: async (id) => {
        if (!id) throw createError(422, "ID Undefined", null);
        return await leadRepository.delete(id);
    },
    update: (user) => {
        return leadRepository.update(user);
    },
});
