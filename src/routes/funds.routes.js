const express = require('express');
const router = express.Router();
const fundsService = require('../services/funds.service');

router.post('/', (req, res) => {
    const data = req.body;
    const result = fundsService.createFund(data);
    res.status(201).json(result);
});

router.get('/:fundId/contributions', (req, res) => {
    const { fundId } = req.params;
    const data = fundsService.getContributions(fundId);
    res.status(200).json(data);
});

module.exports = router;
