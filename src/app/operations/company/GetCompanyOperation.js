module.exports = ({ companyService }) => ({
    execute: (id) => {
        return companyService.get(id);
    },
});
