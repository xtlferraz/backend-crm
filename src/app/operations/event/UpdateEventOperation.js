module.exports = ({ eventService }) => ({
    execute: (user) => {
        return eventService.update(user);
    },
});
