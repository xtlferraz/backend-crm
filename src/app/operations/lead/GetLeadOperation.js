module.exports = ({ leadService }) => ({
    execute: (id) => {
        return leadService.get(id);
    },
});
