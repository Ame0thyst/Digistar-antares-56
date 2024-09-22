const productService = require('../domain/usecase/productService');
const categoryService = require('../domain/usecase/categoryService');

// Get all
const getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create
const createProduct = async (req, res) => {
    const { title, specification, terms_and_conditions, category, price } = req.body;
    if (!categoryService.isCategoryExists(category)) {
        return res.status(400).json({ message: 'Category does not exist' });
    }

    try {
        const newProduct = await productService.createProduct({
            title,
            specification,
            terms_and_conditions,
            category,
            price,
        });
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update
const updateProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedProduct = await productService.updateProduct(id, req.body);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete
const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        await productService.deleteProduct(id);
        res.status(204).end(); // No content
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllProducts,
    createProduct,
    updateProduct, 
    deleteProduct 
};
