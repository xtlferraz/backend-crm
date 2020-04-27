module.exports = ({ eventService }) => ({
    execute: async () => {
        return await eventService.all();
    },
});
