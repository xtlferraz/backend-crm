module.exports = ({ serviceService }) => ({
    execute: async (service) => {
        return await serviceService.create(service);
    },
});
