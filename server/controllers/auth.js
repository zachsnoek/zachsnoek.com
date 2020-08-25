const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/asyncHandler");
const sendTokenResponse = require("../utils/sendTokenResponse");

// @desc    Register a user.
// @route   POST /api/v1/auth/register
// @access  Public
module.exports.registerUser = asyncHandler(async (req, res, next) => {
    const user = await User.create(req.body);

    res.status(201).json({
        success: true,
        data: user,
    });
});

// @desc    Log in a user.
// @route   POST /api/v1/auth/login
// @access  Public
module.exports.login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new ErrorResponse("Invalid credentials.", 400));
    }

    // Check that user exists
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
        return next(new ErrorResponse("Invalid credentials.", 401));
    }

    // Check if password matches
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
        return next(new ErrorResponse("Invalid credentials.", 401));
    }

    sendTokenResponse(user, 200, res);
});

// @desc    Logout a user.
// @route   GET /api/v1/auth/logout
// @access  Public
module.exports.logout = asyncHandler((req, res, next) => {
    // TODO: Add user's JWT to blocklist
    res.cookie("token", "none", {
        expires: new Date(Date.now() + 10 * 1000),
        httpOnly: true,
    });

    res.status(200).json({
        success: true,
        data: {},
    });
});

// @desc    Get the currently logged in user.
// @route   GET /api/v1/auth/me
// @access  Private
module.exports.getMe = asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.user.id);

    res.status(200).json({
        success: true,
        data: user,
    });
});
