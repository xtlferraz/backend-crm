module.exports = ({ groupService }) => ({
    execute: (id) => {
        return groupService.get(id);
    },
});
