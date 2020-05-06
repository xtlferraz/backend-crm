exports.up = function (knex) {
    return knex.schema.createTable("company", function (table) {
        table.increments();
        table.string("name").notNullable();
        table.integer("cnpj").notNullable();
        table.string("dtNascimento");
        table.string("sexo");
        table.string("email");
        table.boolean("active");
        table.integer("user_id");
        table.foreign("user_id").references("id").inTable("user");
        table.unique("cnpj");
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("company");
};
