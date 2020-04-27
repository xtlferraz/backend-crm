exports.up = function (knex) {
    return knex.schema.createTable("unity", function (table) {
        table.increments();
        table.string("name").notNullable();
        table.integer("company_id").notNullable();
        table.foreign("company_id").references("id").inTable("company");
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("unity");
};
