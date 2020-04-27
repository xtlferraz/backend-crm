module.exports = ({ leadService }) => ({
    execute: (lead) => {
        return leadService.update(lead);
    },
});
