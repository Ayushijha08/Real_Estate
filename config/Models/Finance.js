import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const FinanceSchema = new Schema({
    name: {
        type: String,
        required: true,  // Ensure name field is required
    },
    Amount: {
        type: Number,
        required: true,  // Ensure Amount field is required
        min: 0,          // Amount should not be negative
    },
    transactionType: {
        type: String,
        enum: ['Credit', 'Debit'],  // Transaction can be Credit or Debit
        required: true,  // Ensure transactionType field is required
    },
    category: {
        type: String,
        required: true,  // Ensure category field is required
    },
    paymentMode: {
        type: String,
        enum: ['Cash', 'Bank Transfer', 'Credit Card', 'Debit Card', 'Online'],  // Different payment modes
        required: true,  // Ensure paymentMode field is required
    },
    transactionDate: {
        type: Date,
        required: true,  // Ensure transactionDate field is required
    },
    status: {
        type: String,
        enum: ['Pending', 'Completed', 'Failed'],  // Transaction status can be Pending, Completed, or Failed
        default: 'Pending', // Default status is Pending
    },
    created_at: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Finance',
    },
    updated_at: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Finance',
    }
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

const Finance = model('Finance', FinanceSchema);

export default Finance; // Export the model instead of the schema
