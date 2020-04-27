module.exports = ({ categoryService }) => ({
    execute: (id) => {
        return categoryService.delete(id);
    },
});
