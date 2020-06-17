const clear = require("../support/ClearObject");
const Company = require("../../../../domain/entitities/Company");

const CompanyMapper = {
    toEntity: (databaseObject) => {
        if (!databaseObject) return null;
        const {
            id,
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
        } = databaseObject;
        return new Company(
            id,
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
    },
    toDatabase: (domainEntity) => {
        const {
            id,
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
        } = domainEntity;

        const companyMapper = {
            id,
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
        };

        clear(companyMapper);
        return companyMapper;
    },
    toPopulation: (databaseObject) => {
        if (!databaseObject) return null;
        const { population } = databaseObject[0];
        return population;
    },
};

module.exports = CompanyMapper;
