module.exports = ({ peopleService }) => ({
    execute: async () => {
        return await peopleService.all();
    },
});
