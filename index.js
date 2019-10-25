const TestSecurityContext = require("./lib/TestSecurityContext");
const EncryptedSecret = require("./lib/EncryptedSecret");
const EncryptedSecretList = require("./lib/EncryptedSecretList");
const AgentList = require("./lib/AgentList");
const PSKSignature = require("./lib/PSKSignature");

module.exports.createSecurityContext = (securityContextType) => {
    switch (securityContextType) {
        case "test":
            return new TestSecurityContext();
        default:
    }
};

module.exports.createEncryptedSecret = (serializedEncryptedSecret) => {
    return new EncryptedSecret(serializedEncryptedSecret);
};

module.exports.createEncryptedSecretList = (serializedEncryptedSecretList) => {
    return new EncryptedSecretList(serializedEncryptedSecretList);
};

module.exports.createAgentList = (serializedAgentList) => {
    return new AgentList(serializedAgentList);
};

module.exports.createPSKSignature = (serializedPSKSignature) => {
    return new PSKSignature(serializedPSKSignature);
};
