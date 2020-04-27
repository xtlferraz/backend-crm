module.exports = ({ companyService }) => ({
    execute: async (company) => {
        return await companyService.create(company);
    },
});
