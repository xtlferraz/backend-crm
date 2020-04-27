module.exports = ({ unityService }) => ({
    execute: async (unity) => {
        return await unityService.create(unity);
    },
});
