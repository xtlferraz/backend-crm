module.exports = ({ companyService }) => ({
    execute: (company) => {
        return companyService.update(company);
    },
});
