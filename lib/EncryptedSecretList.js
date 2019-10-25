function EncryptedSecretList(serializedEncryptedSecretList) {
    const encryptedSecretList = JSON.parse(serializedEncryptedSecretList) || [];

    this.addEncryptedSecret = (encryptedSecret) => {
        encryptedSecretList.push(encryptedSecret);
    };

    this.getEncryptedSecret = (agentId) => {
        return encryptedSecretList.find((encSecret) => (encSecret.agentId === agentId));
    };

    this.toJSON = () => {
        return JSON.stringify(encryptedSecretList);
    };
}

module.exports = EncryptedSecretList;