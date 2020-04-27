module.exports = ({ unityService }) => ({
    execute: (id) => {
        return unityService.get(id);
    },
});
