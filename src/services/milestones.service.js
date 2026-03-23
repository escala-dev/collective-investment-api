class MilestonesService {
    uploadEvidence(milestoneId, data) {
        return {
            evidenceId: "ev_500",
            status: "uploaded",
            evidenceHash: "sha256:..."
        };
    }

    getAttestations(milestoneId) {
        return {
            milestoneId: milestoneId,
            attestations: [
                {
                    attestationId: "att_400",
                    attestorId: "oracle_01",
                    verifiedAt: "2025-09-10T12:00:00Z"
                }
            ]
        };
    }
}

module.exports = new MilestonesService();
