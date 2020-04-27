const API = ({
    getCategoryOperation,
    getAllCategoryOperation,
    createCategoryOperation,
    updateCategoryOperation,
    deleteCategoryOperation,
}) => ({
    getCategory: async (req, res) => {
        const category = await getCategoryOperation.execute(req.params.id);
        res.send({ status: 200, result: category });
    },
    getAll: async (req, res) => {
        const Category = await getAllCategoryOperation.execute();
        res.setHeader("X-Total-Count", category.total);
        res.send({ status: 200, result: category.data });
    },
    createCategory: async (req, res) => {
        const result = await createCategoryOperation.execute(req.body);
        res.send({ status: 200, result: result });
    },
    updateCategory: async (req, res) => {
        const result = await updateCategoryOperation.execute(req.body);
        res.send({ status: 200, result: result });
    },
    deleteCategory: async (req, res) => {
        await deleteCategoryOperation.execute(req.params.id);
        const category = await getCategoryOperation.execute(req.params.id);
        res.send({ status: 200, result: category });
    },
});

module.exports = API;
