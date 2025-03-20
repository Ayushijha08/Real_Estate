import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const BookingSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    mobileNo: {
        type: String,
        required: true,
        unique: true,
        match: /^[0-9]{10}$/,
    },
    address: {
        type: String,
        required: true,
    },
    check_in_date: {
        type: Date,
        required: true,
    },
    check_out_date: {
        type: Date,
        required: true,
    },
    TotalAmountUnit: {
        type: Number,
        required: true,
        min: 0,
    },
    paymentStatus: {
        type: String,
        enum: ['Pending', 'Completed', 'Failed'],
        default: 'Pending',
    },
    BookingStatus: {
        type: String,
        enum: ['Confirmed', 'Cancelled', 'Completed'],
        default: 'Confirmed',
    },
    created_at: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking',
    },
    updated_at: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking',
    }
}, { timestamps: true });

const Booking = model('Booking', BookingSchema);

export default Booking;
