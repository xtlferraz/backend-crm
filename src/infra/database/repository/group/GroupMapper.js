const clear = require("../support/ClearObject");
const Group = require("../../../../domain/entitities/Group");

const GroupMapper = {
    toEntity: (databaseObject) => {
        if (!databaseObject) return null;
        const { id, name, role, user_id } = databaseObject;
        return new Group(id, name, role, user_id);
    },
    toDatabase: (domainEntity) => {
        const { name, role, user_id } = domainEntity;

        const groupMapper = {
            name,
            role,
            user_id,
        };

        clear(groupMapper);
        return groupMapper;
    },
    toPopulation: (databaseObject) => {
        if (!databaseObject) return null;
        const { population } = databaseObject[0];
        return population;
    },
};

module.exports = GroupMapper;
