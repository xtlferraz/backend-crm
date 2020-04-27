module.exports = ({ userService }) => ({
    execute: (id) => {
        return userService.get(id);
    },
});
