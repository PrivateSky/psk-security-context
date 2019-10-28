const crypto = require("crypto");
const PSKSignature = require("./PSKSignature");
const EncryptedSecret = require("./EncryptedSecret");
const Agent = require("./Agent");

function SecurityContext() {

    let knownAgents = []; // contains pairs (agentId, publicKey)
    let privateKey;
    let signType = "sha256";

    this.registerAgent = (agentId, publicKey) => {
        const el = knownAgents.find(el => el.agentId === agentId);
        if (!el) {
            knownAgents.push(new Agent(agentId, publicKey));
        }
    };

    this.getCurrentAgentIdentity = () => {
        return knownAgents[0].agentId;
    };

    this.getSecret = (readList) => {
        const encSecret = readList.find(secret => secret.agentId === this.getCurrentAgentIdentity());
        if (!encSecret) {
            throw (Error("The current agent cannot get the secret"));
        }

        return crypto.privateDecrypt(privateKey, encSecret);
    };

    this.shareSecret = (secret, list, callback) => {
        const readList = [];
        list.forEach(agentId => {
            const publicKey = getPublicKey(agentId).publicKey;
            readList.push(new EncryptedSecret(crypto.publicEncrypt(publicKey, secret), agentId));
        });

        return readList;
    };

    this.sign = (digest, writeList, all, callback) => {
        if (typeof all === "function") {
            callback = all;
            all = false;
        }

        if (!listHasElement(writeList, this.getCurrentAgentIdentity())) {
            throw (Error("The current agent does not have signing privileges"));
        }

        if (!all) {
            const publicKey = getPublicKey(this.getCurrentAgentIdentity());
            const signature = crypto.createSign(signType).update(digest).sign(privateKey);
            return new PSKSignature(digest, signature, signType, this.getCurrentAgentIdentity());
        }
    };

    this.verify = (pskSignature) => {
        return crypto.createVerify(signType)
            .update(pskSignature.message)
            .verify(getPublicKey(pskSignature.agentId), pskSignature.signature);
    };

    this.generateRandom = (len = 32) => {
        crypto.randomBytes(len);
    };

    //----------------------------- internal functions ------------------------------
    function listHasElement(list, element) {
        return !!list.find(el => element === el);
    }

    function getPublicKey(agentId) {
        const agent = knownAgents.find(ag => ag.agentId === agentId);
        if (!agent) {
            throw Error(`Agent ${agentId} is not registered`);
        }

        return agent.publicKey;
    }

}