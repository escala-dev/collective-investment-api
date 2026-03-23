const express = require('express');
const router = express.Router();
const disbursementsService = require('../services/disbursements.service');

router.post('/request', (req, res) => {
    const data = req.body;
    const idempotencyKey = req.headers['x-idempotency-key'];

    // In a real implementation, you would check the idempotency key
    const result = disbursementsService.requestDisbursement(data);
    res.status(201).json(result);
});

router.post('/:disbursementRequestId/execute', (req, res) => {
    const { disbursementRequestId } = req.params;
    const data = req.body;
    const result = disbursementsService.executeDisbursement(disbursementRequestId, data);
    res.status(201).json(result);
});

module.exports = router;
