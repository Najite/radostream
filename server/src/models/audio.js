const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const audioSchema = new Schema({
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
    fileUrl: {
        type: String,
        required: [true, "File url is required"],
    },
    duration: {
        type: Number,
        required: [true, "Duration is required"],
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User is required"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, {timestamps: true});

module.exports = model("Audio", audioSchema);