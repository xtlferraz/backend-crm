const clear = require("../support/ClearObject");
const Product = require("../../../../domain/entitities/Product");

const ProductMapper = {
    toEntity: (databaseObject) => {
        if (!databaseObject) return null;
        const {
            id,
            name,
            description,
            image,
            active,
            value,
            category_id,
        } = databaseObject;
        return new Product(
            id,
            name,
            description,
            image,
            active,
            value,
            category_id
        );
    },
    toDatabase: (domainEntity) => {
        const {
            id,
            name,
            description,
            image,
            active,
            value,
            category_id,
        } = domainEntity;

        const productMapper = {
            id,
            name,
            description,
            image,
            active,
            value,
            category_id,
        };

        clear(productMapper);
        return productMapper;
    },
    toPopulation: (databaseObject) => {
        if (!databaseObject) return null;
        const { population } = databaseObject[0];
        return population;
    },
};

module.exports = ProductMapper;
