module.exports = ({ serviceService }) => ({
    execute: (id) => {
        return serviceService.delete(id);
    },
});
