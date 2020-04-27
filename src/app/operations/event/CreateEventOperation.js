module.exports = ({ eventService }) => ({
    execute: async (event) => {
        return await eventService.create(event);
    },
});
