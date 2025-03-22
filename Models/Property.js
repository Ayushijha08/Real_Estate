import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const PropertySchema = new Schema({
    propertyTitle: {
        type: String,
        required: true, 
    },
    propertyType: {
        type: String,
        required: true, 
        enum: ['Residential', 'Commercial', 'Industrial'], 
    },
    address: {
        type: String,
        required: true, 
    },
    price: {
        type: Number,
        required: true, 
               min: 0, 
    },
    areaSqft: {
        type: Number,
        required: true, 
        min: 0, 
    },
    furnishing: {
        type: String,
        enum: ['Fully Furnished', 'Semi Furnished', 'Unfurnished'],
        default: 'Unfurnished',
    },
    status: {
        type: String,
        enum: ['Available', 'Sold', 'Rented'],
        default: 'Available', 
    },
   
}, { timestamps: true }); 

const Property = model('Property', PropertySchema);

export default Property;
