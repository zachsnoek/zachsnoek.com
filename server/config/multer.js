const fs = require("fs");
const path = require("path");
const multer = require("multer");
const ErrorResponse = require("../utils/errorResponse");

const INPUT_NAME = "image";
const UPLOAD_DIR = "./public/assets/img/portfolio";
const FILE_TYPES = /jpeg|jpg|png|gif/;
const MAX_SIZE = 10000000; // 10 MB limit

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, UPLOAD_DIR);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

function checkFileType(file, cb) {
    const extName = FILE_TYPES.test(
        path.parse(file.originalname).ext.toLowerCase()
    );
    const mimeType = FILE_TYPES.test(file.mimetype);

    if (extName && mimeType) {
        return cb(null, true);
    }

    cb(new ErrorResponse("Unsupported file type.", 400));
}

module.exports.deleteImage = async (filename) => {
    await fs.unlink(`${UPLOAD_DIR}/${filename}`, (err) => {
        if (err) throw err;
    });
};

module.exports = multer({
    storage: storage,
    limits: {
        fileSize: MAX_SIZE,
    },
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    },
}).single(INPUT_NAME);
