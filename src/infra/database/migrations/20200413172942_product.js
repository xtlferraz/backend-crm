exports.up = function (knex) {
    return knex.schema.createTable("product", function (table) {
        table.increments();
        table.string("name").notNullable();
        table.string("description").notNullable();
        table.string("image").notNullable();
        table.string("value").notNullable();
        table.boolean("active").notNullable();
        table.integer("category_id").notNullable();
        table.foreign("category_id").references("id").inTable("category");
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("product");
};
