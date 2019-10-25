const crypto = require("crypto");
const PSKSignature = require("./PSKSignature");
function TestSecurityContext() {
    let publicKey;
    let privateKey;
    let agentId = "agent";

    this.getCurrentAgentIdentity = () => {
        return agentId;
    };

    this.getSecret = (readList) => {
        const encSecret = readList.getEncryptedSecret(agentId);
        if (!encSecret) {
            throw Error("The current agent can't get the secret");
        }
        return crypto.privateDecrypt(privateKey, encSecret.encryptedData);
    };

    this.sign = (digest, writeList, callback) => {
        if (!writeList.hasAgent(agentId)) {
            throw Error("The current agent does not have writing privileges");
        }

        const pskSignature = new PSKSignature();
        const type = "sha256";
        pskSignature.setMessage(digest);
        pskSignature.setType(type);
        pskSignature.setSignature(crypto.createSign(type).update(digest).sign(privateKey));
        pskSignature.setAgentId(agentId);

        return pskSignature;
    };

    this.generateRandom = (len = 32) => {
        return crypto.randomBytes(len);
    };
}

module.exports = TestSecurityContext;