module.exports = ({ leadService }) => ({
    execute: async () => {
        return await leadService.all();
    },
});
