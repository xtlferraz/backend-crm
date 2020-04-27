module.exports = ({ userService }) => ({
    execute: async (user) => {
        return await userService.create(user);
    },
});
