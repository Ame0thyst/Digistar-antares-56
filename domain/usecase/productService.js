const productRepo = require('../repo/productRepo');

// Get All
const getAllProducts = async () => {
    return await productRepo.getAllProducts();
};

// Create
const createProduct = async (productData) => {
    try {
        const product = {
            title: productData.title,
            specification: productData.specification,
            terms_and_conditions: productData.terms_and_conditions,
            category: productData.category,
            price: productData.price,
            created_at: new Date(),
            updated_at: new Date()
        };

        const createdProduct = await productRepo.createProduct(product);
        return createdProduct;
    } catch (error) {
        throw new Error(`Failed to create product: ${error.message}`);
    }
};

// Update
const updateProduct = async (id, updateData) => {
    try {
        const updatedProduct = await productRepo.updateProduct(id, updateData);
        if (!updatedProduct) {
            throw new Error('Product not found or failed to update');
        }
        return updatedProduct;
    } catch (error) {
        throw new Error(`Failed to update product: ${error.message}`);
    }
};

// Delete
const deleteProduct = async (id) => {
    try {
        const deletedProduct = await productRepo.deleteProduct(id);
        if (!deletedProduct) {
            throw new Error('Product not found or failed to delete');
        }
        return deletedProduct;
    } catch (error) {
        throw new Error(`Failed to delete product: ${error.message}`);
    }
};

module.exports = {
    getAllProducts,
    createProduct,
    updateProduct, 
    deleteProduct 
};
