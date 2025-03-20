import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const BuyersSchema = new Schema({
    name: {
        type: String,
        required: true,  // Ensure name field is required
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
        match: /^[0-9]{10}$/, // Ensure mobile number is 10 digits (you can adjust the regex as needed)
    },
    address: {
        type: String,
        required: true,  // Ensure address field is required
    },
    RoomNo: {
        type: String,
        required: true,  // Ensure RoomNo field is required
    },
    status: {
        type: String,
        enum: ['Active', 'Inactive'],  // Possible statuses for the buyer
        default: 'Active',  // Default status is Active
    },
    created_at: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Buyers',
    },
    updated_at: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Buyers',
    }
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

const Buyers = model('Buyers', BuyersSchema);

export default Buyers; // Export the model instead of the schema
