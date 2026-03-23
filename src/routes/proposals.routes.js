const express = require('express');
const router = express.Router();
const proposalsService = require('../services/proposals.service');

router.post('/:proposalId/proposals', (req, res) => {
    const { proposalId } = req.params;
    const data = req.body;
    const result = proposalsService.createProposal(proposalId, data);
    res.status(201).json(result);
});

router.post('/:proposalId/votes', (req, res) => {
    const { proposalId } = req.params;
    const data = req.body;
    const result = proposalsService.castVote(proposalId, data);
    res.status(201).json(result);
});

router.post('/:proposalId/delegate', (req, res) => {
    const { proposalId } = req.params;
    const data = req.body;
    const result = proposalsService.delegateVote(proposalId, data);
    res.status(201).json(result);
});

router.get('/:proposalId/tally', (req, res) => {
    const { proposalId } = req.params;
    const result = proposalsService.getTally(proposalId);
    res.status(200).json(result);
});

router.post('/:proposalId/milestones', (req, res) => {
    const { proposalId } = req.params;
    const data = req.body;
    const result = proposalsService.createMilestone(proposalId, data);
    res.status(201).json(result);
});

router.get('/:proposalId/disbursements', (req, res) => {
    const { proposalId } = req.params;
    const result = proposalsService.getProposalDisbursements(proposalId);
    res.status(200).json(result);
});

module.exports = router;
