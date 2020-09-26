const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
    let error = { ...err };

    error.message = err.message;

    console.log(err);

    // Mongoose bad ObjectId
    if (err.name === "CastError") {
        const message = `Resource not found.`;
        error = new ErrorResponse(message, 404);
    }

    // Mongoose duplicate key (doesn't have a helpful name so check by error code)
    if (err.code === 11000) {
        const message = `Resource already exists with field value entered`;
        error = new ErrorResponse(message, 400);
    }

    if (err.code === "E11000") {
        const message =
            "A field that is supposed to be unique already has the value entered.";
        error = new ErrorResponse(message, 400);
    }

    // Mongoose validation error
    if (err.name === "ValidationError") {
        const message = Object.values(err.errors).map((val) => val.message);
        error = new ErrorResponse(message, 400);
    }

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || "Server Error",
    });
};

module.exports = errorHandler;
