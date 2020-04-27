module.exports = ({ companyService }) => ({
    execute: async () => {
        return await companyService.all();
    },
});
