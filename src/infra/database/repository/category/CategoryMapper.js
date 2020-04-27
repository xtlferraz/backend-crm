const clear = require("../support/ClearObject");
const Category = require("../../../../domain/entitities/Category");

const CategoryMapper = {
    toEntity: (databaseObject) => {
        if (!databaseObject) return null;
        const { id, name, description, active } = databaseObject;
        return new Category(id, name, description, active);
    },
    toDatabase: (domainEntity) => {
        const { id, name, description, active } = domainEntity;

        const categoryMapper = {
            id,
            name,
            description,
            active,
        };

        clear(categoryMapper);
        return categoryMapper;
    },
    toPopulation: (databaseObject) => {
        if (!databaseObject) return null;
        const { population } = databaseObject[0];
        return population;
    },
};

module.exports = CategoryMapper;
