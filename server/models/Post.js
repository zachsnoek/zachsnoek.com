const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: [true, "Title is required."],
    },
    description: {
        type: String,
        required: [true, "Description is required."],
    },
    content: {
        type: String,
        required: [true, "Content is required"],
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    lastEdited: {
        type: Date,
        default: Date.now(),
    },
    tags: {
        type: [String],
        required: false,
    },
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
