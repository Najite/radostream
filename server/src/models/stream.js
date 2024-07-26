const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const streamSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        trim: true,
    },
    description: {
        type: String,
        default: "",
        trim: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User is required"],
    },
    isLive: {
        type: Boolean,
        default: false,
    },
    startTime: {
        type: Date,
    },
    endTime: {
        type: Date,
    },
    listeners: [{
        type: Schema.Types.ObjectId,
        ref: "User",
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
}, {timestamps: true});

module.exports = model("Stream", streamSchema);