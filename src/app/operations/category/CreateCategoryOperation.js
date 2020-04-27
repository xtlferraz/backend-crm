module.exports = ({ categoryService }) => ({
    execute: async (category) => {
        return await categoryService.create(category);
    },
});
