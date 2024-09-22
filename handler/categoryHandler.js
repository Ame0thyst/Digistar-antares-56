const categoryService = require('../domain/usecase/categoryService');

// Adding a category
const addCategory = (req, res) => {
    const { category } = req.body;
    if (!category) {
        return res.status(400).json({ message: 'Category name is required' });
    }
    categoryService.addCategory(category);
    res.status(201).json({ message: 'Category added successfully' });
};

// Get all categories
const getCategories = (req, res) => {
    const categories = categoryService.getCategories();
    res.json(categories);
};

module.exports = {
    addCategory,
    getCategories,
};
