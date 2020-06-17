const { loadControllers, scopePerRequest } = require("awilix-express");
const config = "security-auth";
const morgan = require("morgan");
const container = require("./container");
const { app, express } = container.cradle;
app.set("superSecurity-auth", config);
app.use(morgan("tiny"));
app.use(scopePerRequest(container));
app.use(loadControllers("src/interfaces/http/routes/*.js", { cwd: __dirname }));
app.use(express.json());

const pessoaFisica = require("path").join(
    __dirname,
    "src/interfaces/http/presentations/people/Controllers/people/uploads/"
);

const pessoaJuridica = require("path").join(
    __dirname,
    "src/interfaces/http/presentations/company/Controllers/company/uploads/"
);

app.use(express.static(pessoaFisica));
app.use(express.static(pessoaJuridica));

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
