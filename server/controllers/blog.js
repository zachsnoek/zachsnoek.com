const Post = require("../models/Post");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/asyncHandler");
const slugify = require("slugify");

const createSlug = (title) => slugify(title, { lower: true });

// @desc    Create a new post
// @route   POST /api/v1/blog
// @access  Private
module.exports.createPost = asyncHandler(async (req, res, next) => {
    req.body.slug = createSlug(req.body.title);

    const post = await Post.create(req.body);

    res.status(201).json({
        success: true,
        data: post,
    });
});

// @desc    Get all posts
// @route   GET /api/v1/blog
// @access  Public
module.exports.getPosts = asyncHandler(async (req, res, next) => {
    const posts = await Post.find().sort({ createdAt: -1 });

    res.status(200).json({
        success: true,
        data: posts,
    });
});

// @desc    Get a post
// @route   GET /api/v1/blog/:slug
// @access  Public
module.exports.getPost = asyncHandler(async (req, res, next) => {
    const { slug } = req.params;
    const post = await Post.findOne({ slug });

    if (!post) {
        return next(
            new ErrorResponse(`No post exists with a slug of ${slug}.`, 404)
        );
    }

    res.status(200).json({
        success: true,
        data: post,
    });
});

// @desc    Update a post
// @route   PUT /api/v1/blog/:id
// @access  Private
module.exports.updatePost = asyncHandler(async (req, res, next) => {
    const post = await Post.findById(req.params.id);

    if (!post) {
        return next(
            new ErrorResponse(
                `No post exists with a slug of ${req.params.id}.`,
                404
            )
        );
    }

    req.body.lastEdited = Date.now();

    if (req.body.title) req.body.slug = createSlug(req.body.title);

    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });

    res.status(200).json({
        success: true,
        data: updatedPost,
    });
});

// @desc    Delete a post
// @route   DELETE /api/v1/blog/:id
// @access  Private
module.exports.deletePost = asyncHandler(async (req, res, next) => {
    const post = await Post.findById(req.params.id);

    if (!post) {
        return next(
            new ErrorResponse(
                `No post exists with a slug of ${req.params.id}.`,
                404
            )
        );
    }

    await post.remove();

    res.status(200).json({
        success: true,
        data: req.params.id,
    });
});
