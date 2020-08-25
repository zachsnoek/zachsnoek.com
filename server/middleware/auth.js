const jwt = require("jsonwebtoken");
const asyncHandler = require("./asyncHandler");
const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");

module.exports.protect = asyncHandler(async (req, res, next) => {
    let token;

    // Check for authorization header
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        token = req.headers.authorization.split(" ")[1];
    }

    // Check that token exists
    if (typeof token === "undefined") {
        // Check for undefined to get correct error
        return next(
            new ErrorResponse(
                "You are not authorized to access this resource.",
                401
            )
        );
    }

    // TODO: Check JWT blocklist

    // Verify token
    try {
        // Extract payload
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Look up user ID
        req.user = await User.findById(decoded.id);

        next();
    } catch (error) {
        return next(
            new ErrorResponse(
                "You are not authorized to access this resource.",
                401
            )
        );
    }
});

module.exports.authorize = (...roles) => {
    return (req, res, next) => {
        const role = req.user.role;

        if (!roles.includes(role)) {
            return next(
                new ErrorResponse(
                    `Users with a role of '${role}' are not authorized to access this resource.`,
                    403
                )
            );
        }

        next();
    };
};
