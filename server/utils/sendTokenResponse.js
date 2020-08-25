function sendTokenResponse(user, statusCode, res) {
    const token = user.getSignedJWTToken();

    // Cookie options
    const options = {
        expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
    };

    res.status(statusCode).cookie("token", token, options).json({
        success: true,
        token: token,
    });
}

module.exports = sendTokenResponse;
