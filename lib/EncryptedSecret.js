function EncryptedSecret(encryptedData, agentId){
    this.encryptedSecret = {
        encryptedData: encryptedData,
        agentId: agentId
    };

    this.setEncryptedData = (encryptedData) => {
        this.encryptedSecret.encryptedData = encryptedData;
    };

    this.getEncryptedData = () => {
        return this.encryptedSecret.encryptedData;
    };

    this.setAgentId = (agentId) => {
        this.encryptedSecret.agentId = agentId;
    };

    this.getAgentId = () => {
        return this.encryptedSecret.agentId;
    };
}

module.exports = EncryptedSecret;