import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    customer: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        default: ""
    },
    total: {
        type: Number,
        required: true
    },
    productInfo: {
        type: Array
    },
    status: {
        type: Number,
        default: 0
    },
    method: {
        type: Number,
        required: true
    }
}, {timestamps: true})

export default mongoose.models.Order || mongoose.model("Order", OrderSchema)