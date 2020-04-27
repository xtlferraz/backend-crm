module.exports = ({ teamService }) => ({
    execute: (team) => {
        return teamService.update(team);
    },
});
