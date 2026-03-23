const express = require('express');
const router = express.Router();
const oraclesService = require('../services/oracles.service');

router.post('/attest', (req, res) => {
    const data = req.body;
    const result = oraclesService.createAttestation(data);
    res.status(201).json(result);
});

module.exports = router;
