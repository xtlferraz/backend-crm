const clear = require("../support/ClearObject");
const User = require("../../../../domain/entitities/User");

const UserMapper = {
    toEntity: (databaseObject) => {
        if (!databaseObject) return null;
        const { id, name, email, password, active } = databaseObject;
        return new User(id, name, email, password, active);
    },
    toDatabase: (domainEntity) => {
        const { id, name, email, password, active } = domainEntity;

        const userMapper = {
            id,
            name,
            email,
            password,
            active,
        };

        clear(userMapper);
        return userMapper;
    },
    toPopulation: (databaseObject) => {
        if (!databaseObject) return null;
        const { population } = databaseObject[0];
        return population;
    },
};

module.exports = UserMapper;
