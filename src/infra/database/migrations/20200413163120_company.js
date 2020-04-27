exports.up = function (knex) {
    return knex.schema.createTable("company", function (table) {
        table.increments();
        table.string("name").notNullable();
        table.string("cnpj").notNullable();
        table.string("dtNascimento").notNullable();
        table.string("sexo").notNullable();
        table.string("email").notNullable();
        table.boolean("active").notNullable();
        table.integer("user_id").notNullable();
        table.foreign("user_id").references("id").inTable("user");
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("company");
};
