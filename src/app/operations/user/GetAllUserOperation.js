module.exports = ({ userService }) => ({
    execute: async () => {
        return await userService.all();
    },
});
