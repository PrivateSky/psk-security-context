const TestSecurityContext = require("./lib/TestSecurityContext");
const EncryptedSecret = require("./lib/EncryptedSecret");
const AgentList = require("./lib/AgentList");
const PSKSignature = require("./lib/PSKSignature");

module.exports.createSecurityContext = function (securityContextType) {
    switch (securityContextType) {
        case "test":
            return new TestSecurityContext();
        default:
    }
};

module.exports.createEncryptedSecret = function (encryptedData, agentId) {
    return new EncryptedSecret(encryptedData, agentId);
};

module.exports.createAgentList = function () {
    return new AgentList();
};

module.exports.createPSKSignature = function (message, signature, type, agentId) {
    return new PSKSignature(message, signature, type, agentId);
};
