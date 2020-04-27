const API = ({
    getGroupOperation,
    getAllGroupOperation,
    createGroupOperation,
    updateGroupOperation,
    deleteGroupOperation,
}) => ({
    getGroup: async (req, res) => {
        const group = await getGroupOperation.execute(req.params.id);
        res.send({ status: 200, result: group });
    },
    getAll: async (req, res) => {
        const group = await getAllGroupOperation.execute();
        res.setHeader("X-Total-Count", group.total);
        res.send({ status: 200, result: group.data });
    },
    createGroup: async (req, res) => {
        const result = await createGroupOperation.execute(req.body);
        res.send({ status: 200, result: result });
    },
    updateGroup: async (req, res) => {
        const result = await updateGroupOperation.execute(req.body);
        res.send({ status: 200, result: result });
    },
    deleteGroup: async (req, res) => {
        await deleteGroupOperation.execute(req.params.id);
        const group = await getGroupOperation.execute(req.params.id);
        res.send({ status: 200, result: group });
    },
});

module.exports = API;
