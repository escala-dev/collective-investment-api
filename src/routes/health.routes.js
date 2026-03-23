const express = require('express');
const router = express.Router();
const healthService = require('../services/health.service');

router.get('/', (req, res) => {
    const healthStatus = healthService.getHealth();
    res.status(200).json(healthStatus);
});

module.exports = router;
