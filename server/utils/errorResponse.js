class ErrorResponse extends Error {
    constructor(message, statusCode, messages) {
        super(message);
        this.statusCode = statusCode;
        this.messages = messages;
    }
}

module.exports = ErrorResponse;
