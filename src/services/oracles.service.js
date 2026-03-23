class OraclesService {
    createAttestation(data) {
        return {
            attestationId: "att_400",
            status: "verified",
            verifiedBy: data.attestorId
        };
    }
}

module.exports = new OraclesService();
