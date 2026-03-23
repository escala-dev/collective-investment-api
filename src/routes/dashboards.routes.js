const express = require('express');
const router = express.Router();
const dashboardsService = require('../services/dashboards.service');

router.get('/community/:communityId', (req, res) => {
    const { communityId } = req.params;
    const result = dashboardsService.getCommunityDashboard(communityId);
    res.status(200).json(result);
});

module.exports = router;
