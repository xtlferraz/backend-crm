module.exports = ({ categoryService }) => ({
    execute: (category) => {
        return categoryService.update(category);
    },
});
