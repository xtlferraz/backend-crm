exports.up = function (knex) {
    return knex.schema.alterTable("company", function (table) {
        table.string("cep").nullable();
        table.string("address").nullable();
        table.string("state").nullable();
        table.string("city").nullable();
        table.string("neighborhood").nullable();
        table.string("country").nullable();
        table.string("complement").nullable();
        table.string("state_registration").nullable();
        table.string("city_registration").nullable();
        table.string("resume").nullable();
        table.string("about").nullable();
        table.string("mission").nullable();
        table.string("values").nullable();
        table.string("logo").nullable();
    });
};

exports.down = function (knex) {
    return knex.schema.table("people", function (table) {
        knex.schema.hasColumn("cep").then(function (exists) {
            if (exists) {
                table.dropColumn("cep");
            }
        });

        knex.schema.hasColumn("address").then(function (exists) {
            if (exists) {
                table.dropColumn("address");
            }
        });

        knex.schema.hasColumn("state").then(function (exists) {
            if (exists) {
                table.dropColumn("state");
            }
        });

        knex.schema.hasColumn("city").then(function (exists) {
            if (exists) {
                table.dropColumn("city");
            }
        });

        knex.schema.hasColumn("neighborhood").then(function (exists) {
            if (exists) {
                table.dropColumn("neighborhood");
            }
        });

        knex.schema.hasColumn("country").then(function (exists) {
            if (exists) {
                table.dropColumn("country");
            }
        });

        knex.schema.hasColumn("complement").then(function (exists) {
            if (exists) {
                table.dropColumn("complement");
            }
        });

        knex.schema.hasColumn("resume").then(function (exists) {
            if (exists) {
                table.dropColumn("resume");
            }
        });

        knex.schema.hasColumn("about").then(function (exists) {
            if (exists) {
                table.dropColumn("about");
            }
        });

        knex.schema.hasColumn("mission").then(function (exists) {
            if (exists) {
                table.dropColumn("mission");
            }
        });

        knex.schema.hasColumn("values").then(function (exists) {
            if (exists) {
                table.dropColumn("values");
            }
        });

        knex.schema.hasColumn("logo").then(function (exists) {
            if (exists) {
                table.dropColumn("logo");
            }
        });

        knex.schema.hasColumn("city_registration").then(function (exists) {
            if (exists) {
                table.dropColumn("city_registration");
            }
        });

        knex.schema.hasColumn("state_registration").then(function (exists) {
            if (exists) {
                table.dropColumn("state_registration");
            }
        });
    });
};
