const asyncHandler = require("../middleware/asyncHandler");
const sendEmail = require("../utils/sendEmail");
const ErrorResponse = require("../utils/errorResponse");

// @desc    Send a contact email
// @route   POST /api/v1/contact
// @access  Public
module.exports.contact = asyncHandler(async (req, res, next) => {
    try {
        await sendEmail({
            name: req.body.name,
            fromEmail: req.body.fromEmail,
            message: req.body.message,
        });

        res.status(200).json({
            success: true,
            data:
                "Your email has been sent! I will respond as soon as possible.",
        });
    } catch (err) {
        console.log(err);

        res.status(500).json({
            success: false,
            data:
                "There was an issue sending your email. I've been notified and will look into the issue.",
        });
    }
});
