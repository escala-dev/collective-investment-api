class ProposalsService {
    createProposal(proposalId, data) {
        // Mock logic
        return {
            proposalId: "prop_200",
            votingWindowStart: "2025-09-08T00:00:00Z",
            votingWindowEnd: "2025-09-15T00:00:00Z"
        };
    }

    castVote(proposalId, data) {
        return {
            voteId: "v_900",
            proposalId: proposalId,
            votingDate: "2025-09-08T00:00:00Z",
            status: "recorded"
        };
    }

    delegateVote(proposalId, data) {
        return {
            delegateId: "del_300",
            status: "active"
        };
    }

    getTally(proposalId) {
        return {
            proposalId: proposalId,
            snapshotId: "snap_10",
            yesWeight: 775.0,
            noWeight: 275.0,
            quorumRequired: 500.0,
            status: "closed",
            result: "approved"
        };
    }

    createMilestone(proposalId, data) {
        return {
            milestoneId: "ms_01",
            status: "open"
        };
    }

    getProposalDisbursements(proposalId) {
        return {
            proposalId: proposalId,
            disbursements: [
                {
                    disbursementId: "dis_900",
                    amountUsdc: 500.00,
                    status: "executed",
                    disbursmentsDate: "2025-09-10T12:00:00Z"
                }
            ]
        };
    }
}

module.exports = new ProposalsService();
