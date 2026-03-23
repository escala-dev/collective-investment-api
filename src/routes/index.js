const express = require('express');
const router = express.Router();
const healthRoutes = require('./health.routes');
const fundsRoutes = require('./funds.routes');
const tokensRoutes = require('./tokens.routes');
const proposalsRoutes = require('./proposals.routes');
const milestonesRoutes = require('./milestones.routes');
const oraclesRoutes = require('./oracles.routes');
const disbursementsRoutes = require('./disbursements.routes');
const communitiesRoutes = require('./communities.routes');
const auditRoutes = require('./audit.routes');
const dashboardsRoutes = require('./dashboards.routes');

router.use('/health', healthRoutes);
router.use('/v1/funds', fundsRoutes);
router.use('/v1/tokens', tokensRoutes);
router.use('/v1/proposals', proposalsRoutes);
router.use('/v1/milestones', milestonesRoutes);
router.use('/v1/oracles', oraclesRoutes);
router.use('/v1/disbursements', disbursementsRoutes);
router.use('/v1/communities', communitiesRoutes);
router.use('/v1/audit', auditRoutes);
router.use('/v1/dashboards', dashboardsRoutes);

module.exports = router;
