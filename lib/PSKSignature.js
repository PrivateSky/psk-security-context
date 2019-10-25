function PSKSignature(serializedPSKSignature) {
    const pskSignature = JSON.parse(serializedPSKSignature) || {};

    this.setAgentId = (agentId) => {
        pskSignature.agentId = agentId;
    };

    this.getAgentId = () => {
        return pskSignature.agentId;
    };

    this.setMessage = (message) => {
        pskSignature.message = message;
    };

    this.getMessage = () => {
        return pskSignature.message;
    };

    this.setSignature = (signature) => {
        pskSignature.signature = signature;
    };

    this.getSignature = () => {
        return pskSignature.signature;
    };

    this.setType = (signatureType) => {
        pskSignature.type = signatureType;
    };

    this.getType = () => {
        return pskSignature.type;
    };

    this.toJSON = () => {
        return JSON.stringify(pskSignature);
    };
}

module.exports = PSKSignature;