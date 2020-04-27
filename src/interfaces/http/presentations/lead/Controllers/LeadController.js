const API = ({
    getLeadOperation,
    getAllLeadOperation,
    createLeadOperation,
    updateLeadOperation,
    deleteLeadOperation,
}) => ({
    getLead: async (req, res) => {
        const lead = await getLeadOperation.execute(req.params.id);
        res.send({ status: 200, result: lead });
    },
    getAll: async (req, res) => {
        const lead = await getAllLeadOperation.execute();
        res.send({ status: 200, result: lead.data });
    },
    createLead: async (req, res) => {
        const result = await createLeadOperation.execute(req.body);
        res.send({ status: 200, result: result });
    },
    updateLead: async (req, res) => {
        const result = await updateLeadOperation.execute(req.body);
        res.send({ status: 200, result: result });
    },
    deleteLead: async (req, res) => {
        await deleteLeadOperation.execute(req.params.id);
        const lead = await getLeadOperation.execute(req.params.id);
        res.send({ status: 200, result: lead });
    },
});

module.exports = API;
