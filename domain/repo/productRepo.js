const Product = require('../model/productModel');

const getAllProducts = async () => {
    return await Product.find({});
};

const getProductById = async (productId) => {
    return await Product.findOne({ _id: productId });
};

const createProduct = async (productData) => {
    const newProduct = new Product(productData);
    return await newProduct.save();
};

const updateProduct = async (id, updateData) => {
    return await Product.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteProduct = async (id) => {
    return await Product.findByIdAndDelete(id);
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct, 
    deleteProduct 
};
