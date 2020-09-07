const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required."],
    },
    description: {
        type: String,
        required: [true, "Description is required."],
    },
    startDate: {
        type: Date,
        required: false,
    },
    endDate: {
        type: Date,
        required: false,
    },
    image: {
        type: String,
        required: [true, "Image is required."],
    },
    github: {
        type: String,
        required: false,
    },
    website: {
        type: String,
        required: false,
    },
    position: {
        type: Number,
        required: [true, "Position is required."],
    },
    tags: {
        type: [String],
        required: [true, "Tags are required."],
    },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
