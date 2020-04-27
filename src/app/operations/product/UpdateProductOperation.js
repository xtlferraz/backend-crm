module.exports = ({ productService }) => ({
    execute: (product) => {
        return productService.update(product);
    },
});
