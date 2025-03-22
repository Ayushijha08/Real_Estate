import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const LeaseSchema = new Schema({
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
    LeaseStartDate: {
        type: Date,
        required: true,
    },
    LeaseEndDate: {
        type: Date,
        required: true,
    },
    MonthlyRent: {
        type: Number,
        required: true,
        min: 0,
    },
    SecurityDeposit: {
        type: Number,
        required: true,
        min: 0,
    },
    paymentStatus: {
        type: String,
        enum: ['Pending', 'Completed', 'Overdue'],
        default: 'Pending',
    },
    LeaseStatus: {
        type: String,
        enum: ['Active', 'Expired', 'Terminated'],
        default: 'Active',
    },
    
}, { timestamps: true });

const Lease = model('Lease', LeaseSchema);

export default Lease;
