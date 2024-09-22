const express = require('express');
const { addCategory, getCategories } = require('../handler/categoryHandler');

const router = express.Router();

router.post('/categories', addCategory);    // Add new category
router.get('/categories', getCategories);   // Get all categories

module.exports = router;
