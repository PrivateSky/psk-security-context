function EncryptedSecret(serializedEncSecret){
    const encryptedSecret = JSON.parse(serializedEncSecret) || {};

    this.setEncryptedData = (encryptedData) => {
        encryptedSecret.encryptedData = encryptedData;
    };

    this.getEncryptedData = () => {
        return encryptedSecret.encryptedData;
    };

    this.setAgentId = (agentId) => {
        encryptedSecret.agentId = agentId;
    };

    this.getAgentId = () => {
        return encryptedSecret.agentId;
    };

    this.toJSON = () => {
        return JSON.stringify(encryptedSecret);
    };
}

module.exports = EncryptedSecret;