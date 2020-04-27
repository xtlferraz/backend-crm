module.exports = ({ productService }) => ({
    execute: (id) => {
        return productService.delete(id);
    },
});
