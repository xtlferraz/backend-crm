exports.up = function (knex) {
    return knex.schema.createTable("category", function (table) {
        table.increments();
        table.string("name").notNullable();
        table.string("description").notNullable();
        table.boolean("active").notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("category");
};
