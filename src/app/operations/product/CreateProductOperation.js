module.exports = ({ productService }) => ({
    execute: async (lead) => {
        return await productService.create(lead);
    },
});
