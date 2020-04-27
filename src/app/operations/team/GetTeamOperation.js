module.exports = ({ teamService }) => ({
    execute: (id) => {
        return teamService.get(id);
    },
});
