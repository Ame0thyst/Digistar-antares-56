const express = require('express');
const userHandler = require('../handler/userHandler');
const productHandler = require('../handler/productHandler');
const verifyToken = require('../middleware/jwt');

const router = express.Router();

router.get('/', verifyToken, userHandler.getAllUsers);               // Get all users - Protected
router.get('/:id', verifyToken, userHandler.getUserById);            // Get one by ID - Protected
router.post('/', userHandler.createUser);                            // Create/register - Open
router.put('/:id', verifyToken, userHandler.updateUser);             // Update - Protected
router.delete('/:id', verifyToken, userHandler.deleteUser);          // Delete - Protected
router.get('/name/search', verifyToken, userHandler.searchUsers);    // Search - Protected
router.post('/login', userHandler.loginUser);                        // Login - Open

module.exports = router;