module.exports = ({ groupService }) => ({
    execute: async () => {
        return await groupService.all();
    },
});
