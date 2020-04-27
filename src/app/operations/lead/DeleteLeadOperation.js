module.exports = ({ leadService }) => ({
    execute: (id) => {
        return leadService.delete(id);
    },
});
