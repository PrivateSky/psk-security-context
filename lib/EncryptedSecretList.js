function EncryptedSecretList() {
    this.encryptedSecretList = [];

    this.addEncryptedSecret = function (encryptedSecret) {
        this.encryptedSecretList.push(encryptedSecret);
    }
}

module.exports = function createEncryptedSeedList() {
    return new EncryptedSecretList();
};