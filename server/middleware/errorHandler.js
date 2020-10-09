const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
    let error = { ...err };
    error.message = err.message;

    console.error(err);

    // Mongoose bad ObjectId
    if (err.name === "CastError") {
        error = new ErrorResponse("Resource not found.", 404);
    }

    // Mongoose duplicate key
    if (err.code === 11000) {
        const { keyValue } = err;
        const key = Object.keys(keyValue)[0];
        const value = Object.values(keyValue)[0];
        const message = `Another document already exists with a ${key} of ${value}.`;

        error = new ErrorResponse(message, 400);
    }

    // Mongoose validation error
    if (err.name === "ValidationError") {
        const messages = [];
        Object.values(err.errors).forEach((val) => messages.push(val.message));
        error = new ErrorResponse(
            "Please fill out all required fields.",
            400,
            messages
        );
    }

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.messages || error.message || "Server Error",
    });
};

module.exports = errorHandler;
