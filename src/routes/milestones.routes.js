const express = require('express');
const router = express.Router();
const milestonesService = require('../services/milestones.service');

router.post('/:milestoneId/evidence', (req, res) => {
    const { milestoneId } = req.params;
    const data = req.body;
    const result = milestonesService.uploadEvidence(milestoneId, data);
    res.status(201).json(result);
});

router.get('/:milestoneId/attestations', (req, res) => {
    const { milestoneId } = req.params;
    const result = milestonesService.getAttestations(milestoneId);
    res.status(200).json(result);
});

module.exports = router;
