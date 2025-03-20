import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const PropertySchema = new Schema({
    propertyTitle: {
        type: String,
        required: true, // Ensure property title is provided
    },
    propertyType: {
        type: String,
        required: true, // Ensure property type is provided
        enum: ['Residential', 'Commercial', 'Industrial'], // Example property types, you can adjust this as per requirements
    },
    address: {
        type: String,
        required: true, // Ensure address is provided
    },
    price: {
        type: Number,
        required: true, // Ensure price is provided
        min: 0, // Price should not be negative
    },
    areaSqft: {
        type: Number,
        required: true, // Ensure area in square feet is provided
        min: 0, // Area should be a positive number
    },
    furnishing: {
        type: String,
        enum: ['Fully Furnished', 'Semi Furnished', 'Unfurnished'], // You can adjust furnishing types as per needs
        default: 'Unfurnished', // Default value if not provided
    },
    status: {
        type: String,
        enum: ['Available', 'Sold', 'Rented'], // Property status options
        default: 'Available', // Default status
    },
    created_at: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Property',
    },
    updated_at: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Property',
    }
}, { timestamps: true }); // Correct placement of timestamps

const Property = model('Property', PropertySchema);

export default Property; // Export the model instead of the schema
