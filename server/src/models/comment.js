const mongoose = require("mongoose");
const {Schema, model} = mongoose;

const commentSchema = new Schema({
    text: {
        type: String,
        required: [true, "Text is required"],
        trim: true,
    }, 
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User is required"]
    },
    audio: {
        type: Schema.Types.ObjectId,
        ref: "Audio",
        required: [true, "audio is required"],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, {timestamps: true});

module.exports = model("Comment", commentSchema);