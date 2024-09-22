const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const CustomerSchema = new mongoose.Schema({
    customer_id: {
        type: String,
        required: true,
        default: uuidv4
    },
    customer_name: {
        type: String,
        required: true
    },
    customer_address: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Customer', CustomerSchema);