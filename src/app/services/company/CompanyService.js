const Company = require("../../../domain/entitities/Company");

module.exports = ({ companyRepository, createError }) => ({
    create: async (company) => {
        const {
            name,
            cnpj,
            dtNascimento,
            sexo,
            active,
            email,
            user_id,
            fantasy_name,
            cep,
            address,
            state,
            city,
            neighborhood,
            country,
            complement,
            state_registration,
            city_registration,
            resume,
            about,
            mission,
            values,
            logo,
        } = company;

        const createCompany = new Company(
            undefined,
            name,
            cnpj,
            dtNascimento,
            sexo,
            active,
            email,
            user_id,
            fantasy_name,
            cep,
            address,
            state,
            city,
            neighborhood,
            country,
            complement,
            state_registration,
            city_registration,
            resume,
            about,
            mission,
            values,
            logo
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
