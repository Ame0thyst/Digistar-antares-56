const userRepo = require('../repo/userRepo');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const getAllUsers = async () => {
    return await userRepo.getAllUsers();
};

const getUserById = async (id) => {
    const user = await userRepo.getUserById(id);
    if (!user) {
        throw new Error('User not found');
    }
    return user;
};

const getUserByEmail = async (email) => {
    const user = await userRepo.getUserByEmail(email);
    if (!user) {
        throw new Error('User not found');
    }
    return user;
};

const login = async (payload) => {
    try {
        const checkUser = await userRepo.getUserByEmail(payload.email);
        if (!checkUser) {
            throw new Error('Invalid email or password');
        }
        const isValidPassword = await bcrypt.compare(payload.password, checkUser.password);
        if (!isValidPassword) {
            throw new Error('Invalid email or password');
        }
        const key = process.env.JWT_SECRET || 'your_jwt_secret';
        const token = jwt.sign({ userId: checkUser._id }, key, { expiresIn: '30m' });
        return token;
    } catch (error) {
        console.error('Error during login:', error.message);
        throw new Error(error.message);
    }
};

const createUser = async ({ name, email, password }) => {
    if (!name || !email || !password) {
        throw new Error('User must have a name, email, and password');
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        throw new Error('Invalid email format');
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    return await userRepo.addUser({ name, email, password: hashedPassword });
};

const updateUser = async (id, userData) => {
    const existingUser = await userRepo.getUserById(id);
    if (!existingUser) {
        throw new Error('User not found');
    }
    return await userRepo.updateUser(id, userData);
};

const deleteUser = async (id) => {
    const existingUser = await userRepo.getUserById(id);
    if (!existingUser) {
        throw new Error('User not found');
    }
    return await userRepo.deleteUser(id);
};

const searchUsers = async (name) => {
    if (!name) {
        throw new Error('Name query parameter is required');
    }
    return await userRepo.searchUsersByName(name);
};


module.exports = {
    getAllUsers,
    getUserById,
    getUserByEmail,
    createUser,
    updateUser,
    deleteUser,
    searchUsers,
    login
};
