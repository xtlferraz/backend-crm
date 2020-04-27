module.exports = ({ userService }) => ({
    execute: (id) => {
        return userService.delete(id);
    },
});
