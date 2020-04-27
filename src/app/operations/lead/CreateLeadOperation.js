module.exports = ({ leadService }) => ({
    execute: async (lead) => {
        return await leadService.create(lead);
    },
});
