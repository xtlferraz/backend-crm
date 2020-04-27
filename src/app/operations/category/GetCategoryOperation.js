module.exports = ({ categoryService }) => ({
    execute: (id) => {
        return categoryService.get(id);
    },
});
