export const createBooking = async (req, res) => {
    try {
        const {  } = req.body;
        const { BookingLogo } = req.body;
        if (!BookingName || !BookingLocation ) {
            return res.status(400).json({ status: 'error', msg: 'All fields are required' });
        }
        if (!BookingLogo) {
            return res.status(400).json({ success: false, message: 'BookingLogo is required!' });
        }

        const newBooking = new Booking({
            BookingName, BookingLocation,BookingAddress,gstIn,status, BookingLogo
        });
        await newBooking.save();
        res.status(201).json({
            message: 'Booking created successfully'
        });
    } catch (error) {
        res.status(500).json({ error: 'Error saving the Booking', details: error.message });
    }
};;