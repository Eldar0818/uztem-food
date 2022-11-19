import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        maxLength: 75
    },
    price: {
        type: [Number],
        required: true
    },
    desc: {
        type: String,
        required: true,
        maxLength: 250
    },
    image: {
        type: String,
        required: true,
    }
}, {timestamps: true})

export default mongoose.models.Product || mongoose.model("Product", ProductSchema)