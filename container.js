const express = require("express");
const { createContainer, InjectionMode, asValue } = require("awilix");
const app = express();
const cors = require("cors");
app.use(cors());
const createError = require("http-errors");
const axios = require("axios");
const connection = require("./src/infra/database/connection/DatabaseConnection");
const jwt = require("jsonwebtoken");
const config = "security-auth";
const bcrypt = require("bcrypt");
const container = createContainer();
container
    .register({
        createError: asValue(createError),
        connection: asValue(connection),
        axios: asValue(axios),
        jwt: asValue(jwt),
        config: asValue(config),
        bcrypt: asValue(bcrypt),
        app: asValue(app),
        express: asValue(express),
    })
    .loadModules(
        [
            "src/app/operations/**/*.js",
            "src/app/services/**/*.js",
            "src/infra/database/repository/**/*.js",
            "src/infra/integration/rest/**/*.js",
        ],
        {
            formatName: "camelCase",
            resolverOptions: {
                injectionMode: InjectionMode.PROXY,
            },
        }
    );
module.exports = container;
