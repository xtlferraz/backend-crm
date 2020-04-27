const clear = require("../support/ClearObject");
const Event = require("../../../../domain/entitities/Event");

const EventMapper = {
    toEntity: (databaseObject) => {
        if (!databaseObject) return null;
        const {
            id,
            name,
            description,
            date_include,
            active,
            team_id,
        } = databaseObject;
        return new Event(id, name, description, date_include, active, team_id);
    },
    toDatabase: (domainEntity) => {
        const {
            id,
            name,
            description,
            date_include,
            active,
            team_id,
        } = domainEntity;

        const eventMapper = {
            id,
            name,
            description,
            date_include,
            active,
            team_id,
        };

        clear(eventMapper);
        return eventMapper;
    },
    toPopulation: (databaseObject) => {
        if (!databaseObject) return null;
        const { population } = databaseObject[0];
        return population;
    },
};

module.exports = EventMapper;
