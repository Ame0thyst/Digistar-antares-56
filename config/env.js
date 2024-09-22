const dotenv = require('dotenv');
const path = require('path');

function loadEnv () {
    const envPath = path.resolve(__dirname, '../.env');
    const result = dotenv.config({path: envPath});

    if (result.error) {
        throw result.error;
    }
    console.log('Environment variables loaded successfully!');
}

module.exports = loadEnv;