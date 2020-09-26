const mongoose = require("mongoose");

const connectDB = async () => {
    const { NODE_ENV, MONGO_URI_PROD, MONGO_URI_DEV } = process.env;

    const databaseUri =
        NODE_ENV === "development" ? MONGO_URI_DEV : MONGO_URI_PROD;

    const conn = await mongoose.connect(databaseUri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    });

    console.log(`Connected to MongoDB: ${conn.connection.host}`);
};

module.exports = connectDB;
