class DisbursementsService {
    requestDisbursement(data) {
        return {
            disbursementRequestId: "dreq_800",
            status: "pending_attestation_check"
        };
    }

    executeDisbursement(disbursementRequestId, data) {
        return {
            disbursementId: "dis_900",
            status: "executed",
            onchainTx: "tx_hash_0xabc",
            disbursmentsDate: "2025-09-10T12:00:00Z"
        };
    }
}

module.exports = new DisbursementsService();
