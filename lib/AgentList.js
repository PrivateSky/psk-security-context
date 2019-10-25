function AgentList(serializedAgentIds) {
    const agentIds = JSON.parse(serializedAgentIds) || [];

    this.addAgent = (agentId) => {
        agentIds.push(agentId);
    };

    this.toJSON = () => {
        return JSON.stringify(agentIds);
    }
}

module.exports = AgentList;