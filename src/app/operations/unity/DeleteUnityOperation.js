module.exports = ({ unityService }) => ({
    execute: (id) => {
        return unityService.delete(id);
    },
});
