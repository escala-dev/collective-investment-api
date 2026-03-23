const express = require('express');
const router = express.Router();
const auditService = require('../services/audit.service');

router.get('/events', (req, res) => {
    const { projectId, from, to } = req.query;
    const result = auditService.getAuditEvents(projectId, from, to);
    res.status(200).json(result);
});

module.exports = router;
