exports.up = function (knex) {
    return knex.schema.alterTable("people", function (table) {
        table.string("short_name").nullable();
    });
};

exports.down = function (knex) {
    return knex.schema.table("people", function (table) {
        // Doesn't work
        knex.schema.hasColumn("short_name").then(function (exists) {
            if (exists) {
                table.dropColumn("short_name");
            }
        });
    });
};
