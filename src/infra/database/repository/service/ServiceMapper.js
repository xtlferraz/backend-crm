const clear = require("../support/ClearObject");
const Service = require("../../../../domain/entitities/Service");

const ServiceMapper = {
    toEntity: (databaseObject) => {
        if (!databaseObject) return null;
        const {
            id,
            name,
            description,
            time_hour,
            value_hour,
            active,
            category_id,
        } = databaseObject;
        return new Service(
            id,
            name,
            description,
            time_hour,
            value_hour,
            active,
            category_id
        );
    },
    toDatabase: (domainEntity) => {
        const {
            id,
            name,
            description,
            time_hour,
            value_hour,
            active,
            category_id,
        } = domainEntity;

        const serviceMapper = {
            id,
            name,
            description,
            time_hour,
            value_hour,
            active,
            category_id,
        };

        clear(serviceMapper);
        return serviceMapper;
    },
    toPopulation: (databaseObject) => {
        if (!databaseObject) return null;
        const { population } = databaseObject[0];
        return population;
    },
};

module.exports = ServiceMapper;
