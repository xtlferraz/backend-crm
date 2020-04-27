// Update with your config settings.

module.exports = {
    development: {
        client: "sqlite3",
        connection: {
            filename: "./src/infra/database/sqlite/db.sqlite3",
        },
        migrations: {
            directory: "./src/infra/database/migrations",
        },
        seeds: {
            directory: "./src/infra/database/seeds",
        },
        useNullAsDefault: true,
    },

    staging: {
        client: "postgresql",
        connection: {
            database: "my_db",
            user: "username",
            password: "password",
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
        },
    },

    production: {
        client: "postgresql",
        connection: {
            host: "ec2-23-20-129-146.compute-1.amazonaws.com",
            database: "de2bgbr1rutitt",
            user: "xpbzphmiknzxib",
            password:
                "8d76ea087f0398dc87a94208880f9de57cc238b5053fa4fe3001e8c2ce13b3bf",
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            directory: "./src/infra/database/migrations",
        },
    },
};
