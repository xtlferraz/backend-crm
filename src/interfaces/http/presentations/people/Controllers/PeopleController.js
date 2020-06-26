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
        res.send({ status: 200, result: people });
    },
    getAll: async (req, res) => {
        const people = await getAllPeopleOperation.execute();
        res.send({ status: 200, result: people.data });
    },
    createPeople: async (req, res) => {
        const response = createPeopleOperation.execute(req.body);
        res.send({ status: 200, result: response });
    },
    updatePeople: async (req, res) => {
        const response = updatePeopleOperation.execute(req.body);

        res.send({ status: 200, result: response });
    },
    deletePeople: async (req, res) => {
        await deletePeopleOperation.execute(req.params.id);
        const people = await getPeopleOperation.execute(req.params.id);
        res.send({ status: 200, result: people });
    },
});

module.exports = API;
