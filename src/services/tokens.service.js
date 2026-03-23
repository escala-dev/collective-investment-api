class TokensService {
    mintToken(data) {
        // Mock logic - in a real app this would interact with blockchain
        return {
            mintId: "mint_1001",
            token: "PT-001",
            amount: data.usdcAmount, // Assuming 1:1 ratio for simplicity in mock
            status: "minted",
            onchainProof: "tx_hash_0xabc"
        };
    }

    getTokens(walletId) {
        return {
            walletId: walletId,
            uid: "user!@#$",
            projectTokens: [
                {
                    fundId: "fund_01",
                    tokenId: "PT-001",
                    balance: 100
                }
            ],
            governanceTokens: [
                {
                    fundId: "fund_01",
                    tokenId: "GT-01",
                    balance: 137.5
                }
            ]
        };
    }
}

module.exports = new TokensService();
