const People = require("../../../domain/entitities/People");

module.exports = ({ peopleRepository, createError }) => ({
    create: async (people) => {
        const {
            name,
            cpf,
            dtNascimento,
            sexo,
            active,
            email,
            user_id,
            short_name,
        } = people;

        const createPeople = new People(
            undefined,
            name,
            cpf,
            dtNascimento,
            sexo,
            active,
            email,
            user_id,
            short_name
        );

        return await peopleRepository.create(createPeople);
    },
    get: async (id) => {
        if (!id) throw createError(422, "ID Undefined", null);
        return await peopleRepository.get(id);
    },
    all: async () => {
        const total = await peopleRepository.total();
        const data = await peopleRepository.all();
        return { total: total, data: data };
    },
    delete: async (id) => {
        if (!id) throw createError(422, "ID Undefined", null);
        return await peopleRepository.delete(id);
    },
    update: (people) => {
        return peopleRepository.update(people);
    },
});
