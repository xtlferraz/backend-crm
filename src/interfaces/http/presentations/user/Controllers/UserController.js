const API = ({
    getUserOperation,
    getAllUserOperation,
    createUserOperation,
    updateUserOperation,
    deleteUserOperation,
}) => ({
    getUser: async (req, res) => {
        const user = await getUserOperation.execute(req.params.id);
        res.send({ status: 200, result: user });
    },
    getAll: async (req, res) => {
        const user = await getAllUserOperation.execute();
        res.setHeader("X-Total-Count", user.total);
        res.send({ status: 200, result: user.data });
    },
    createUser: async (req, res) => {
        const result = await createUserOperation.execute(req.body);
        res.send({ status: 200, result: result });
    },
    updateUser: async (req, res) => {
        const result = await updateUserOperation.execute(req.body);
        res.send({ status: 200, result: result });
    },
    deleteUser: async (req, res) => {
        await deleteUserOperation.execute(req.params.id);
        const user = await getUserOperation.execute(req.params.id);
        res.send({ status: 200, result: user });
    },
});

module.exports = API;
