const axios = require('axios');

const getExchangeRate = async (fromCurrency, toCurrency) => {
    try {
        const apiKey = process.env.CURRENCY_API_KEY; // Add your API key in .env
        const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

        const response = await axios.get(url);
        const rates = response.data.rates;

        if (!rates[toCurrency]) {
            throw new Error(`Unable to get currency conversion rate for ${toCurrency}`);
        }

        return rates[toCurrency];
    } catch (error) {
        throw new Error(`Failed to fetch exchange rate: ${error.message}`);
    }
};

const convertCurrency = async (amount, fromCurrency, toCurrency) => {
    const rate = await getExchangeRate(fromCurrency, toCurrency);
    return amount * rate;
};

module.exports = {
    convertCurrency
};
