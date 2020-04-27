module.exports = ({ groupService }) => ({
    execute: (group) => {
        return groupService.update(group);
    },
});
