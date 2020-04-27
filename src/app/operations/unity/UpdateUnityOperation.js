module.exports = ({ unityService }) => ({
    execute: (user) => {
        return unityService.update(user);
    },
});
