const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// Configure Express
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(cors());

// dotenv and MongoDB configuration
dotenv.config({ path: "./config/config.env" });
connectDB();

// Express Middleware
app.use(express.json());

// Mount routers
const API_PRE = "/api/v1";
app.use(`${API_PRE}/auth`, require("./routes/auth"));
app.use(`${API_PRE}/portfolio`, require("./routes/portfolio"));
app.use(`${API_PRE}/blog`, require("./routes/blog"));
app.use(`${API_PRE}/contact`, require("./routes/contact"));

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on port ${PORT}`));
