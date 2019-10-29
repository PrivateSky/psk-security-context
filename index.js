const TestSecurityContext = require("./lib/TestSecurityContext");
const EncryptedSecret = require("./lib/EncryptedSecret");
const PSKSignature = require("./lib/PSKSignature");

module.exports.createSecurityContext = (securityContextType) => {
    switch (securityContextType) {
        case "CSBSecurityContext":
            return new TestSecurityContext();
        default:
    }
};

module.exports.createEncryptedSecret = (serializedEncryptedSecret) => {
    return new EncryptedSecret(serializedEncryptedSecret);
};



module.exports.createPSKSignature = (serializedPSKSignature) => {
    return new PSKSignature(serializedPSKSignature);
};
