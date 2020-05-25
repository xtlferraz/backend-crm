const clear = require("../support/ClearObject");
const People = require("../../../../domain/entitities/People");

const PeopleMapper = {
    toEntity: (databaseObject) => {
        if (!databaseObject) return null;
        const {
            id,
            name,
            cpf,
            dtNascimento,
            sexo,
            active,
            email,
            user_id,
            short_name,
            cep,
            address,
            state,
            city,
            neighborhood,
            country,
            complement,
            rg,
            cnh,
            dispatching_agency,
            resume,
            about,
            object,
            formation,
            institution,
            office,
            hobby,
            photograph,
        } = databaseObject;
        return new People(
            id,
            name,
            cpf,
            dtNascimento,
            sexo,
            active,
            email,
            user_id,
            short_name,
            cep,
            address,
            state,
            city,
            neighborhood,
            country,
            complement,
            rg,
            cnh,
            dispatching_agency,
            resume,
            about,
            object,
            formation,
            institution,
            office,
            hobby,
            photograph
        );
    },
    toDatabase: (domainEntity) => {
        const {
            id,
            name,
            cpf,
            dtNascimento,
            sexo,
            active,
            email,
            user_id,
            short_name,
            cep,
            address,
            state,
            city,
            neighborhood,
            country,
            complement,
            rg,
            cnh,
            dispatching_agency,
            resume,
            about,
            object,
            formation,
            institution,
            office,
            hobby,
            photograph,
        } = domainEntity;

        const peopleMapper = {
            id,
            name,
            cpf,
            dtNascimento,
            sexo,
            active,
            email,
            user_id,
            short_name,
            cep,
            address,
            state,
            city,
            neighborhood,
            country,
            complement,
            rg,
            cnh,
            dispatching_agency,
            resume,
            about,
            object,
            formation,
            institution,
            office,
            hobby,
            photograph,
        };

        clear(peopleMapper);
        return peopleMapper;
    },
    toPopulation: (databaseObject) => {
        if (!databaseObject) return null;
        const { population } = databaseObject[0];
        return population;
    },
};

module.exports = PeopleMapper;
