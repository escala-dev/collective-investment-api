class FundsService {
    getContributions(fundId) {
        return {
            fundId: fundId,
            totalBalance: 1250.00,
            contributions: [
                {
                    contributionId: "c_001",
                    userId: "user_abc123",
                    amount: 100.00,
                    date: "2025-09-01T12:00:00Z"
                }
            ]
        };
    }

    createFund(data) {
        return {
            fundId: "fund_01",
            status: "active"
        };
    }
}

module.exports = new FundsService();
