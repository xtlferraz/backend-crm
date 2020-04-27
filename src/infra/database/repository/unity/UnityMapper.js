const clear = require("../support/ClearObject");
const Unity = require("../../../../domain/entitities/Unity");

const UnityMapper = {
    toEntity: (databaseObject) => {
        if (!databaseObject) return null;
        const { id, name, company_id } = databaseObject;
        return new Unity(id, name, company_id);
    },
    toDatabase: (domainEntity) => {
        const { id, name, company_id } = domainEntity;

        const unityMapper = {
            id,
            name,
            company_id,
        };

        clear(unityMapper);
        return unityMapper;
    },
    toPopulation: (databaseObject) => {
        if (!databaseObject) return null;
        const { population } = databaseObject[0];
        return population;
    },
};

module.exports = UnityMapper;
