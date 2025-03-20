export const createBuyer = async (req, res) => {
    try {
        const {  } = req.body;
        const { BuyerLogo } = req.body;
        if (!BuyerName || !BuyerLocation ) {
            return res.status(400).json({ status: 'error', msg: 'All fields are required' });
        }
        if (!BuyerLogo) {
            return res.status(400).json({ success: false, message: 'BuyerLogo is required!' });
        }

        const newBuyer = new Buyer({
            BuyerName, BuyerLocation,BuyerAddress,gstIn,status, BuyerLogo
        });
        await newBuyer.save();
        res.status(201).json({
            message: 'Buyer created successfully'
        });
    } catch (error) {
        res.status(500).json({ error: 'Error saving the Buyer', details: error.message });
    }
};;