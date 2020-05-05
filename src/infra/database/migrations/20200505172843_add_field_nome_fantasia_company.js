exports.up = function (knex) {
    return knex.schema.alterTable("company", function (table) {
        table.string("fantasy_name").nullable();
    });
};

exports.down = function (knex) {
    return knex.schema.table("company", function (table) {
        // Doesn't work
        knex.schema.hasColumn("fantasy_name").then(function (exists) {
            if (exists) {
                table.dropColumn("fantasy_name");
            }
        });
    });
};
