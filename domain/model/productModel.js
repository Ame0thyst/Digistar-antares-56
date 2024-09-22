const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 150
    },
    specification: {
        type: String,
        required: true
    },
    terms_and_conditions: {
        type: String,
        required: true
    },
    category: {
        type: String, // instead of enum biar bisa diadd dari user
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
