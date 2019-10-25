function PSKSignature(message, signature, type, agentId) {
    this.pskSignature = {
        message: message,
        signature: signature,
        type: type,
        agentId: agentId
    };

    this.setAgentId = (agentId) => {
        this.pskSignature.agentId = agentId;
    };

    this.getAgentId = () => {
        return this.pskSignature.agentId;
    };

    this.setMessage = (message) => {
        this.pskSignature.message = message;
    };

    this.getMessage = () => {
        return this.pskSignature.message;
    };

    this.setSignature = (signature) => {
        this.pskSignature.signature = signature;
    };

    this.getSignature = () => {
        return this.pskSignature.signature;
    };

    this.setType = (signatureType) => {
        this.pskSignature.type = signatureType;
    };

    this.getType = () => {
        return this.pskSignature.type;
    }
}

module.exports = PSKSignature;