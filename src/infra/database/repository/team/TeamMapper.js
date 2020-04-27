const clear = require("../support/ClearObject");
const Team = require("../../../../domain/entitities/Team");

const TeamMapper = {
    toEntity: (databaseObject) => {
        if (!databaseObject) return null;
        const { id, name, description, active, people_id } = databaseObject;
        return new Team(id, name, description, active, people_id);
    },
    toDatabase: (domainEntity) => {
        const { id, name, description, active, people_id } = domainEntity;

        const teamMapper = {
            name,
            description,
            active,
            people_id,
        };

        clear(teamMapper);
        return teamMapper;
    },
    toPopulation: (databaseObject) => {
        if (!databaseObject) return null;
        const { population } = databaseObject[0];
        return population;
    },
};

module.exports = TeamMapper;
