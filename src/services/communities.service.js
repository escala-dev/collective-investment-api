class CommunitiesService {
    createCommunity(data) {
        return {
            communityId: "community_123",
            status: "active"
        };
    }

    inviteUser(communityId, data) {
        return {
            inviteId: "inv_10",
            status: "sent"
        };
    }
}

module.exports = new CommunitiesService();
