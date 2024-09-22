const express = require('express');
const productHandler = require('../handler/productHandler');
const verifyToken = require('../middleware/jwt');

const router = express.Router();

router.post("/products", verifyToken, productHandler.createProduct);        // Create - Protected
router.get("/products", verifyToken, productHandler.getAllProducts);        // Get all products - Protected
router.put("/products/:id", verifyToken, productHandler.updateProduct);     // Update - Protected
router.delete("/products/:id", verifyToken, productHandler.deleteProduct);  // Delete - Protected

module.exports = router;
