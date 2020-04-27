module.exports = ({ teamService }) => ({
    execute: async (team) => {
        return await teamService.create(team);
    },
});
