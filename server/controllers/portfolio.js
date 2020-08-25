const Project = require("../models/Project");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/asyncHandler");

// @desc    Create a new project
// @route   POST /api/v1/portfolio
// @access  Private
module.exports.createProject = asyncHandler(async (req, res, next) => {
    const project = await Project.create(req.body);

    res.status(201).json({
        success: true,
        data: project,
    });
});

// @desc    Get all projects
// @route   GET /api/v1/portfolio
// @access  Public
module.exports.getProjects = asyncHandler(async (req, res, next) => {
    const projects = await Project.find();

    res.status(200).json({
        success: true,
        data: projects,
    });
});

// @desc    Update a project
// @route   PUT /api/v1/portfolio/:id
// @access  Private
module.exports.updateProject = asyncHandler(async (req, res, next) => {
    const project = await Project.findById(req.params.id);

    if (!project) {
        return next(
            new ErrorResponse(`No project with ID of ${req.params.id}`),
            404
        );
    }

    const updatedProject = await Project.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
            runValidators: true,
        }
    );

    res.status(200).json({
        success: true,
        data: updatedProject,
    });
});

// @desc    Delete a project
// @route   DELETE /api/v1/portfolio/:id
// @access  Private
module.exports.deleteProject = asyncHandler(async (req, res, next) => {
    const project = await Project.findById(req.params.id);

    if (!project) {
        return next(
            new ErrorResponse(
                `The project with ID ${req.params.id} does not exist.`,
                404
            )
        );
    }

    await project.remove();

    res.status(200).json({
        success: true,
        data: req.params.id,
    });
});
