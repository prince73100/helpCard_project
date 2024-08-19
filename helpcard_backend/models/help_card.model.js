import mongoose from "mongoose";

const helpcardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps: true })

export const Helpcard = mongoose.model('Helpcard', helpcardSchema);