import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const AgentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensures email is unique
        lowercase: true,
        trim: true,
    },
    mobileNo: {
        type: String,
        required: true,
        unique: true, // Ensures mobileNo is unique
        //match: /^[0-9]{10}$/, // Validates for a 10-digit phone number (you can adjust based on requirements)
    },
    address: {
        type: String,
        required: true,
    },
    licenseNo: {
        type: String,
        required: true,
        unique: true, // Ensures licenseNo is unique
    },
    experience: {
        type: Number,
        required: true,
        min: 0, // Ensures experience is a non-negative number
    },
    commissionRate: {
        type: Number,
        required: true,
        min: 0, // Ensures commissionRate is a non-negative number
    },
    status: {
        type: String,
        enum: ['active', 'inactive'], // Defines status values
        default: 'active',
    },
    created_at: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Agent',
    },
    updated_at: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Agent',
    }
}, { timestamps: true }); // Correct placement of timestamps

const Agents = model('Agent', AgentSchema);

export default Agents;
