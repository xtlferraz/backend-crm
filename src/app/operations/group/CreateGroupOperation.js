module.exports = ({ groupService }) => ({
    execute: async (group) => {
        return await groupService.create(group);
    },
});
