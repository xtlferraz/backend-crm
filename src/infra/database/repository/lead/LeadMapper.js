const clear = require("../support/ClearObject");
const Lead = require("../../../../domain/entitities/Lead");

const LeadMapper = {
    toEntity: (databaseObject) => {
        if (!databaseObject) return null;
        const {
            id,
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
        } = databaseObject;

        return new Lead(
            id,
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
    },
    toDatabase: (domainEntity) => {
        const {
            id,
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
        } = domainEntity;

        const leadMapper = {
            id,
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
        };

        clear(leadMapper);
        return leadMapper;
    },
    toPopulation: (databaseObject) => {
        if (!databaseObject) return null;
        const { population } = databaseObject[0];
        return population;
    },
};

module.exports = LeadMapper;
