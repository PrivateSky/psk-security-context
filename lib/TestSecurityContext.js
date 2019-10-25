function TestSecurityContext() {

    let publicKey;
    let privateKey;
    let agentId = "agent";

    this.getCurrentAgentIdentity = () => {
        return agentId;
    };

    this.getSecret = (readList, callback) => {
        const encSecret = readList.find
    };

    this.sign = (digest, writeList, callback) => {

    };
}

module.exports = TestSecurityContext;