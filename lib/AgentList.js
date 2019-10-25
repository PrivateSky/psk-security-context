function AgentList() {
    this.agentIds = [];

    this.addAgent = function (agentId) {
        this.agentIds.push(agentId);
    };
}

module.exports = AgentList;