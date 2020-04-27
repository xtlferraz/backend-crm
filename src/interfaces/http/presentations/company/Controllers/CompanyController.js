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
        const result = await createCompanyOperation.execute(req.body);
        res.send({ status: 200, result: result });
    },
    updateCompany: async (req, res) => {
        const result = await updateCompanyOperation.execute(req.body);
        res.send({ status: 200, result: result });
    },
    deleteCompany: async (req, res) => {
        await deleteCompanyOperation.execute(req.params.id);
        const company = await getCompanyOperation.execute(req.params.id);
        res.send({ status: 200, result: company });
    },
});

module.exports = API;
