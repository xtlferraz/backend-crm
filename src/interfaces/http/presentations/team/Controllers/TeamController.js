const API = ({
    getTeamOperation,
    getAllTeamOperation,
    createTeamOperation,
    updateTeamOperation,
    deleteTeamOperation,
}) => ({
    getTeam: async (req, res) => {
        const team = await getTeamOperation.execute(req.params.id);
        res.send({ status: 200, result: team });
    },
    getAll: async (req, res) => {
        const team = await getAllTeamOperation.execute();
        res.setHeader("X-Total-Count", team.total);
        res.send({ status: 200, result: team.data });
    },
    createTeam: async (req, res) => {
        const result = await createTeamOperation.execute(req.body);
        res.send({ status: 200, result: result });
    },
    updateTeam: async (req, res) => {
        const result = await updateTeamOperation.execute(req.body);
        res.send({ status: 200, result: result });
    },
    deleteTeam: async (req, res) => {
        await deleteTeamOperation.execute(req.params.id);
        const team = await getTeamOperation.execute(req.params.id);
        res.send({ status: 200, result: team });
    },
});

module.exports = API;
