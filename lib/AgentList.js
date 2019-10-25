function AgentList(serializedAgentIds) {
    const agentIds = JSON.parse(serializedAgentIds) || [];

    this.addAgent = (agentId) => {
        agentIds.push(agentId);
    };

    this.hasAgent = (agentId) => {
        return !!agentIds.findIndex((agent => agent === agentId));
    };

    this.toJSON = () => {
        return JSON.stringify(agentIds);
    }
}

module.exports = AgentList;