exports.up = function (knex) {
    return knex.schema.createTable("people", function (table) {
        table.increments();
        table.string("name").notNullable();
        table.integer("cpf").notNullable();
        table.string("dtNascimento");
        table.string("sexo");
        table.string("email");
        table.string("active").notNullable();
        table.integer("user_id");
        table.foreign("user_id").references("id").inTable("user");
        table.unique("cpf");
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("people");
};
