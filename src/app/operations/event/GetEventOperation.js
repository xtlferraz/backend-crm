module.exports = ({ eventService }) => ({
    execute: (id) => {
        return eventService.get(id);
    },
});
