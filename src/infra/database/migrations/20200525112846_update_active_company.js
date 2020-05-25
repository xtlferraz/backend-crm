exports.up = function (knex) {
    return knex.schema.alterTable("company", function (table) {
        table.string("active").nullable();
    });
};

exports.down = function (knex) {
    knex.schema.hasColumn("active").then(function (exists) {
        if (exists) {
            table.dropColumn("active");
        }
    });
};
