module.exports = ({ serviceService }) => ({
    execute: (id) => {
        return serviceService.get(id);
    },
});
