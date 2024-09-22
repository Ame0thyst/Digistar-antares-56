const express = require('express');
const { convertCurrency } = require('../domain/usecase/currencyService');

const router = express.Router();

router.get('/convert', async (req, res) => {
    const { amount, from, to } = req.query;

    if (!amount || !from || !to) {
        return res.status(400).json({ message: 'Amount, from currency, and to currency are required' });
    }

    try {
        const convertedAmount = await convertCurrency(parseFloat(amount), from.toUpperCase(), to.toUpperCase());
        res.json({ 
            originalAmount: amount,
            fromCurrency: from.toUpperCase(),
            toCurrency: to.toUpperCase(),
            convertedAmount 
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
