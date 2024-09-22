const User = require('../model/userModel');

const getAllUsers = async () => {
    return await User.find({});
};

const getUserById = async (id) => {
    return await User.findOne({ id });
};

const getUserByEmail = async (email) => {
    return await User.findOne({ email });
};

const addUser = async (userData) => {
    const newUser = new User(userData);
    return await newUser.save();
};

const updateUser = async (id, userData) => {
    return await User.findOneAndUpdate({ id }, userData, { new: true });
};

const deleteUser = async (id) => {
    return await User.findOneAndDelete({ id });
};

const searchUsersByName = async (name) => {
    return await User.find({ name: new RegExp(name, 'i') });
};

module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser,
    searchUsersByName,
    getUserByEmail
};