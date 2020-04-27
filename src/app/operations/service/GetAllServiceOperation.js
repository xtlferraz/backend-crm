module.exports = ({ serviceService }) => ({
    execute: async () => {
        return await serviceService.all();
    },
});
