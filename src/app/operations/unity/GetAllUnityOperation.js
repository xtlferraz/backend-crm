module.exports = ({ unityService }) => ({
    execute: async () => {
        return await unityService.all();
    },
});
