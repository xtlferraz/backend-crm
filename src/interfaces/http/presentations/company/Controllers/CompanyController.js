const formidable = require("formidable");
var fs = require("fs");
const API = ({
    getCompanyOperation,
    getAllCompanyOperation,
    createCompanyOperation,
    updateCompanyOperation,
    deleteCompanyOperation,
}) => ({
    getCompany: async (req, res) => {
        const company = await getCompanyOperation.execute(req.params.id);
        res.send({ status: 200, result: company });
    },
    getAll: async (req, res) => {
        const company = await getAllCompanyOperation.execute();
        res.send({ status: 200, result: company.data });
    },
    createCompany: async (req, res) => {
        new formidable.IncomingForm().parse(req, (err, fields, files) => {
            if (err) {
                throw err;
            }

            fs.copyFileSync(
                files.logo.path,
                __dirname + "/company/uploads/" + files.logo.name,
                function (err) {
                    if (err) {
                        throw err;
                    }
                }
            );

            createCompanyOperation
                .execute({
                    id: fields.id,
                    logo: files.logo.name,
                    name: fields.name,
                    cnpj: fields.cnpj,
                    dtNascimento: fields.dtNascimento,
                    sexo: fields.sexo,
                    active: fields.active,
                    email: fields.email,
                    user_id: fields.user_id,
                    fantasy_name: fields.fantasy_name,
                    cep: fields.cep,
                    address: fields.address,
                    object: fields.object,
                    state: fields.state,
                    neighborhood: fields.neighborhood,
                    country: fields.country,
                    complement: fields.complement,
                    state_registration: fields.state_registration,
                    city_registration: fields.city_registration,
                    resume: fields.resume,
                    about: fields.about,
                    mission: fields.mission,
                    values: fields.values,
                })
                .then(function (response) {
                    res.send({ status: 200, result: response });
                })
                .catch(function (e) {
                    throw e;
                });
        });
    },
    updateCompany: async (req, res) => {
        new formidable.IncomingForm().parse(req, (err, fields, files) => {
            if (err) {
                throw err;
            }

            fs.copyFileSync(
                files.logo.path,
                __dirname + "/company/uploads/" + files.logo.name,
                function (err) {
                    if (err) {
                        throw err;
                    }
                }
            );

            updateCompanyOperation
                .execute({
                    id: fields.id,
                    logo: files.logo.name,
                    name: fields.name,
                    cnpj: fields.cnpj,
                    dtNascimento: fields.dtNascimento,
                    sexo: fields.sexo,
                    active: fields.active,
                    email: fields.email,
                    user_id: fields.user_id,
                    fantasy_name: fields.fantasy_name,
                    cep: fields.cep,
                    address: fields.address,
                    object: fields.object,
                    state: fields.state,
                    neighborhood: fields.neighborhood,
                    country: fields.country,
                    complement: fields.complement,
                    state_registration: fields.state_registration,
                    city_registration: fields.city_registration,
                    resume: fields.resume,
                    about: fields.about,
                    mission: fields.mission,
                    values: fields.values,
                })
                .then(function (response) {
                    res.send({ status: 200, result: response });
                })
                .catch(function (e) {
                    throw e;
                });
        });
    },
    deleteCompany: async (req, res) => {
        await deleteCompanyOperation.execute(req.params.id);
        const company = await getCompanyOperation.execute(req.params.id);
        res.send({ status: 200, result: company });
    },
});

module.exports = API;
