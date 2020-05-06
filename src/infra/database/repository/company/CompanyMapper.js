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
            fantasy_name
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
