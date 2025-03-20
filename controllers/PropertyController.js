export const createProperty = async (req, res) => {
    try {
        const {  } = req.body;
        const { PropertyLogo } = req.body;
        if (!PropertyName || !PropertyLocation ) {
            return res.status(400).json({ status: 'error', msg: 'All fields are required' });
        }
        if (!PropertyLogo) {
            return res.status(400).json({ success: false, message: 'PropertyLogo is required!' });
        }

        const newProperty = new Property({
            PropertyName, PropertyLocation,PropertyAddress,gstIn,status, PropertyLogo
        });
        await newProperty.save();
        res.status(201).json({
            message: 'Property created successfully'
        });
    } catch (error) {
        res.status(500).json({ error: 'Error saving the Property', details: error.message });
    }
};;