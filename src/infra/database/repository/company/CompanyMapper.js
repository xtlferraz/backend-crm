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
        } = databaseObject;
        return new Company(
            id,
            name,
            cnpj,
            dtNascimento,
            sexo,
            active,
            email,
            user_id
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
