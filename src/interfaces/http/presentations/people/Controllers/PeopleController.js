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
        res.setHeader("X-Total-Count", people.total);
        res.send({ status: 200, result: people.data });
    },
    createPeople: async (req, res) => {
        const result = await createPeopleOperation.execute(req.body);
        res.send({ status: 200, result: result });
    },
    updatePeople: async (req, res) => {
        const result = await updatePeopleOperation.execute(req.body);
        res.send({ status: 200, result: result });
    },
    deletePeople: async (req, res) => {
        await deletePeopleOperation.execute(req.params.id);
        const people = await getPeopleOperation.execute(req.params.id);
        res.send({ status: 200, result: people });
    },
});

module.exports = API;
