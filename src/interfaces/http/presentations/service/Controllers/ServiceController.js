const API = ({
    getServiceOperation,
    getAllServiceOperation,
    createServiceOperation,
    updateServiceOperation,
    deleteServiceOperation,
}) => ({
    getService: async (req, res) => {
        const service = await getServiceOperation.execute(req.params.id);
        res.send({ status: 200, result: service });
    },
    getAll: async (req, res) => {
        const service = await getAllServiceOperation.execute();
        res.send({ status: 200, result: service.data });
    },
    createService: async (req, res) => {
        const result = await createServiceOperation.execute(req.body);
        res.send({ status: 200, result: result });
    },
    updateService: async (req, res) => {
        const result = await updateServiceOperation.execute(req.body);
        res.send({ status: 200, result: result });
    },
    deleteService: async (req, res) => {
        await deleteServiceOperation.execute(req.params.id);
        const service = await getServiceOperation.execute(req.params.id);
        res.send({ status: 200, result: service });
    },
});

module.exports = API;
