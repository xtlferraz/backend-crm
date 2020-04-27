module.exports = ({ userService }) => ({
    execute: (user) => {
        return userService.update(user);
    },
});
