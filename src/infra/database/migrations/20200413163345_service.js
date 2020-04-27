exports.up = function (knex) {
    return knex.schema.createTable("service", function (table) {
        table.increments();
        table.string("name").notNullable();
        table.string("description").notNullable();
        table.time("time_hour").notNullable();
        table.boolean("active").notNullable();
        table.integer("category_id").notNullable();
        table.string("value_hour").notNullable();
        table.foreign("category_id").references("id").inTable("category");
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("service");
};
