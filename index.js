const express = require("express");
const { createContainer, InjectionMode, asValue } = require("awilix");
const { loadControllers, scopePerRequest } = require("awilix-express");
const app = express();
const createError = require("http-errors");
const axios = require("axios");
const connection = require("./src/infra/database/connection/DatabaseConnection");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const config = "security-auth";
const morgan = require("morgan");
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
app.set("superSecurity-auth", config);
app.use(cors());
app.use(morgan("tiny"));
app.use(scopePerRequest(container));
app.use(loadControllers("src/interfaces/http/routes/*.js", { cwd: __dirname }));
app.use(express.json());

const publicDir = require("path").join(
    __dirname,
    "src/interfaces/http/presentations/state/Controllers/state/uploads/"
);
app.use(express.static(publicDir));
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        status: error.status,
        message: error.message,
        stack: error.stack,
    });
});
const porta = process.env.PORT || 4000;
app.listen(porta);
