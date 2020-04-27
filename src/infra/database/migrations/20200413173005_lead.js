exports.up = function (knex) {
    return knex.schema.createTable("lead", function (table) {
        table.increments();
        table.string("name").notNullable();
        table.string("description").notNullable();
        table.string("email").notNullable();
        table.string("phone").notNullable();
        table.string("midia").notNullable();
        table.string("campaign").notNullable();
        table.boolean("active").notNullable();
        table.integer("user_id").nullable();
        table.integer("company_id").nullable();
        table.integer("unity_id").nullable();
        table.integer("product_id").nullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("lead");
};
