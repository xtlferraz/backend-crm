exports.up = function (knex) {
    return knex.schema.alterTable("people", function (table) {
        table.string("cep").nullable();
        table.string("address").nullable();
        table.string("state").nullable();
        table.string("city").nullable();
        table.string("neighborhood").nullable();
        table.string("country").nullable();
        table.string("complement").nullable();
        table.string("rg").nullable();
        table.string("cnh").nullable();
        table.string("dispatching_agency").nullable();
        table.string("resume").nullable();
        table.string("about").nullable();
        table.string("object").nullable();
        table.string("formation").nullable();
        table.string("institution").nullable();
        table.string("office").nullable();
        table.string("hobby").nullable();
        table.string("photograph").nullable();
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

        knex.schema.hasColumn("rg").then(function (exists) {
            if (exists) {
                table.dropColumn("rg");
            }
        });

        knex.schema.hasColumn("cnh").then(function (exists) {
            if (exists) {
                table.dropColumn("cnh");
            }
        });

        knex.schema.hasColumn("dispatching_agency").then(function (exists) {
            if (exists) {
                table.dropColumn("dispatching_agency");
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

        knex.schema.hasColumn("object").then(function (exists) {
            if (exists) {
                table.dropColumn("object");
            }
        });

        knex.schema.hasColumn("formation").then(function (exists) {
            if (exists) {
                table.dropColumn("formation");
            }
        });

        knex.schema.hasColumn("institution").then(function (exists) {
            if (exists) {
                table.dropColumn("institution");
            }
        });

        knex.schema.hasColumn("office").then(function (exists) {
            if (exists) {
                table.dropColumn("office");
            }
        });

        knex.schema.hasColumn("hobby").then(function (exists) {
            if (exists) {
                table.dropColumn("hobby");
            }
        });

        knex.schema.hasColumn("photograph").then(function (exists) {
            if (exists) {
                table.dropColumn("photograph");
            }
        });
    });
};
