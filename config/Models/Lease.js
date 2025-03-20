import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const LeaseSchema = new Schema({
    name: {
        type: String,
        required: true,  // Make name field required
    },
    email: {
        type: String,
        required: true,  // Make email field required
        unique: true,    // Ensure email is unique
        lowercase: true, // Automatically convert to lowercase
        trim: true,      // Remove any leading or trailing spaces
    },
    mobileNo: {
        type: String,
        required: true,  // Make mobileNo field required
        unique: true,    // Ensure mobileNo is unique
        match: /^[0-9]{10}$/, // Ensure mobile number is 10 digits
    },
    address: {
        type: String,
        required: true,  // Make address field required
    },
    LeaseStartDate: {
        type: Date,
        required: true,  // Make LeaseStartDate field required
    },
    LeaseEndDate: {
        type: Date,
        required: true,  // Make LeaseEndDate field required
    },
    MonthlyRent: {
        type: Number,
        required: true,  // Make MonthlyRent field required
        min: 0,          // Ensure MonthlyRent is a positive number
    },
    SecurityDeposit: {
        type: Number,
        required: true,  // Make SecurityDeposit field required
        min: 0,          // Ensure SecurityDeposit is a positive number
    },
    paymentStatus: {
        type: String,
        enum: ['Pending', 'Completed', 'Overdue'], // Possible statuses for payment
        default: 'Pending', // Default status is Pending
    },
    LeaseStatus: {
        type: String,
        enum: ['Active', 'Expired', 'Terminated'], // Possible statuses for lease
        default: 'Active', // Default status is Active
    },
    created_at: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lease',
    },
    updated_at: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lease',
    }
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

const Lease = model('Lease', LeaseSchema);

export default Lease; // Export the model instead of the schema
