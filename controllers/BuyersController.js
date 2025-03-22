import Buyer from "../Models/Buyer";

export const createBuyer = async (req, res) => {
    try {
        const {  name, Email, mobileNo, address, RoomNo, status} = req.body;
        if (name|| ! Email|| ! mobileNo|| ! address|| ! RoomNo|| ! status )   {
            return res.status(400).json({ success: false, message: 'All fields are required!' });
        }

        await Buyer.create({ name, Email, mobileNo, address, RoomNo, status}) 
        res.status(201).json({
            message: 'Buyer created successfully'
        });
    } catch (error) {
        res.status(500).json({ error: 'Error saving the Buyer', details: error.message });
    }
};

export const getAllBuyers = async (req, res) => {
    try {
        const Buyers = await Buyer.find();
        res.json(Buyers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const getBuyerById = async (req, res) => {
    try {
        const BuyerId = req.params.id;
        const Buyer = await Buyer.findById(BuyerId);
        if (!Buyer) {
            return res.status(404).json({ message: 'Buyer id not found' });
        }
        res.json(Buyer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateBuyer = async (req, res) => {
    try {
        const {name, Email, mobileNo, address, RoomNo, status} = req.body;
        const BuyerId = req.params.id; 

        const existingBuyer = await Buyer.findById(BuyerId);
        if (!existingBuyer) {
            return res.status(404).json({ message: 'Buyer not found' });
        }

        const updateData = {
            name, Email, mobileNo, address, RoomNo, status
        };

        const updatedBuyer = await Buyer.findByIdAndUpdate(
            BuyerId,
            updateData,
            { new: true } 
        );

        res.json({
            message: 'Buyer updated successfully',
            Buyer: updatedBuyer
        });
    } catch (error) {
        res.status(500).json({ error: 'Error updating the Buyer', details: error.message });
    }
};

export const deleteBuyer = async (req, res) => {
    try {
        const BuyerId = req.params.id; 
        const deletedBuyer = await Buyer.findByIdAndDelete(BuyerId); 
        if (!deletedBuyer) {
            return res.status(404).json({ message: 'Buyer not found' });
        }
        res.json({ message: 'Buyer deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};