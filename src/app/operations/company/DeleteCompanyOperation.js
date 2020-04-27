module.exports = ({ companyService }) => ({
    execute: (id) => {
        return companyService.delete(id);
    },
});
