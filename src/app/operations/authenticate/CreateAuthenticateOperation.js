module.exports = ({ authenticateService }) => ({
    execute: async (auth) => {
        return await authenticateService.login(auth);
    },
});
