import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const BookingSchema = new Schema({
    name: {
        type: String,
        required: true, // Ensure name field is required
    },
    email: {
        type: String,
        required: true,  // Ensure email field is required
        unique: true,    // Ensure email is unique
        lowercase: true, // Automatically convert to lowercase
        trim: true,      // Remove any leading or trailing spaces
    },
    mobileNo: {
        type: String,
        required: true,  // Ensure mobileNo field is required
        unique: true,    // Ensure mobileNo is unique
        match: /^[0-9]{10}$/, // Ensure mobile number is 10 digits
    },
    address: {
        type: String,
        required: true,  // Ensure address field is required
    },
    check_in_date: {
        type: Date,
        required: true,  // Ensure check-in date is provided
    },
    check_out_date: {
        type: Date,
        required: true,  // Ensure check-out date is provided
    },
    TotalAmountUnit: {
        type: Number,
        required: true,  // Ensure total amount is provided
        min: 0,          // Total amount should not be negative
    },
    paymentStatus: {
        type: String,
        enum: ['Pending', 'Completed', 'Failed'], // Possible statuses for payment
        default: 'Pending', // Default status is Pending
    },
    BookingStatus: {
        type: String,
        enum: ['Confirmed', 'Cancelled', 'Completed'], // Possible statuses for booking
        default: 'Confirmed', // Default status is Confirmed
    },
    created_at: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking',
    },
    updated_at: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking',
    }
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

const Booking = model('Booking', BookingSchema);

export default Booking; // Export the model instead of the schema
