module.exports = ({ serviceService }) => ({
    execute: (service) => {
        return serviceService.update(service);
    },
});
