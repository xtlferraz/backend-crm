module.exports = ({ teamService }) => ({
    execute: async () => {
        return await teamService.all();
    },
});
