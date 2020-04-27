const Company = require("../../../domain/entitities/Company");

module.exports = ({ companyRepository, createError }) => ({
    create: async (lead) => {
        const { name, cnpj, dtNascimento, sexo, active, email, user_id } = lead;

        const createCompany = new Company(
            null,
            name,
            cnpj,
            dtNascimento,
            sexo,
            active,
            email,
            user_id
        );

        return await companyRepository.create(createCompany);
    },
    get: async (id) => {
        if (!id) throw createError(422, "ID Undefined", null);
        return await companyRepository.get(id);
    },
    all: async () => {
        const total = await companyRepository.total();
        const data = await companyRepository.all();
        return { total: total, data: data };
    },
    delete: async (id) => {
        if (!id) throw createError(422, "ID Undefined", null);
        return await companyRepository.delete(id);
    },
    update: (user) => {
        return companyRepository.update(user);
    },
});
