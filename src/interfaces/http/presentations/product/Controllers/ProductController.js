const API = ({
    getProductOperation,
    getAllProductOperation,
    createProductOperation,
    updateProductOperation,
    deleteProductOperation,
}) => ({
    getProduct: async (req, res) => {
        const product = await getProductOperation.execute(req.params.id);
        res.send({ status: 200, result: product });
    },
    getAll: async (req, res) => {
        const product = await getAllProductOperation.execute();
        res.setHeader("X-Total-Count", product.total);
        res.send({ status: 200, result: product.data });
    },
    createProduct: async (req, res) => {
        const result = await createProductOperation.execute(req.body);
        res.send({ status: 200, result: result });
    },
    updateProduct: async (req, res) => {
        const result = await updateProductOperation.execute(req.body);
        res.send({ status: 200, result: result });
    },
    deleteProduct: async (req, res) => {
        await deleteProductOperation.execute(req.params.id);
        const product = await getProductOperation.execute(req.params.id);
        res.send({ status: 200, result: product });
    },
});

module.exports = API;
