const formidable = require("formidable");
var fs = require("fs");
const API = ({
    getPeopleOperation,
    getAllPeopleOperation,
    createPeopleOperation,
    updatePeopleOperation,
    deletePeopleOperation,
}) => ({
    getPeople: async (req, res) => {
        const people = await getPeopleOperation.execute(req.params.id);
        res.send({ status: 200, result: [people] });
    },
    getAll: async (req, res) => {
        const people = await getAllPeopleOperation.execute();
        res.send({ status: 200, result: people.data });
    },
    createPeople: async (req, res) => {
        new formidable.IncomingForm().parse(req, (err, fields, files) => {
            if (err) {
                throw err;
            }

            fs.copyFileSync(
                files.photograph.path,
                __dirname + "/people/uploads/" + files.photograph.name,
                function (err) {
                    if (err) {
                        throw err;
                    }
                }
            );

            createPeopleOperation
                .execute({
                    id: fields.id,
                    photograph: files.photograph.name,
                    name: fields.name,
                    cpf: fields.cpf,
                    dtNascimento: fields.dtNascimento,
                    sexo: fields.sexo,
                    active: fields.active,
                    email: fields.email,
                    user_id: fields.user_id,
                    short_name: fields.short_name,
                    cep: fields.cep,
                    address: fields.address,
                    object: fields.object,
                    state: fields.state,
                    neighborhood: fields.neighborhood,
                    country: fields.country,
                    complement: fields.complement,
                    rg: fields.rg,
                    cnh: fields.cnh,
                    dispatching_agency: fields.dispatching_agency,
                    resume: fields.resume,
                    about: fields.about,
                    formation: fields.formation,
                    institution: fields.institution,
                    office: fields.office,
                    hobby: fields.hobby,
                })
                .then(function (response) {
                    res.send({ status: 200, result: response });
                })
                .catch(function (e) {
                    throw e;
                });
        });
    },
    updatePeople: async (req, res) => {
        new formidable.IncomingForm().parse(req, (err, fields, files) => {
            if (err) {
                throw err;
            }

            fs.copyFileSync(
                files.photograph.path,
                __dirname + "/people/uploads/" + files.photograph.name,
                function (err) {
                    if (err) {
                        throw err;
                    }
                }
            );

            updatePeopleOperation
                .execute({
                    id: fields.id,
                    photograph: files.photograph.name,
                    name: fields.name,
                    cpf: fields.cpf,
                    dtNascimento: fields.dtNascimento,
                    sexo: fields.sexo,
                    active: fields.active,
                    email: fields.email,
                    user_id: fields.user_id,
                    short_name: fields.short_name,
                    cep: fields.cep,
                    address: fields.address,
                    object: fields.object,
                    state: fields.state,
                    neighborhood: fields.neighborhood,
                    country: fields.country,
                    complement: fields.complement,
                    rg: fields.rg,
                    cnh: fields.cnh,
                    dispatching_agency: fields.dispatching_agency,
                    resume: fields.resume,
                    about: fields.about,
                    formation: fields.formation,
                    institution: fields.institution,
                    office: fields.office,
                    hobby: fields.hobby,
                })
                .then(function (response) {
                    res.send({ status: 200, result: response });
                })
                .catch(function (e) {
                    throw e;
                });
        });
    },
    deletePeople: async (req, res) => {
        await deletePeopleOperation.execute(req.params.id);
        const people = await getPeopleOperation.execute(req.params.id);
        res.send({ status: 200, result: people });
    },
});

module.exports = API;
