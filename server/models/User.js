const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
    forename: {
        type: String,
        trim: true,
        required: [true, "First name is required."],
    },
    surname: {
        type: String,
        trim: true,
        required: [true, "Surname is required."],
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: [true, "Email is required."],
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Email must be formatted correctly.",
        ],
    },
    role: {
        type: String,
        enum: ["admin", "maintainer", "user"],
        default: "user",
    },
    password: {
        type: String,
        minlength: 6,
        select: false,
        required: [true, "Password is required."],
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

// Encrypt password using bcrypt
UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// Schema method to sign JWT and return
UserSchema.methods.getSignedJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_COOKIE_EXPIRE,
    });
};

// Schema method to compare password with hashed password
UserSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("User", UserSchema);
