let categories = [];

const addCategory = (category) => {
    if (!categories.includes(category)) {
        categories.push(category);
    }
};

const getCategories = () => {
    return categories;
};

const isCategoryExists = (category) => {
    return categories.includes(category);
};

module.exports = {
    addCategory,
    getCategories,
    isCategoryExists,
};
