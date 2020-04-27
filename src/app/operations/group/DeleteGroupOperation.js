module.exports = ({ groupService }) => ({
    execute: (id) => {
        return groupService.delete(id);
    },
});
