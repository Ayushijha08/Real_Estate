export const createLease = async (req, res) => {
    try {
        const {  } = req.body;
        const { LeaseLogo } = req.body;
        if (!LeaseName || !LeaseLocation ) {
            return res.status(400).json({ status: 'error', msg: 'All fields are required' });
        }
        if (!LeaseLogo) {
            return res.status(400).json({ success: false, message: 'LeaseLogo is required!' });
        }

        const newLease = new Lease({
            LeaseName, LeaseLocation,LeaseAddress,gstIn,status, LeaseLogo
        });
        await newLease.save();
        res.status(201).json({
            message: 'Lease created successfully'
        });
    } catch (error) {
        res.status(500).json({ error: 'Error saving the Lease', details: error.message });
    }
};;