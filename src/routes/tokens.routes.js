const express = require('express');
const router = express.Router();
const tokensService = require('../services/tokens.service');

router.post('/mint', (req, res) => {
    const data = req.body;
    // Basic validation could go here
    const result = tokensService.mintToken(data);
    res.status(201).json(result);
});

router.get('/:walletId', (req, res) => {
    const { walletId } = req.params;
    const result = tokensService.getTokens(walletId);
    res.status(200).json(result);
});

module.exports = router;
