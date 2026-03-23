const express = require('express');
const router = express.Router();
const communitiesService = require('../services/communities.service');

router.post('/', (req, res) => {
    const data = req.body;
    const result = communitiesService.createCommunity(data);
    res.status(201).json(result);
});

router.post('/:communityId/invite', (req, res) => {
    const { communityId } = req.params;
    const data = req.body;
    const result = communitiesService.inviteUser(communityId, data);
    res.status(201).json(result);
});

module.exports = router;
