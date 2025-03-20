export const createFinance = async (req, res) => {
    try {
        const {  } = req.body;
        const { FinanceLogo } = req.body;
        if (!FinanceName || !FinanceLocation ) {
            return res.status(400).json({ status: 'error', msg: 'All fields are required' });
        }
        if (!FinanceLogo) {
            return res.status(400).json({ success: false, message: 'FinanceLogo is required!' });
        }

        const newFinance = new Finance({
            FinanceName, FinanceLocation,FinanceAddress,gstIn,status, FinanceLogo
        });
        await newFinance.save();
        res.status(201).json({
            message: 'Finance created successfully'
        });
    } catch (error) {
        res.status(500).json({ error: 'Error saving the Finance', details: error.message });
    }
};;