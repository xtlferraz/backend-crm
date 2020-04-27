exports.up = function (knex) {
    return knex.schema.createTable("team", function (table) {
        table.increments();
        table.string("name").notNullable();
        table.string("description").notNullable();
        table.boolean("active").notNullable();
        table.integer("people_id").notNullable();
        table.foreign("people_id").references("id").inTable("people");
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("team");
};
