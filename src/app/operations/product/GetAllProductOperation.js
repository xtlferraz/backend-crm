module.exports = ({ productService }) => ({
    execute: async () => {
        return await productService.all();
    },
});
