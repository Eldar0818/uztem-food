import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
    time: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    describe: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    }
}, {timestamps: true})

export default mongoose.models.Booking || mongoose.model("Booking", BookingSchema)