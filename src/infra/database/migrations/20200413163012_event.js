exports.up = function (knex) {
    return knex.schema.createTable("event", function (table) {
        table.increments();
        table.string("name").notNullable();
        table.string("description").notNullable();
        table.datetime("date_include");
        table.boolean("active").notNullable();
        table.integer("team_id").notNullable();
        table.foreign("team_id").references("id").inTable("team");
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("event");
};
