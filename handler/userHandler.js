const userService = require('../domain/usecase/userService');

// Get All
const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving users', error: error.message });
    }
};

// Get One by ID
const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await userService.getUserById(id);
        res.json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Get One by Email
const getUserByEmail = async (req, res) => {
    const { email } = req.params;
    try {
        const user = await userService.getUserByEmail(email);
        res.json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Register
const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const createdUser = await userService.createUser({ name, email, password });
        res.status(201).json(createdUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update
const updateUser = async (req, res) => {
    const { id } = req.params;
    const userUpdates = req.body;
    try {
        const updatedUser = await userService.updateUser(id, userUpdates);
        res.json(updatedUser);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Delete
const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await userService.deleteUser(id);
        res.status(204).end();
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Search by Name
const searchUsers = async (req, res) => {
    const { name } = req.query;
    try {
        const users = await userService.searchUsers(name);
        res.json(users);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Login
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const token = await userService.login({ email, password });
        res.json({ token });
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    getUserByEmail,
    createUser,
    updateUser,
    deleteUser,
    searchUsers,
    loginUser // Export login
};
