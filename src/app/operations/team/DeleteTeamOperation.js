module.exports = ({ teamService }) => ({
    execute: (id) => {
        return teamService.delete(id);
    },
});
