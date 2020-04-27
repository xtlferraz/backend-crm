module.exports = ({ productService }) => ({
    execute: (id) => {
        return productService.get(id);
    },
});
