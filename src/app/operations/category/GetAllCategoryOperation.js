module.exports = ({ categoryService }) => ({
    execute: async () => {
        return await categoryService.all();
    },
});
