module.exports = ({ eventService }) => ({
    execute: (id) => {
        return eventService.delete(id);
    },
});
