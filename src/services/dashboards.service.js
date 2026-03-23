class DashboardsService {
    getCommunityDashboard(communityId) {
        return {
            communityId: communityId,
            fundsSummary: [
                {
                    fundId: "fund_01",
                    balanceUsdc: 1250.00,
                    projects: 2
                }
            ],
            recentProposals: [
                {
                    proposalId: "prop_200",
                    result: "approved"
                }
            ]
        };
    }
}

module.exports = new DashboardsService();
