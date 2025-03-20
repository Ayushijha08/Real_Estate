export const createAgent = async (req, res) => {
    try {
        const {  } = req.body;
        const { AgentLogo } = req.body;
        if (!AgentName || !AgentLocation ) {
            return res.status(400).json({ status: 'error', msg: 'All fields are required' });
        }
        if (!AgentLogo) {
            return res.status(400).json({ success: false, message: 'AgentLogo is required!' });
        }

        const newAgent = new Agent({
            AgentName, AgentLocation,AgentAddress,gstIn,status, AgentLogo
        });
        await newAgent.save();
        res.status(201).json({
            message: 'Agent created successfully'
        });
    } catch (error) {
        res.status(500).json({ error: 'Error saving the Agent', details: error.message });
    }
};;